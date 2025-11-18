import React, { useEffect, useState } from "react";

// Use a runtime URL for the logo to avoid TS module import issues
const logoUrl = new URL("../logo.png", import.meta.url).href;

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
        <div className="w-16 h-16 rounded-full border-2 border-white bg-white flex items-center justify-center">
          <span className="text-2xl text-black">K</span>
        </div>
      </div>

      <div className="text-center">
        <div className="flex flex-col items-center">
          <img
            src={logoUrl}
            alt="MusesKlosetAgency"
            className="mb-2 w-48 max-w-full h-auto"
          />
          <p className="tracking-[0.3em] text-sm">BRANDING AGENCY</p>
        </div>
      </div>
    </header>
  );
}
