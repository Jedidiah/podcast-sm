import React from "react";
import { RichText } from "prismic-reactjs";
import Artwork from "./components/Artwork";
import { TPodcastSlicePrimary, IPodcastSlice } from "./types";
import Tags from "./components/Tags";

export function UnwrappedPodcastHeader(props: TPodcastSlicePrimary) {
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
    </article>
  );
}

function unwrapSlice(Component: typeof UnwrappedPodcastHeader) {
  return ({ slice }: { slice: IPodcastSlice }) => (
    <Component {...slice.primary} />
  );
}

export default unwrapSlice(UnwrappedPodcastHeader);
