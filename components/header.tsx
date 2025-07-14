"use client";

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Search, Home, Plus, Heart, MessageCircle, Compass } from 'lucide-react'
import { Button } from './ui/button'
import { Avatar } from './ui/avatar'
import { cn } from '@/lib/utils'

export function Header() {
  const [searchQuery, setSearchQuery] = useState('')
  const pathname = usePathname()

  const navItems = [
    { href: '/', icon: Home, label: 'Home' },
    { href: '/messages', icon: MessageCircle, label: 'Messages' },
    { href: '/create', icon: Plus, label: 'Create' },
    { href: '/explore', icon: Compass, label: 'Explore' },
    { href: '/notifications', icon: Heart, label: 'Notifications' },
  ]

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden sm:block glass border-b border-border w-full z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl font-bold gradient-text">InstaVibe</h1>
            </div>
            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-surface border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>
            {/* Navigation Icons */}
            <nav className="flex items-center space-x-4">
              {navItems.map(({ href, icon: Icon, label }) => (
                <Link key={href} href={href} aria-label={label} legacyBehavior>
                  <a>
                    <Button
                      variant="ghost"
                      size="sm"
                      className={cn(
                        'p-2',
                        pathname === href && 'bg-surface text-primary-400',
                        'transition-colors'
                      )}
                    >
                      <Icon className="w-5 h-5" />
                    </Button>
                  </a>
                </Link>
              ))}
              <Link href="/profile" aria-label="Profile" legacyBehavior>
                <a>
                  <Avatar src="/mypic.png" alt="User" size="sm" className={cn('ring-2 ring-transparent', pathname === '/profile' && 'ring-primary-400')} />
                </a>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      {/* Mobile Bottom Navbar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 sm:hidden glass border-t border-border bg-background/90">
        <div className="flex justify-around items-center h-16">
          {navItems.map(({ href, icon: Icon, label }) => (
            <Link key={href} href={href} aria-label={label} legacyBehavior>
              <a>
                <Button
                  variant="ghost"
                  size="sm"
                  className={cn(
                    'p-2',
                    pathname === href && 'bg-surface text-primary-400',
                    'transition-colors'
                  )}
                >
                  <Icon className="w-6 h-6" />
                </Button>
              </a>
            </Link>
          ))}
          <Link href="/profile" aria-label="Profile" legacyBehavior>
            <a>
              <Avatar src="/mypic.png" alt="User" size="sm" className={cn('ring-2 ring-transparent', pathname === '/profile' && 'ring-primary-400')} />
            </a>
          </Link>
        </div>
      </nav>
    </>
  )
} 