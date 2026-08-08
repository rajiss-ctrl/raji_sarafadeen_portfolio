'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { ReactNode, MouseEventHandler } from 'react'

interface NavLinkProps {
  href: string
  children: ReactNode
  icon?: ReactNode
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

export default function NavLink({ href, children, icon, onClick }: NavLinkProps) {
  const pathname = usePathname()

  const normalize = (path: string) => {
    if (!path) return '/'
    const p = path.startsWith('/') ? path : '/' + path
    return p.length > 1 ? p.replace(/\/+$/, '') : p
  }

  const isActive = normalize(pathname) === normalize(href)

  return (
    <motion.div
      className="relative w-full rounded-lg overflow-hidden group"
      whileHover="hover"
    >
      {/* Active solid background - Purple */}
      {isActive && (
        <span className="absolute inset-0 bg-[#7C3AED] rounded-lg z-0" />
      )}

      {/* Hover background for inactive - Purple */}
      {!isActive && (
        <motion.span
          className="absolute inset-0 bg-[#2d2d44] rounded-lg z-0 origin-left"
          initial={{ scaleX: 0 }}
          variants={{
            hover: { scaleX: 1, transition: { duration: 0.25, ease: 'easeOut' } },
          }}
        />
      )}

      <Link
        href={href}
        onClick={onClick}
        className={`
          relative z-10
          flex items-center gap-3
          px-4 py-[9px]
          text-[13.5px] font-medium
          transition-colors duration-150
          ${isActive ? 'text-white' : 'text-[#94A3B8] group-hover:text-white'}
        `}
      >
        {icon && (
          <span className={`flex-shrink-0 ${isActive ? 'text-white' : 'text-[#94A3B8] group-hover:text-white'}`}>
            {icon}
          </span>
        )}
        {children}
      </Link>
    </motion.div>
  )
}