import React, { useRef } from "react";
import { useButton } from "@react-aria/button";
import { AriaButtonProps } from "@react-types/button";
import { MdReplay10, MdForward10 } from "react-icons/md";
import { useFocusRing } from "@react-aria/focus";

// import { RichText } from "prismic-reactjs";

export default function JumpButton({
  direction = "forwards",
  ...props
}: { direction: "forwards" | "backwards" } & AriaButtonProps) {
  const ref = useRef();
  const { buttonProps, isPressed } = useButton(
    {
      "aria-label":
        direction === "forwards" ? "10 seconds forwards" : "10 seconds back",
      ...props,
    },
    ref
  );
  const Icon = direction === "forwards" ? MdForward10 : MdReplay10;
  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <button
      style={{
        appearance: "none",
        background: "transparent",
        border: "0 none",
        cursor: "pointer",
        padding: "0.5em 0 0",
        margin: 0,
        verticalAlign: "middle",
        outline: isFocusVisible ? undefined : "0 none",
      }}
      {...buttonProps}
      {...focusProps}
      ref={ref}
    >
      <Icon size={40} color={isPressed ? "#29ABE2" : "#bbbbbb"} />
    </button>
  );
}
