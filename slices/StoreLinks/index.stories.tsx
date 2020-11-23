import { UnwrappedStoreLinks } from ".";

export default {
  title: "slices/StoreLinks",
  component: UnwrappedStoreLinks,
  argTypes: {
    intro: {
      control: "object",
      defaultValue: [
        {
          text: "You can find the podcast in all the normal places.",
          type: "paragraph",
          spans: [],
        },
      ],
    },
    items: {
      control: "object",
      defaultValue: [
        {
          url: {
            url: "https://podcasts.apple.com/gb/podcast/seagazing/id1539619129",
          },
          title: "Apple Podcasts",
        },
        {
          url: { url: "https://open.spotify.com/show/3xPRY7VNUBYBoFChrANagR" },
          title: "Spotify",
        },
        {
          url: { url: "https://pca.st/czrx75zs" },
          title: "PocketCasts",
        },
        {
          url: { url: "https://podcastrepublic.net/podcast/1539619129" },
          title: "Podcast Republic",
        },
      ],
    },
  },
};

export const Default = ({ ...props }) => {
  return <UnwrappedStoreLinks {...props} />;
};

Default.args = {};
