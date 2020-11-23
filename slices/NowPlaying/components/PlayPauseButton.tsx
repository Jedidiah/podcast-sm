import React, { useRef } from "react";
import { useButton } from "@react-aria/button";
import { AriaButtonProps } from "@react-types/button";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import { useFocusRing } from "@react-aria/focus";

export default function PlayPauseButton({
  isPlaying,
  ...props
}: { isPlaying: boolean } & AriaButtonProps) {
  const ref = useRef();
  const { buttonProps, isPressed } = useButton(
    { "aria-label": isPlaying ? "Pause" : "Play", ...props },
    ref
  );
  const { isFocusVisible, focusProps } = useFocusRing();

  const Icon = isPlaying ? FaPauseCircle : FaPlayCircle;

  return (
    // <FocusRing focusClass="focus-ring">
    <button
      className="button"
      style={{
        appearance: "none",
        border: "0 none",
        cursor: "pointer",
        background: "none",
        userSelect: "none",
        verticalAlign: "middle",
        outline: isFocusVisible ? undefined : "0 none",
      }}
      {...buttonProps}
      {...focusProps}
      ref={ref}
    >
      <Icon size={50} color={isPressed ? "#29ABE2" : "#e6e6e6"} />
    </button>
    // </FocusRing>
  );
}
