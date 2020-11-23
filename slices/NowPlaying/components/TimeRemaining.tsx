import React from "react";

function formatRemainingTime(seconds: number) {
  const lessThanSixtyMin = seconds < 3600;
  const lessThanTwoMin = seconds < 120;
  const lessThanOneMin = seconds <= 60;

  if (lessThanOneMin) {
    return `${seconds}s left`;
  }

  if (lessThanTwoMin) {
    return `1 min ${seconds - 60}s left`;
  }

  if (lessThanSixtyMin) {
    return `~ ${Math.round(seconds / 60)} min left`;
  }

  return `${Math.floor(seconds / 60 / 60)} hours left`;
}

export default function TimeRemaining({ seconds }: { seconds: number }) {
  return (
    <span style={{ color: "#999999" }}>{formatRemainingTime(seconds)}</span>
  );
}
