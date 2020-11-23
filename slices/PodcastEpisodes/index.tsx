import React from "react";
import { RichText, RichTextBlock, Link } from "prismic-reactjs";
import Artwork from "./components/Artwork";
import EpisodeList from "./components/EpisodeList";
import {
  TPodcastSlicePrimary,
  TPodcastSliceItems,
  IPodcastSlice,
} from "./types";
import Tags from "./components/Tags";

export function UnwrappedPodcastEpisodes(
  props: TPodcastSlicePrimary & { items: TPodcastSliceItems }
) {
  if (props.showOnlyEpisodes) {
    return (
      <article className="podcast">
        <EpisodeList {...props} />
      </article>
    );
  }

  return (
    <article className="podcast">
      <header className="podcast__header">
        <Artwork
          image={props.artwork}
          size={"25vw"}
          styles={{ minWidth: "200px", minHeight: "200px" }}
        />
        <div className="podcast__header__titles">
          <h1>{props.title}</h1>
          <h2>{props.subtitle}</h2>
          <p>By {props.author}</p>
          <Tags text={props.categories} />
        </div>
      </header>
      <section className="podcast__description">
        <RichText render={props.description} />
      </section>

      <EpisodeList {...props} />
    </article>
  );
}

function unwrapSlice(Component: typeof UnwrappedPodcastEpisodes) {
  return ({ slice }: { slice: IPodcastSlice }) => (
    <Component {...slice.primary} items={slice.items} />
  );
}

export default unwrapSlice(UnwrappedPodcastEpisodes);
