import React from "react";
import { RichText } from "prismic-reactjs";

const EpisodeList = ({ slice }) => (
  <section>
    {slice.primary.title ? (
      <RichText render={slice.primary.title} />
    ) : (
      <h2>Template slice, update me!</h2>
    )}
    {slice.primary.description ? (
      <RichText render={slice.primary.description} />
    ) : (
      <p>start by editing this slice from inside the SliceMachine builder!</p>
    )}
  </section>
);

export default EpisodeList;
