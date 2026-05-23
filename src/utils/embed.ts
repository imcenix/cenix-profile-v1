// Platform-aware embed URL builder for blog vlog / short posts.
// Recognises YouTube, Facebook Reels, TikTok, and Instagram URLs.

export type EmbedPlatform = 'youtube' | 'facebook' | 'tiktok' | 'instagram' | 'unknown';

export interface EmbedInfo {
  platform: EmbedPlatform;
  /** Best-effort embed URL for an <iframe>. Empty if not supported. */
  embedUrl: string;
  /** Direct thumbnail URL if the platform exposes one. Otherwise empty. */
  thumbnailUrl: string;
  /** The original URL (for "Watch on …" link-outs). */
  sourceUrl: string;
}

/** Parse any supported URL into an EmbedInfo struct. */
export function getEmbedInfo(url: string | null | undefined): EmbedInfo {
  const empty: EmbedInfo = {
    platform: 'unknown',
    embedUrl: '',
    thumbnailUrl: '',
    sourceUrl: url ?? '',
  };
  if (!url) return empty;

  // -------- YouTube --------
  // Matches: https://www.youtube.com/watch?v=XYZ, https://youtu.be/XYZ,
  //          https://www.youtube.com/shorts/XYZ
  const ytMatch = url.match(
    /(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([\w-]{11})/
  );
  if (ytMatch) {
    const id = ytMatch[1];
    const startMatch = url.match(/[?&]t=(\d+)/);
    const startParam = startMatch ? `?start=${startMatch[1]}` : '';
    return {
      platform: 'youtube',
      embedUrl: `https://www.youtube.com/embed/${id}${startParam}`,
      thumbnailUrl: `https://img.youtube.com/vi/${id}/maxresdefault.jpg`,
      sourceUrl: url,
    };
  }

  // -------- Facebook Reel / Video --------
  // Matches: https://www.facebook.com/reel/123, https://www.facebook.com/<user>/videos/123
  if (/facebook\.com\/(reel|.*\/videos)\//i.test(url)) {
    return {
      platform: 'facebook',
      embedUrl: `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=0&autoplay=0`,
      thumbnailUrl: '', // FB doesn't expose public thumbnails — user supplies one
      sourceUrl: url,
    };
  }

  // -------- TikTok --------
  const ttMatch = url.match(/tiktok\.com\/@[^/]+\/video\/(\d+)/);
  if (ttMatch) {
    return {
      platform: 'tiktok',
      embedUrl: `https://www.tiktok.com/embed/v2/${ttMatch[1]}`,
      thumbnailUrl: '',
      sourceUrl: url,
    };
  }

  // -------- Instagram Reel --------
  if (/instagram\.com\/(reel|p)\//i.test(url)) {
    return {
      platform: 'instagram',
      embedUrl: `${url.replace(/\/?$/, '')}/embed`,
      thumbnailUrl: '',
      sourceUrl: url,
    };
  }

  return empty;
}

/** Human-readable label for a platform (used in "Watch on …" buttons). */
export function platformLabel(p: EmbedPlatform): string {
  switch (p) {
    case 'youtube':   return 'YouTube';
    case 'facebook':  return 'Facebook';
    case 'tiktok':    return 'TikTok';
    case 'instagram': return 'Instagram';
    default:          return 'source';
  }
}
