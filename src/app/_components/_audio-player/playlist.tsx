'use client';

import { useAudioContext } from '@/_contexts/audio-provider';
import { SongType } from '@/_types/audio-provider';


export default function Playlist() {
    const { playlist, currentIndex, handleSongChange } = useAudioContext();
    return(
        <div>
          <div className="playlist">
            <ul className="playlist-list">
              {playlist.map((track: SongType, index: number) => (
              <li
                key={track.id}
                className={`playlist-list-item ${currentIndex === index ? "active" : ""
              }`}
          >
            <button
              className="playlist-item"
              onClick={() => handleSongChange && handleSongChange(index)}
            >
              {track.title} ({track.album})
            </button>
          </li>
        ))}
      </ul>
    </div>
        </div>
    );
}
