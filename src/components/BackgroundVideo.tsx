import React, { useEffect, useState } from "react";
import "./BackgroundVideo.css";

// Use runtime URL to reference the local video file (handles spaces/special chars)
const videoSrc = new URL(
  "../Firefly Studio lights photoshoot black and white without a model 577781.mp4",
  import.meta.url
).href;

export function BackgroundVideo({ children }: { children?: React.ReactNode }) {
  const [enabled, setEnabled] = useState<boolean>(true);

  useEffect(() => {
    // init from localStorage if available
    try {
      const raw = localStorage.getItem("bgVideoEnabled");
      if (raw !== null) setEnabled(raw === "true");
    } catch (e) {
      // ignore
    }

    function onToggle(e: Event) {
      const detail = (e as CustomEvent)?.detail;
      if (detail && typeof detail.enabled === "boolean") {
        setEnabled(detail.enabled);
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("bgVideoToggle", onToggle);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("bgVideoToggle", onToggle);
      }
    };
  }, []);

  return (
    <div className="bg-video-root" aria-hidden={true}>
      {enabled ? (
        <video
          className="bg-video"
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      ) : null}

      <div className="bg-video-overlay" />
      {children ? <div className="bg-video-content">{children}</div> : null}
    </div>
  );
}
