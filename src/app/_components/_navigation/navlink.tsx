'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Disc, Sparkles } from 'lucide-react';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import type { NavlinkType } from '@/_types/navigation';

export default function Navlink({ href, children }: NavlinkType) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const [hovered, setHovered] = useState(false);

  const getIcon = () => {
    if (href === '/collections') return <Disc size={18} />;
    if (href === '/about') return <Sparkles size={18} />;
    return null;
  };

  const icon = getIcon();

  return (
    <div className="w-full">
      <Link
        href={href}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={clsx(
          'relative flex items-center justify-between px-4 py-2 w-full transition-colors duration-300',
          'text-neutral-600 hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-neutral-100'
        )}
        aria-current={isActive ? 'page' : undefined}
      >
        {/* Left-aligned link text */}
        <span className="navlink font-medium text-base">{children}</span>

        {/* Right-aligned hover icon */}
        <AnimatePresence>
          {icon && hovered && (
            <motion.span
              key="icon"
              initial={{ opacity: 0, x: 4 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 4 }}
              transition={{ duration: 0.3 }}
              className="absolute right-4 text-pink-400 dark:text-pink-300"
            >
              {icon}
            </motion.span>
          )}
        </AnimatePresence>
      </Link>
    </div>
  );
}
