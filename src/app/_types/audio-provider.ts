
export type SongType = {
  id: number;
  title: string;
  album: string;
  artist: string;
  url: string;
  duration: string;
}

export type AudioContextType = {
  playlist: SongType[];
  song: SongType;
  currentIndex: number;
  playback: boolean;
  handleVolumeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleMuteChange: () => void;
  handlePlayback: () => void;
  handleSongChange: (newIndex: number) => void;
  handlePreviousSong: () => void;
  handleNextSong: () => void;
  volumeChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  elapsed: string;
  duration: string;
  volume: number;
  setVolume: React.Dispatch<React.SetStateAction<number>>;
  mute: boolean;
  setMute: React.Dispatch<React.SetStateAction<boolean>>;
  volumeSliderRef: React.RefObject<HTMLInputElement | null>;
}

export type AudioProviderType = {
  children: React.ReactNode;
  initialVolume?: number;
  initialIndex?: number;
}

export type AudioPlayerToggleType = {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
