'use client';

import { useAudioContext } from "@/_contexts/audio-provider";
import { Volume, VolumeX, Volume1, Volume2 } from "lucide-react";

export default function VolumeDial() {
    const {
        mute,
        volume,
        volumeSliderRef,
        volumeChangeHandler,
        handleMuteChange,
    } = useAudioContext();
    return (
        <section className="volume-controls">
        <button
          id="mute"
          type="button"
          aria-label="Mute"
          onClick={handleMuteChange}
          className="control-button"
        >
          {mute ? (
            <VolumeX size={32} />
          ) : volume <= 0.2 ? (
            <Volume size={32} />
          ) : volume <= 0.65 ? (
            <Volume1 size={32} />
          ) : (
            <Volume2 size={32} />
          )}
          <label className="control-label">{mute ? "Unmute" : "Mute"}</label>
        </button>

        
        <div className="volume-slider">
          <input
            id="volume"
            ref={volumeSliderRef}
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={volumeChangeHandler}
          />
          <label htmlFor="volume" className="control-label"></label>
        </div>
      </section>
    );
}
