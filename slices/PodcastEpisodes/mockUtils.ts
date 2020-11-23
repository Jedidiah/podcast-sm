export function mockArtworkForPreview(
  url: string = "https://seagazing.com/splitting-light-artwork.png"
) {
  return {
    url,
    dimensions: { width: 600, height: 600 },
    thumbnail: { url, dimensions: { width: 200, height: 200 } },
    full: { url, dimensions: { width: 2000, height: 2000 } },
  };
}

export function mockEpisode({
  title,
  description,
  publishedAt = "2020-03-16T20:08:22.344Z",
  url,
  artwork,
  episodeType = "Full",
  explicit = false,
  duration = 3561,
}: {
  title: string;
  description: string;
  publishedAt?: string;
  url: string;
  artwork: string;
  episodeType?: "Full" | "Trailer";
  explicit?: boolean;
  duration?: number;
}) {
  return {
    title,
    publishedAt,
    description: [{ type: "paragraph", text: description, spans: [] }],
    episodeType,
    explicit,
    audioFile: { link_type: "Web", url },
    duration,
    artwork: mockArtworkForPreview(artwork),
  };
}
