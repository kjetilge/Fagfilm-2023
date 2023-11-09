

async function checkFile(url: string) {
  const response = await fetch(url, { method: 'HEAD' });
  return response.status === 200 ? url : null;
}

async function createSubtitleTrackFromSlug(slug: string) {
  const subtitleSource = await checkFile(`/subtitles/${slug}.srt`);

  const subtitleTrack: SubtitleTrack = subtitleSource
    ? {
        src: subtitleSource,
        label: 'English',
        lang: 'en-US',
        kind: 'subtitles',
        type: 'application/x-subrip',
        default: true,
      }
    : null;

  return subtitleTrack;
}

export default createSubtitleTrackFromSlug;