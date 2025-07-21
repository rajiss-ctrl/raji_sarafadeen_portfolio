'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

interface NavLinkProps {
  href: string
  children: ReactNode
}

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname()

  const normalize = (path: string) => {
    if (!path) return '/'
    const newPath = path.startsWith('/') ? path : '/' + path
    return newPath.length > 1 ? newPath.replace(/\/+$/, '') : newPath
  }

  const isActive = normalize(pathname) === normalize(href)

  return (
    <motion.div
      className="relative overflow-hidden w-full group"
      whileHover="hover"
    >
      {/* Active static background */}
      {isActive && (
        <span className="absolute top-0 left-0 h-full w-full bg-[#037fff] z-0 transition-colors duration-300" />
      )}

      {/* Inactive hover background */}
      {!isActive && (
        <motion.span
          className="absolute top-0 left-0 h-full w-full bg-[#153055] origin-left z-0"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 0 }}
          variants={{
            hover: {
              scaleX: 1,
              transition: { duration: 0.4, ease: 'easeInOut' },
            },
          }}
          style={{ transformOrigin: 'left' }}
        />
      )}

      <Link
        href={href}
        className={`relative block px-4 py-2 z-10 transition-colors duration-300 ${
          isActive ? 'text-white' : 'group-hover:text-[#037fff]'
        }`}
      >
        {children}
      </Link>
    </motion.div>
  )
}
