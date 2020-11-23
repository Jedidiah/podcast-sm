import React, { StyleHTMLAttributes } from "react";

function Artwork({
  image,
  styles,
  size = image.dimensions.width,
}: {
  image: {
    url: string;
    dimensions: { width: number; height: number };
  };
  size?: number | string;
  styles?: React.CSSProperties;
}) {
  return (
    <div
      className="podcast-artwork"
      style={{
        backgroundImage: `url(${image.url})`,
        maxHeight: `${image.dimensions.height}px`,
        maxWidth: `${image.dimensions.width}px`,
        width: `${size}`,
        height: `${size}`,
        ...styles,
      }}
    ></div>
  );
}

export default Artwork;
