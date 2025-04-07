'use client';

import ThemeButton from '@/_components/_theme-button/theme-button';
import AudioPlayer from '@/_components/_audio-player/audio-player';
import Navigation from '@/_components/_navigation/navigation';

export default function SharedLayout() {
  return (
    <div className='shared-layout'>
      <div className="absolute top-4 right-4 sm:bottom-4 sm:left-4 sm:top-auto sm:right-auto z-50">
        <ThemeButton />
      </div>

      <div className="absolute bottom-4 left-4 sm:left-1/2 sm:transform sm:-translate-x-1/2 z-50">
        <AudioPlayer />
      </div>

      <div className="absolute bottom-4 right-4 sm:top-4 sm:left-4 sm:bottom-auto sm:right-auto z-50">
        <Navigation />
      </div>
    </div>
  );
}
