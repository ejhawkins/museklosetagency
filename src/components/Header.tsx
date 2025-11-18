import React, { useEffect, useState } from "react";
import logo from "../logo.png";
import symbolLogo from "../symbol-logo.png";

export function Header() {
  const [videoEnabled, setVideoEnabled] = useState<boolean>(true);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("bgVideoEnabled");
      if (raw !== null) setVideoEnabled(raw === "true");
    } catch (e) {
      // ignore localStorage errors
    }
  }, []);

  function toggleVideo() {
    const next = !videoEnabled;
    setVideoEnabled(next);
    try {
      localStorage.setItem("bgVideoEnabled", String(next));
    } catch (e) {
      // ignore
    }
    // Notify any listeners (e.g., BackgroundVideo) about the change
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("bgVideoToggle", { detail: { enabled: next } })
      );
    }
  }

  return (
    <header className="px-6 py-8">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <div className="border-2 border-white rounded-full px-4 py-2">
            <span
              className="text-white border border-white px-2 py-1 rounded"
              style={{ fontFamily: '"Saira Condensed", sans-serif' }}
            >
              MusesKlosetAgency
            </span>
          </div>
        </div>

        <div>
          <button
            type="button"
            onClick={toggleVideo}
            aria-pressed={!videoEnabled}
            aria-label={
              videoEnabled ? "Disable background video" : "Enable background video"
            }
            className="px-4 py-2 border-2 border-white rounded-full bg-transparent text-white"
            style={{ fontFamily: '"Saira Condensed", sans-serif' }}
          >
            {videoEnabled ? "Background Video: On" : "Background Video: Off"}
          </button>
        </div>
      </div>

      <div className="flex justify-center mb-8">
        <div className="w-24 h-24">
          <img
            src={symbolLogo}
            alt="Symbol Logo"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="text-center">
        <div className="mb-4">
          <img
            src={logo}
            alt="MusesKlosetAgency"
            className="mb-2 w-48 max-w-full h-auto"
          />
        </div>
      </div>
    </header>
  );
}
