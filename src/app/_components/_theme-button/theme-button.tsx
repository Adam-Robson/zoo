'use client';

import { useThemeContext } from '@/_contexts/theme-provider';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function ThemeButton() {
  const { theme, toggleTheme } = useThemeContext();
  const [showTooltip, setShowTooltip] = useState(false);
  const isDark = theme === 'dark';

  return (
    <div
      className="relative group"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onTouchStart={() => setShowTooltip(!showTooltip)}
    >
      {/* Toggle Switch */}
      <button
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className="w-14 h-8 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center p-1 transition-colors focus:outline-none"
      >
        {/* Sliding Thumb with Icon */}
        <motion.div
          layout
          className="w-6 h-6 rounded-full bg-white shadow flex items-center justify-center"
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          animate={{ x: isDark ? 24 : 0 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {isDark ? (
              <motion.span
                key="sun"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <Sun className="w-4 h-4 text-yellow-500" />
              </motion.span>
            ) : (
              <motion.span
                key="moon"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.2 }}
              >
                <Moon className="w-4 h-4 text-gray-700" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      </button>

      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            key="tooltip"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.2 }}
            className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-3 py-1 rounded bg-black text-white text-xs whitespace-nowrap z-50"
          >
            {isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
