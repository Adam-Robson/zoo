'use client';

import { motion } from 'framer-motion';
import Navlink from '@/_components/_navigation/navlink';
import { usePathname } from 'next/navigation';

export default function Navlinks() {
  const pathname = usePathname();

  const links = [
    { id: 0, name: 'home', href: '/' },
    { id: 1, name: 'about', href: '/about' },
    { id: 2, name: 'collections', href: '/collections' },
  ];

  const visibleLinks =
    pathname === '/' ? links.filter(link => link.href !== '/') : links;

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
        ease: 'easeOut',
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -8 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.ul
      className="navlinks flex flex-col items-start space-y-2 w-48"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {visibleLinks.map((link) => (
        <motion.li
          key={link.id}
          variants={itemVariants}
          className="w-full"
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          <Navlink href={link.href}>{link.name}</Navlink>
        </motion.li>
      ))}
    </motion.ul>
  );
}
