import Artwork from "./Artwork";
import { useButton } from "@react-aria/button";
import React, { useRef, useCallback } from "react";
import { RichText } from "prismic-reactjs";
import { TPodcastSliceItem, TPodcastSlicePrimary } from "../types";
import { useFocusRing } from "@react-aria/focus";

function Episode(episode: TPodcastSliceItem & { showEpisodeArtwork: boolean }) {
  const ref = useRef();
  const handlePlay = useCallback(() => {
    const event = new CustomEvent("loadPodcastEpisode", { detail: episode });
    document.dispatchEvent(event);
  }, []);
  const { buttonProps } = useButton(
    { elementType: "li", onPress: handlePlay },
    ref
  );
  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <li
      ref={ref}
      {...buttonProps}
      {...focusProps}
      className={
        isFocusVisible
          ? "episode-list__episode episode-list__episode--hover"
          : "episode-list__episode"
      }
      style={{
        outline: isFocusVisible ? undefined : "0 none",
      }}
      key={String(episode.publishedAt)}
    >
      {Boolean(episode.showEpisodeArtwork) && (
        <Artwork
          image={episode.artwork.thumbnail}
          size={100}
          styles={{
            minWidth: "100px",
            minHeight: "100px",
            marginRight: "1em",
          }}
        />
      )}
      <div className="episode-list__episode__description">
        <h3 className="episode-list__episode__title">{episode.title}</h3>
        <RichText render={episode.description} />
        <p className="episode-list__episode__duration">
          ~{Math.ceil(Number(episode.duration) / 60)}mins
        </p>
      </div>
    </li>
  );
}

export default function EpisodeList(
  props: TPodcastSlicePrimary & { items: TPodcastSliceItem[] }
) {
  return (
    <ol className="episode-list" reversed>
      {props.items.map((episode) => (
        <Episode
          key={episode.title}
          {...episode}
          showEpisodeArtwork={props.showEpisodeArtwork}
        />
      ))}
    </ol>
  );
}
