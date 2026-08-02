// Rehype plugin: turn a stand-alone image (a paragraph whose only meaningful
// child is one <img>) into a <figure class="editorial-figure">. When the image
// has alt text, that text is rendered as a <figcaption> so blog images can
// carry a visible description — the "Hình ảnh có thêm description" pattern.
//
// Authoring stays plain markdown:  ![Caption text here](images/foo.jpg)
//   → <figure class="editorial-figure"><img …><figcaption>Caption text here</figcaption></figure>
// An image with empty alt (`![](…)`) simply becomes a caption-less figure.
//
// Scoped to assets/blog/** so portfolio project pages are left untouched.

export default function rehypeBlogFigures() {
  return (tree, file) => {
    const filePath = String(
      file?.path ?? (Array.isArray(file?.history) ? file.history[0] : '') ?? ''
    ).replace(/\\/g, '/');

    if (!filePath.includes('/assets/blog/') && !filePath.includes('/assets/news/')) return;

    walk(tree);

    function walk(node) {
      if (!node || !Array.isArray(node.children)) return;
      for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i];
        if (isStandaloneImageParagraph(child)) {
          const img = child.children.find(
            (c) => c.type === 'element' && c.tagName === 'img'
          );
          const alt = String(img.properties?.alt ?? '').trim();
          const figureChildren = [img];
          if (alt) {
            figureChildren.push({
              type: 'element',
              tagName: 'figcaption',
              properties: {},
              children: [{ type: 'text', value: alt }],
            });
          }
          node.children[i] = {
            type: 'element',
            tagName: 'figure',
            properties: { className: ['editorial-figure'] },
            children: figureChildren,
          };
        } else {
          walk(child);
        }
      }
    }

    function isStandaloneImageParagraph(node) {
      if (
        !node ||
        node.type !== 'element' ||
        node.tagName !== 'p' ||
        !Array.isArray(node.children)
      ) {
        return false;
      }
      const meaningful = node.children.filter(
        (c) => !(c.type === 'text' && c.value.trim() === '')
      );
      return (
        meaningful.length === 1 &&
        meaningful[0].type === 'element' &&
        meaningful[0].tagName === 'img'
      );
    }
  };
}
