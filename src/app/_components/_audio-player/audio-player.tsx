'use client';

import { useAudioContext } from "@/_contexts/audio-provider";
import VolumeDial from "@/_components/_audio-player/volume-dial";
import Playlist from "@/_components/_audio-player/playlist";
import Playback from "@/_components/_audio-player/playback";

import "./audio-player.css";


export default function AudioPlayer() {
  const { song, playback, elapsed, duration } = useAudioContext() ?? {};

  return (
    <div className="audio-player">
      <Playlist />
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
      <Playback />
      <VolumeDial />
    </div>
  );
}
