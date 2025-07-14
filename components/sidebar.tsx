'use client'

import { useState } from 'react'
import { Avatar } from './ui/avatar'
import { Button } from './ui/button'
import { formatNumber } from '@/lib/utils'
import { cn } from '@/lib/utils'

interface SuggestionProps {
  id: string
  username: string
  avatar: string
  followers: number
  isFollowing?: boolean
  verified?: boolean
}

function Suggestion({ username, avatar, followers, isFollowing = false, verified = false }: SuggestionProps) {
  const [following, setFollowing] = useState(isFollowing)

  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center space-x-3">
        <Avatar src={avatar} alt={username} size="sm" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-1">
            <span className="font-semibold text-sm truncate">{username}</span>
            {verified && (
              <span className="text-primary-400 text-xs">✓</span>
            )}
          </div>
          <span className="text-xs text-gray-400">{formatNumber(followers)} followers</span>
        </div>
      </div>
      <Button
        variant={following ? "outline" : "default"}
        size="sm"
        className={cn("text-xs", {
          "bg-transparent": following
        })}
        onClick={() => setFollowing(!following)}
      >
        {following ? 'Following' : 'Follow'}
      </Button>
    </div>
  )
}

export function Sidebar() {
  const currentUser = {
    username: 'av_alanche._',
    avatar: '/mypic.png',

    fullName: 'Ayush Verma',
    followers: 1234,
    following: 567
  }

  const suggestions = [
    {
      id: '1',
      username: 'emma_davis',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
      followers: 8920,
      verified: true
    },
    {
      id: '2',
      username: 'james_brown',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      followers: 3456
    },
    {
      id: '3',
      username: 'lisa_garcia',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
      followers: 12340,
      verified: true
    },
    {
      id: '4',
      username: 'david_clark',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      followers: 5678
    },
    {
      id: '5',
      username: 'anna_wilson',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      followers: 2345
    }
  ]

  return (
    <div className="hidden lg:block w-80 space-y-6">
      {/* Current User */}
      <div className="bg-card rounded-xl p-4">
        <div className="flex items-center space-x-3 mb-4">
          <Avatar src={currentUser.avatar} alt={currentUser.username} size="lg" />
          <div className="flex-1">
            <h3 className="font-semibold">{currentUser.username}</h3>
            <p className="text-sm text-gray-400">{currentUser.fullName}</p>
          </div>
          <Button variant="ghost" size="sm" className="text-primary-400">
            Switch
          </Button>
        </div>
        
        <div className="flex justify-between text-sm">
          <div className="text-center">
            <div className="font-semibold">{formatNumber(currentUser.followers)}</div>
            <div className="text-gray-400">followers</div>
          </div>
          <div className="text-center">
            <div className="font-semibold">{formatNumber(currentUser.following)}</div>
            <div className="text-gray-400">following</div>
          </div>
        </div>
      </div>

      {/* Suggestions */}
      <div className="bg-card rounded-xl p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-300">Suggestions for you</h3>
          <Button variant="ghost" size="sm" className="text-xs text-primary-400">
            See All
          </Button>
        </div>
        
        <div className="space-y-3">
          {suggestions.map((suggestion) => (
            <Suggestion key={suggestion.id} {...suggestion} />
          ))}
        </div>
      </div>

      {/* Footer Links */}
      <div className="text-xs text-gray-400 space-y-2">
        <div className="flex flex-wrap gap-2">
          <a href="#" className="hover:text-white transition-colors">About</a>
          <a href="#" className="hover:text-white transition-colors">Help</a>
          <a href="#" className="hover:text-white transition-colors">Press</a>
          <a href="#" className="hover:text-white transition-colors">API</a>
          <a href="#" className="hover:text-white transition-colors">Jobs</a>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Top Accounts</a>
          <a href="#" className="hover:text-white transition-colors">Hashtags</a>
          <a href="#" className="hover:text-white transition-colors">Locations</a>
        </div>
        <div className="pt-4">
          © 2024 InstaVibe
        </div>
      </div>
    </div>
  )
} 