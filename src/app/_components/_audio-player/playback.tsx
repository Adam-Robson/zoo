'use client';

import { useAudioContext } from "@/_contexts/audio-provider";
import { ArrowLeft, ArrowRight, Play, Pause } from "lucide-react";

export default function VolumeDial() {
    const {
        playback,
        handlePlayback,
        handleNextSong,
        handlePreviousSong,
      } = useAudioContext();

    return (
        <div className="playback">
            <section className="playback-controls">
                <button onClick={handlePreviousSong} className="control-button">
                <ArrowLeft size={32} />
                <label className="control-label">Previous</label>
                </button>

                <button onClick={handlePlayback} className="control-button">
                {playback ? <Pause size={36} /> : <Play size={36} />}
                <label className="control-label">{playback ? "Pause" : "Play"}</label>
                </button>

                <button onClick={handleNextSong} className="control-button">
                <ArrowRight size={32} />
                <label className="control-label">Next</label>
                </button>
            </section>
        </div>
    );
}
