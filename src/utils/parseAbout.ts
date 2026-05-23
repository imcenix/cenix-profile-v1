// Parsers for the three free-form markdown files in assets/about-me/:
//   - About Me.md   (sections: Quote, Short Version, Full Version)
//   - Experience.md (one H1 per company, with bold position, italic period, bullets)
//   - Projects.md   (one H1 per project, with bold subtitle, italic year, bullets)
//
// Each file uses H1 (#) to delimit entries — no YAML frontmatter — so we
// split by headings and pick out the structured fields ourselves.

export interface H1Section {
  title: string;
  content: string;
}

export interface ExperienceSubGroup {
  name: string;
  bullets: string[];
}

export interface ExperienceEntry {
  company: string;
  position: string;
  period: string;
  bullets: string[];
  subGroups: ExperienceSubGroup[];
}

export interface ProjectEntry {
  name: string;
  subtitle: string;
  year: string;
  bullets: string[];
}

/** Split markdown into sections by H1 headings (`# Title`). */
export function parseH1Sections(markdown: string): H1Section[] {
  const sections: H1Section[] = [];
  const lines = markdown.split('\n');
  let current: H1Section | null = null;
  let buffer: string[] = [];

  for (const line of lines) {
    const match = line.match(/^# +(.+?)\s*$/);
    if (match) {
      if (current) {
        current.content = buffer.join('\n').trim();
        sections.push(current);
      }
      current = { title: match[1].trim(), content: '' };
      buffer = [];
    } else if (current) {
      buffer.push(line);
    }
  }

  if (current) {
    current.content = buffer.join('\n').trim();
    sections.push(current);
  }

  return sections;
}

/** Parse Experience.md into structured entries. */
export function parseExperience(markdown: string): ExperienceEntry[] {
  return parseH1Sections(markdown).map((section) => {
    const lines = section.content.split('\n');
    let position = '';
    let period = '';
    const topBullets: string[] = [];
    const subGroups: ExperienceSubGroup[] = [];
    let currentBullets: string[] = topBullets;

    for (const raw of lines) {
      const line = raw.trim();
      if (!line) continue;

      // Skip horizontal rules (---) used as separators
      if (/^-{3,}$/.test(line)) continue;

      const boldOnly = line.match(/^\*\*(.+?)\*\*$/);
      if (boldOnly) {
        if (!position) {
          position = boldOnly[1];
        } else {
          subGroups.push({ name: boldOnly[1], bullets: [] });
          currentBullets = subGroups[subGroups.length - 1].bullets;
        }
        continue;
      }

      const italicOnly = line.match(/^\*(.+?)\*$/);
      if (italicOnly && !period) {
        period = italicOnly[1];
        continue;
      }

      const bullet = line.match(/^[-*•]\s+(.+)$/);
      if (bullet) {
        currentBullets.push(bullet[1]);
        continue;
      }
    }

    return {
      company: section.title,
      position,
      period,
      bullets: topBullets,
      subGroups,
    };
  });
}

/** Parse Projects.md into structured entries. */
export function parseProjects(markdown: string): ProjectEntry[] {
  return parseH1Sections(markdown).map((section) => {
    const lines = section.content.split('\n');
    let subtitle = '';
    let year = '';
    const bullets: string[] = [];

    for (const raw of lines) {
      const line = raw.trim();
      if (!line) continue;
      if (/^-{3,}$/.test(line)) continue;

      const boldOnly = line.match(/^\*\*(.+?)\*\*$/);
      if (boldOnly && !subtitle) {
        subtitle = boldOnly[1];
        continue;
      }

      const italicOnly = line.match(/^\*(.+?)\*$/);
      if (italicOnly && !year) {
        year = italicOnly[1];
        continue;
      }

      const bullet = line.match(/^[-*•]\s+(.+)$/);
      if (bullet) {
        bullets.push(bullet[1]);
      }
    }

    return {
      name: section.title,
      subtitle,
      year,
      bullets,
    };
  });
}

/** Convert inline markdown emphasis (**bold**, *italic*) to HTML.
    Escapes raw HTML to avoid injection from user content. */
export function inlineMarkdown(text: string): string {
  const escaped = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  return escaped
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/(?<![*\w])\*([^*\n]+?)\*(?!\w)/g, '<em>$1</em>');
}

/** Render a free-form markdown snippet (paragraphs + inline emphasis)
    to safe HTML. Used for the Quote and About Me bios. */
export function renderParagraphs(markdown: string): string {
  return markdown
    .split(/\n{2,}/)
    .map((para) => para.trim())
    .filter(Boolean)
    .map((para) => `<p>${inlineMarkdown(para.replace(/\n/g, ' '))}</p>`)
    .join('\n');
}
