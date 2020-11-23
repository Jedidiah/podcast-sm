import { UnwrappedPodcastHeader } from ".";
import { mockArtworkForPreview } from "./mockUtils";
import { UnwrappedNowPlaying } from "../NowPlaying";

export default {
  title: "slices/PodcastHeader",
  component: UnwrappedPodcastHeader,
  argTypes: {
    title: { control: "text", defaultValue: "Splitting Light" },
    subtitle: {
      control: "text",
      defaultValue: "Making rainbows with Prismic",
    },

    description: {
      control: "object",
      defaultValue: [
        {
          text:
            "In this podcast we look into the weird and wonderful properties of refraction, splitting light and content management systems.",
          type: "paragraph",
          spans: [],
        },
      ],
    },

    categories: {
      control: "text",
      defaultValue: "Science, Nature, Tech",
    },

    artwork: {
      control: "text",
      defaultValue: "https://seagazing.com/sm/splitting-light-artwork.png",
    },

    website: {
      control: "text",
      defaultValue: "http://example.com/",
    },

    author: {
      control: "text",
      defaultValue: "Mr Blue Sky",
    },

    authorEmail: {
      control: "text",
      defaultValue: "blue@example.com",
    },
  },
};

export const Default = ({ artwork, items, ...props }) => {
  return (
    <UnwrappedPodcastHeader
      artwork={mockArtworkForPreview(artwork)}
      {...props}
    />
  );
};
