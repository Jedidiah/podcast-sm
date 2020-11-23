import { UnwrappedNowPlaying } from ".";
import { useCallback } from "react";
// import model from "./model.json";
// import mocks from "./mocks.json";
// import { storiesOf } from "@storybook/react";

// mocks.forEach((variation) => {
//   storiesOf(model.name, Component).add(variation.name, () => (
//     <Component slice={variation} />
//   ));
// });

export default {
  title: "slices/NowPlaying",
  component: UnwrappedNowPlaying,
  argTypes: {
    showSkipForward: {
      control: "boolean",
      defaultValue: true,
      description: "Whether to show the skip 10s forward button or not",
    },
    showSkipBack: {
      control: "boolean",
      defaultValue: true,
      description: "Whether to show the skip 10s backwards button or not",
    },
    showArtwork: {
      control: "boolean",
      defaultValue: true,
      description: "Whether to show the Artwork or not",
    },
    showProgressBar: {
      control: "boolean",
      defaultValue: true,
      description: "Whether to show the progress bar or not",
    },
    showTitle: {
      control: "boolean",
      defaultValue: true,
      description: "Whether to show the episode title or not",
    },
    position: {
      control: {
        type: "select",
        options: ["sticky", "static"],
      },
      defaultValue: "sticky",
      description:
        "Whether the player should stick to the bottom of the window or stay static (in-line) as you scroll the page",
    },
    hideWhenInactive: {
      control: "boolean",
      defaultValue: true,
      description: "Whether to hide the player when nothing is loaded",
    },
  },
};

export const DefaultPodcastPlayer = (props) => {
  const handleLoadTrack = useCallback(() => {
    const event = new CustomEvent("loadPodcastEpisode", {
      detail: {
        title: "The Red Episode with Sadek",
        audioFile: {
          link_type: "Web",
          url:
            "https://cdn.sanity.io/files/gotgzth4/production/e737af6a2816c5f24e34408da44efd38d67af963.webm",
        },
        artwork: {
          url: "https://seagazing.com/sm/splitting-light-artwork-red.png",
          dimensions: { width: 600, height: 600 },
          thumbnail: {
            url: "https://seagazing.com/sm/splitting-light-artwork-red.png",
            dimensions: { width: 200, height: 200 },
          },
          full: {
            url: "https://seagazing.com/sm/splitting-light-artwork-red.png",
            dimensions: { width: 2000, height: 2000 },
          },
        },
        showEpisodeArtwork: true,
      },
    });

    document.dispatchEvent(event);
  }, []);

  const handleClearTrack = useCallback(() => {
    const event = new CustomEvent("clearPodcastEpisode");
    document.dispatchEvent(event);
  }, []);

  return (
    <>
      <div style={{ marginBottom: "10vh" }}>
        <button onClick={handleLoadTrack}>Load example track</button>
        <button onClick={handleClearTrack}>Clear example track</button>
      </div>
      <UnwrappedNowPlaying {...props} />
    </>
  );
};
