import React from "react";

function Tags({ text = "" }: { text: string }) {
  const tags = text.split(",");
  if (text.length === 0 || tags.length === 0) {
    return null;
  }
  return (
    <aside className="podcast__tags">
      Categories:{" "}
      <ul>
        {tags.map((tag) => (
          <li className="podcast__tag">{tag.trim()}</li>
        ))}
      </ul>
    </aside>
  );
}

export default Tags;
