import React, { useRef, useCallback } from "react";
import { useButton } from "@react-aria/button";
import { AriaButtonProps } from "@react-types/button";
import { FocusScope, useFocusManager } from "@react-aria/focus";
import { IoIosSpeedometer } from "react-icons/io";

function RateButton(props) {
  const ref = useRef();
  const { buttonProps } = useButton(props, ref);
  return (
    <button
      style={{ appearance: "none", border: "0 none", background: "none" }}
      {...buttonProps}
      ref={ref}
    >
      {props.children}
    </button>
  );
}

export default function Rate(props: {
  rate: number;
  handleSetRate: (rate: number) => void;
}) {
  const [isOpen, setOpen] = React.useState(false);
  const openRateSelection = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  const setSlow = useCallback(() => {
    setOpen(false);
    props.handleSetRate(0.75);
  }, [setOpen, props.handleSetRate]);

  const setNormal = useCallback(() => {
    setOpen(false);
    props.handleSetRate(1);
  }, [setOpen, props.handleSetRate]);

  const setFast = useCallback(() => {
    setOpen(false);
    props.handleSetRate(1.25);
  }, [setOpen, props.handleSetRate]);

  return (
    <>
      <RateButton onPress={openRateSelection} aria-label="Set playback rate">
        <IoIosSpeedometer size={20} /> {!isOpen && `${props.rate}x`}
      </RateButton>
      {isOpen && (
        <FocusScope contain restoreFocus autoFocus>
          <RateButton onPress={setSlow} aria-label="slow">
            0.75x
          </RateButton>

          <RateButton onPress={setNormal} aria-label="normal">
            1x
          </RateButton>

          <RateButton onPress={setFast} aria-label="fast">
            1.25x
          </RateButton>
        </FocusScope>
      )}
    </>
  );
}
