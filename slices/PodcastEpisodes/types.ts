import { RichTextBlock, Link } from "prismic-reactjs";

export type TPrismicImage = {
  dimensions: {
    width: number;
    height: number;
  };
  alt?: string;
  copyright?: string | null;
  url: string;
};

type TRichText =
  | RichTextBlock[]
  | { type: string; text: string; spans: any[] }[];

export type TPodcastSlicePrimary = {
  title: string;
  subtitle: string;
  description: TRichText;
  categories: string;
  artwork: TPrismicImage & {
    thumbnail: TPrismicImage;
    full: TPrismicImage;
  };
  website: Link;
  author: string;
  authorEmail: string;
  showOnlyEpisodes: boolean;
  showEpisodeArtwork: boolean;
};

export type TPodcastSliceItem = {
  title: string;
  publishedAt: string;
  description: TRichText;
  episodeType: "Full" | "Trailer";
  explicit: boolean;
  audioFile: Link;
  duration: number;
  artwork: TPrismicImage & {
    thumbnail: TPrismicImage;
    full: TPrismicImage;
  };
};

export type TPodcastSliceItems = TPodcastSliceItem[];

export interface IPodcastSlice {
  primary: TPodcastSlicePrimary;
  items: TPodcastSliceItems;
}
