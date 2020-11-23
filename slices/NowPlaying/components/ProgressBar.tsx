import React from "react";

import { AriaProgressBarProps } from "@react-types/progress";
import { useProgressBar } from "@react-aria/progress";

/**
 * Shows the current progress through a track and can seek to a position by clicking or pressing the arrow keys while it has focus
 */
export default function ProgressBar(
  props: {
    value: number;
    minValue?: number;
    maxValue?: number;
    handleSeek?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  } & AriaProgressBarProps
) {
  const { value, minValue = 0, maxValue = 100, handleSeek } = props;
  const { progressBarProps } = useProgressBar({
    "aria-label": "Elapsed Time",
    ...props,
  });

  const percentage = (value - minValue) / (maxValue - minValue);
  // const barWidth = `${Math.round(percentage * 100)}%`;

  return (
    <div>
      <input
        {...progressBarProps}
        className="now-playing__progress"
        value={value}
        type="range"
        min={minValue}
        max={maxValue}
        step={1}
        onChange={handleSeek}
      />
    </div>
  );
}
