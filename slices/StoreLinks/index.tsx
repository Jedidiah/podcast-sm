import React from "react";
import { RichText, RichTextBlock, Link } from "prismic-reactjs";

type TStoreLinksItem = { title: string; url: Link };
type TStoreLinksPrimary = { intro: RichTextBlock };

interface IStoreLinksSlice {
  primary: TStoreLinksPrimary;
  items: TStoreLinksItem[];
}

export function UnwrappedStoreLinks({
  intro,
  items = [],
}: TStoreLinksPrimary & { items: TStoreLinksItem[] }) {
  const links = items.map((item) => <a href={item.url.url}>{item.title}</a>);

  return (
    <section className="store-links">
      {Boolean(intro) && <RichText render={intro} />}
      <p>{links}</p>
    </section>
  );
}

function unwrapSlice(Component: typeof UnwrappedStoreLinks) {
  return ({ slice }: { slice: IStoreLinksSlice }) => (
    <Component {...slice.primary} items={slice.items} />
  );
}

export default unwrapSlice(UnwrappedStoreLinks);
