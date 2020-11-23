import React from "react";
import { RichText, RichTextBlock, Link } from "prismic-reactjs";
import {
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaSoundcloud,
} from "react-icons/fa";

type TSocialLinksPrimary = {
  twitter?: string;
  instagram?: string;
  youtube?: string;
  soundcloud?: string;
};

interface ISocialLinksSlice {
  primary: TSocialLinksPrimary;
  items: [];
}

export function UnwrappedSocialLinks({
  twitter,
  instagram,
  youtube,
  soundcloud,
}: TSocialLinksPrimary & { items: [] }) {
  return (
    <section className="social-links">
      <p>Follow the Podcast:</p>
      {Boolean(twitter) && (
        <a href={twitter} target="_blank" rel="nofollow">
          <FaTwitter size={100} />
        </a>
      )}
      {Boolean(instagram) && (
        <a href={instagram} target="_blank" rel="nofollow">
          <FaInstagram size={100} />
        </a>
      )}
      {Boolean(youtube) && (
        <a href={youtube} target="_blank" rel="nofollow">
          <FaYoutube size={100} />
        </a>
      )}
      {Boolean(soundcloud) && (
        <a href={soundcloud} target="_blank" rel="nofollow">
          <FaSoundcloud size={100} />
        </a>
      )}
    </section>
  );
}

function unwrapSlice(Component: typeof UnwrappedSocialLinks) {
  return ({ slice }: { slice: ISocialLinksSlice }) => (
    <Component {...slice.primary} items={[]} />
  );
}

export default unwrapSlice(UnwrappedSocialLinks);
