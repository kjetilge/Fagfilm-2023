

async function checkFile(url: string) {
  const response = await fetch(url, { method: 'HEAD' });
  return response.status === 200 ? url : null;
}

async function createSubtitleTrackFromSlug(slug: string) {
  const subtitleSource = await checkFile(`/subtitles/${slug}.vtt`);

  const subtitleTrack: SubtitleTrack = subtitleSource
    ? {
        src: subtitleSource,
        label: 'Norsk',
        language: 'no-NB',
        kind: 'subtitles',
        default: true,
      }
    : null;

  return subtitleTrack;
}

export default createSubtitleTrackFromSlug;