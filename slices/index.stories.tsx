import { UnwrappedPodcastEpisodes } from "./PodcastEpisodes";
import {
  mockArtworkForPreview,
  mockEpisode,
} from "./PodcastEpisodes/mockUtils";
import { UnwrappedNowPlaying } from "./NowPlaying";

const mockEpisodes = [
  mockEpisode({
    title: "The Red Episode with Sadek",
    description:
      "In this episode Sadek explores the warm end of the spectrum and discovers something interesting about short-wave IR! (SWIR)",
    url:
      "https://cdn.sanity.io/files/gotgzth4/production/e737af6a2816c5f24e34408da44efd38d67af963.webm",
    artwork: "https://seagazing.com/sm/splitting-light-artwork-red.png",
  }),
  mockEpisode({
    title: "The Orange Episode with Nouha",
    description:
      "Nothing rhymes with orange but that doesn't stop Nouha trying! In this episode Nouha takes us on a journey from the history of carrots and why they are orange to the rollout of 3G in Belfast.",
    url: "",
    artwork: "https://seagazing.com/sm/splitting-light-artwork-orange.png",
  }),
  mockEpisode({
    title: "The Yellow Episode with Renaud",
    explicit: true,
    description:
      "Renaud really likes yellow, but the Beatles aquatic transport not so much, they would much rather be in an octopus' garden.",
    url: "",
    artwork: "https://seagazing.com/sm/splitting-light-artwork-yellow.png",
  }),
  mockEpisode({
    title: "The Green Episode with Lucie",
    description:
      "In this episode Lucie explains why plants are green and what colour they could have been in the past. ",
    url: "",
    artwork: "https://seagazing.com/sm/splitting-light-artwork-green.png",
  }),
  mockEpisode({
    title: "The Blue Episode with Arnaud",
    description:
      "Arnaud is feeling pretty blue. In this episode Arnaud talks about emotion and colours and the accosiations we have with colour in different cultures.",
    url: "",
    artwork: "https://seagazing.com/sm/splitting-light-artwork-blue.png",
  }),
  mockEpisode({
    title: "Ultra-violet and beyond!",
    description:
      "In the final episode of the season the whole team get together to explore what lies beyond the visible spectrum.",
    url: "",
    artwork: "https://seagazing.com/sm/splitting-light-artwork-purple.png",
  }),
];

function getMockEpisodes(length: "short" | "long") {
  if (length === "short") {
    return mockEpisodes.slice(0, 2);
  }

  return mockEpisodes;
}

export default {
  title: "demo/All Together",
  component: UnwrappedPodcastEpisodes,
  argTypes: {
    showEpisodeArtwork: {
      control: "boolean",
      defaultValue: true,
      description:
        "Whether to show the artwork for each episode in the list. You might want to show them if you have unique artwork for each episode",
    },
    showOnlyEpisodes: {
      control: "boolean",
      defaultValue: true,
      description:
        "Whether to show the header with information about the podcast or only show the episode list.",
    },

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

    items: {
      control: {
        type: "select",
        options: ["long", "short"],
        defaultValue: "long",
      },
    },
  },
};

export const DemoWithNowPlaying = ({ artwork, items, ...props }) => {
  return (
    <>
      {/* <p
        style={{
          background: "aliceblue",
          padding: "2em",
          border: "1px solid lightblue",
          borderRadius: "5px",
          fontSize: "2em",
        }}
      >
        This story is a demo of how the Podcast slice and the NowPlaying slice
        interact. Play an episode to see the player.
      </p> */}
      <UnwrappedPodcastEpisodes
        items={[...getMockEpisodes(items)]}
        artwork={mockArtworkForPreview(artwork)}
        {...props}
      />
      <UnwrappedNowPlaying />
    </>
  );
};

DemoWithNowPlaying.args = {
  showOnlyEpisodes: false,
  showEpisodeArtwork: true,
};
