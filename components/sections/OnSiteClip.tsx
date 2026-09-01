"use client";

import { useRef, useState } from "react";

interface Props {
  src: string;
  poster: string;
  label: string;
  className?: string;
}

export function OnSiteClip({ src, poster, label, className = "" }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);

  function handlePlay() {
    const el = videoRef.current;
    if (!el) return;
    if (!playing) {
      el.play();
      setPlaying(true);
    } else if (el.paused) {
      el.play();
    } else {
      el.pause();
    }
  }

  return (
    <div
      className={`relative aspect-[9/16] w-[220px] md:w-[260px] shrink-0 overflow-hidden bg-charcoal-2 ${className}`}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="none"
        controls={playing}
        className="absolute inset-0 h-full w-full object-cover"
        onPause={() => setPlaying(false)}
        onPlay={() => setPlaying(true)}
      />
      {!playing && (
        <button
          type="button"
          onClick={handlePlay}
          className="absolute inset-0 flex items-center justify-center bg-charcoal/20 hover:bg-charcoal/35 transition-colors duration-base"
          aria-label={`Play clip: ${label}`}
        >
          <span className="flex items-center justify-center w-14 h-14 rounded-full bg-offwhite/90 text-charcoal">
            <svg width="16" height="18" viewBox="0 0 16 18" fill="currentColor" aria-hidden="true">
              <path d="M0 0L16 9L0 18V0Z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
