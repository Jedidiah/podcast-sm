import React, { useEffect, useCallback, useState } from "react";

import { Howl, Howler } from "howler";
import ProgressBar from "./components/ProgressBar";
import PlayPauseButton from "./components/PlayPauseButton";
import JumpButton from "./components/JumpButton";
import Rate from "./components/Rate";
import TimeRemaining from "./components/TimeRemaining";
import Artwork from "../PodcastEpisodes/components/Artwork";

// import { RichText } from "prismic-reactjs";

type TPlayStates = "playing" | "paused" | "loading" | "unloaded";

export function UnwrappedNowPlaying(props: {
  showSkipBack?: boolean;
  showSkipForward?: boolean;
  showArtwork?: boolean;
  showProgressBar?: boolean;
  showTitle?: boolean;
  hideWhenInactive?: boolean;
  position?: "static" | "sticky";
}) {
  const [audio, setAudio] = useState<Howl>(null);

  const [playState, setPlayState] = useState<TPlayStates>("paused");
  const [progress, setProgress] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [artwork, setArtwork] = useState<string>("");
  const [volume, setVolume] = useState<number>(1);
  const [rate, setRate] = useState<number>(1);

  const {
    showSkipBack = true,
    showSkipForward = true,
    showArtwork = true,
    showProgressBar = true,
    showTitle = true,
    hideWhenInactive = true,
    position = "sticky",
  } = props;

  useEffect(() => {
    let howl: Howl;
    let progressInterval: number;

    const cleanUp = () => {
      if (howl !== undefined) {
        howl.unload();
      }
      window.cancelAnimationFrame(progressInterval);
      setAudio(null);
    };

    // const event = new Event('loadPodcastEpisode');
    const loadEpisode = (event: CustomEvent) => {
      cleanUp();

      const {
        audioFile: { url },
        artwork,
        title,
      } = event.detail;

      setTitle(title);
      setArtwork(artwork);

      howl = new Howl({ src: url, html5: true });

      const tick = () => {
        setProgress(Math.floor(Number(howl.seek())));
        progressInterval = window.requestAnimationFrame(tick);
      };
      howl.on("play", () => {
        setPlayState("playing");
        progressInterval = window.requestAnimationFrame(tick);
      });
      howl.on("pause", () => {
        setPlayState("paused");
        window.cancelAnimationFrame(progressInterval);
      });
      howl.on("rate", () => {
        setRate(howl.rate());
      });
      howl.play();
      setAudio(howl);
    };

    document.addEventListener("loadPodcastEpisode", loadEpisode);
    document.addEventListener("clearPodcastEpisode", cleanUp);

    return () => {
      // Clean-up
      cleanUp();
      document.removeEventListener("loadPodcastEpisode", loadEpisode);
      document.removeEventListener("clearPodcastEpisode", cleanUp);
    };
  }, []);

  const isPlaying = Boolean(playState === "playing");

  const handlePlay = useCallback(() => {
    if (audio) {
      audio.load();
      playState === "playing" ? audio.pause() : audio.play();
    }
  }, [audio, playState]);

  const handleSetRate = useCallback(
    (rate: number) => {
      if (audio) {
        audio.rate(rate);
      }
    },
    [audio, playState]
  );

  const handleSeek = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (audio) {
        setProgress(Number(event.target.value));
        audio.seek(Number(event.target.value));
      }
    },
    [audio]
  );

  const handleSkipBack = useCallback(() => {
    const jumpTo = Math.max(0, progress - 10);
    setProgress(Number(jumpTo));
    audio.seek(Number(jumpTo));
  }, [audio, progress]);

  const handleSkipForward = useCallback(() => {
    const jumpTo = Math.min(audio.duration(), progress + 10);
    setProgress(Number(jumpTo));
    audio.seek(Number(jumpTo));
  }, [audio, progress]);

  const durationSeconds = Math.ceil(audio?.duration() || 0);

  const hidePlayer = Boolean(!audio && hideWhenInactive);

  return (
    <section
      className={
        hidePlayer ? "now-playing now-playing--inactive" : "now-playing"
      }
      style={{ position: position === "sticky" ? "fixed" : "static" }}
    >
      <div className="now-playing__controls">
        {Boolean(showSkipBack) && (
          <JumpButton onPress={handleSkipBack} direction="backwards" />
        )}
        <PlayPauseButton isPlaying={isPlaying} onPress={handlePlay} />
        {Boolean(showSkipForward) && (
          <JumpButton onPress={handleSkipForward} direction="forwards" />
        )}

        {/* <Rate rate={rate} handleSetRate={handleSetRate} /> */}
      </div>
      {Boolean(showTitle || showProgressBar) && (
        <div className="now-playing__meta">
          {Boolean(showTitle) && (
            <div className="now-playing__track-info">
              <h1 className="now-playing__track-title">{title}</h1>
              <TimeRemaining seconds={durationSeconds - progress} />
            </div>
          )}
          {Boolean(showProgressBar) && (
            <ProgressBar
              value={progress}
              minValue={0}
              maxValue={audio?.duration()}
              handleSeek={handleSeek}
            />
          )}
        </div>
      )}
      {Boolean(showArtwork && artwork) && (
        <Artwork size="100px" image={artwork} />
      )}
    </section>
  );
}

function unwrapSlice(Component: typeof UnwrappedNowPlaying) {
  return ({ slice }) => <Component {...slice.primary} items={slice.items} />;
}

export default unwrapSlice(UnwrappedNowPlaying);
