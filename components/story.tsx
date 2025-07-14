'use client'

import { useState } from 'react'
import { Avatar } from './ui/avatar'
import { cn } from '@/lib/utils'

interface StoryProps {
  id: string
  username: string
  avatar: string
  hasStory: boolean
  isViewed: boolean
}

export function Story({ username, avatar, hasStory, isViewed }: StoryProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="flex flex-col items-center space-y-2 cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={cn(
        "relative p-0.5 rounded-full transition-all duration-200",
        {
          "bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500": hasStory && !isViewed,
          "bg-gradient-to-r from-gray-400 to-gray-600": hasStory && isViewed,
          "bg-transparent": !hasStory
        }
      )}>
        <div className="bg-background rounded-full p-0.5">
          <Avatar
            src={avatar}
            alt={username}
            size="lg"
            className={cn(
              "transition-transform duration-200",
              {
                "scale-110": isHovered,
                "opacity-60": isViewed
              }
            )}
          />
        </div>
      </div>
      <span className={cn(
        "text-xs text-center max-w-[60px] truncate transition-colors duration-200",
        {
          "text-gray-400": isViewed,
          "text-white": !isViewed
        }
      )}>
        {username}
      </span>
    </div>
  )
}

export function StoriesContainer() {
  const stories = [
    { id: '2', username: 'sarah_lee', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face', hasStory: true, isViewed: false },
    { id: '3', username: 'mike_wilson', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face', hasStory: true, isViewed: false },
    { id: '4', username: 'emma_davis', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face', hasStory: true, isViewed: false },
    { id: '5', username: 'james_brown', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face', hasStory: true, isViewed: false },
    { id: '6', username: 'lisa_garcia', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face', hasStory: true, isViewed: true },
    { id: '7', username: 'david_clark', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face', hasStory: false, isViewed: true },
  ]

  return (
    <div className="bg-card rounded-xl p-4 mb-6">
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
        {stories.map((story) => (
          <Story key={story.id} {...story} />
        ))}
      </div>
    </div>
  )
} 