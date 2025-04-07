'use client';

import { useAudioContext } from "@/_contexts/audio-provider";

export default function NowPlaying() {
    
    const {
        playback,
        elapsed,
        duration,
        song,
      } = useAudioContext();

    return (
        <div className="now-playing">
        {playback && (
          <>
            <div className="song-title">{song.title}</div>
            <div className="song-timing">
              {elapsed} / {duration}
            </div>
          </>
        )
        }
      </div>
    )
}
