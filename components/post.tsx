'use client'

import { useState } from 'react'
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, Smile } from 'lucide-react'
import { Avatar } from './ui/avatar'
import { Button } from './ui/button'
import { formatNumber, formatTimeAgo } from '@/lib/utils'
import { cn } from '@/lib/utils'

interface PostProps {
  id: string
  user: {
    username: string
    avatar: string
    verified?: boolean
  }
  image: string
  caption: string
  likes: number
  comments: number
  timestamp: Date
  isLiked?: boolean
  isSaved?: boolean
}

export function Post({ user, image, caption, likes, comments, timestamp, isLiked = false, isSaved = false }: PostProps) {
  const [liked, setLiked] = useState(isLiked)
  const [saved, setSaved] = useState(isSaved)
  const [showAllCaption, setShowAllCaption] = useState(false)

  const toggleLike = () => setLiked(!liked)
  const toggleSave = () => setSaved(!saved)

  return (
    <article className="bg-card rounded-xl overflow-hidden mb-6 hover-lift">
      {/* Post Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-3">
          <Avatar src={user.avatar} alt={user.username} size="sm" />
          <div>
            <div className="flex items-center space-x-1">
              <span className="font-semibold text-sm">{user.username}</span>
              {user.verified && (
                <span className="text-primary-400 text-xs">✓</span>
              )}
            </div>
            <span className="text-xs text-gray-400">Public</span>
          </div>
        </div>
        <Button variant="ghost" size="sm" className="p-1">
          <MoreHorizontal className="w-4 h-4" />
        </Button>
      </div>

      {/* Post Image */}
      <div className="relative aspect-square bg-surface">
        <img
          src={image}
          alt={caption}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Post Actions */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className={cn("p-1 transition-colors", {
                "text-red-500": liked
              })}
              onClick={toggleLike}
            >
              <Heart className={cn("w-6 h-6", {
                "fill-current": liked
              })} />
            </Button>
            <Button variant="ghost" size="sm" className="p-1">
              <MessageCircle className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="sm" className="p-1">
              <Send className="w-6 h-6" />
            </Button>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className={cn("p-1 transition-colors", {
              "text-yellow-400": saved
            })}
            onClick={toggleSave}
          >
            <Bookmark className={cn("w-6 h-6", {
              "fill-current": saved
            })} />
          </Button>
        </div>

        {/* Likes Count */}
        <div className="mb-2">
          <span className="font-semibold text-sm">{formatNumber(likes)} likes</span>
        </div>

        {/* Caption */}
        <div className="mb-2">
          <span className="font-semibold text-sm mr-2">{user.username}</span>
          <span className="text-sm">
            {showAllCaption ? caption : caption.slice(0, 100)}
            {caption.length > 100 && !showAllCaption && (
              <>
                ...{' '}
                <button
                  onClick={() => setShowAllCaption(true)}
                  className="text-gray-400 hover:text-white"
                >
                  more
                </button>
              </>
            )}
          </span>
        </div>

        {/* Comments */}
        <div className="mb-2">
          <button className="text-gray-400 text-sm hover:text-white">
            View all {formatNumber(comments)} comments
          </button>
        </div>

        {/* Timestamp */}
        <div className="text-gray-400 text-xs">
          {formatTimeAgo(timestamp)}
        </div>

        {/* Add Comment */}
        <div className="flex items-center space-x-2 mt-3 pt-3 border-t border-border">
          <Button variant="ghost" size="sm" className="p-1">
            <Smile className="w-5 h-5" />
          </Button>
          <input
            type="text"
            placeholder="Add a comment..."
            className="flex-1 bg-transparent border-none outline-none text-sm placeholder-gray-400"
          />
          <Button variant="ghost" size="sm" className="text-primary-400 font-semibold">
            Post
          </Button>
        </div>
      </div>
    </article>
  )
}

export function PostsContainer() {
  const posts = [
    {
      id: '1',
      user: {
        username: 'alex_parker',
        avatar: '/mypic.png',
        verified: true
      },
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop',
      caption: 'Just finished an amazing hike! The views were absolutely breathtaking. Nature has a way of making everything feel so peaceful and connected. 🌲🏔️ #hiking #nature #adventure #peaceful #mountains #outdoors #explore #wanderlust',
      likes: 1247,
      comments: 89,
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
      isLiked: false,
      isSaved: false
    },
    {
      id: '2',
      user: {
        username: 'sarah_lee',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
      },
      image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=600&h=600&fit=crop',
      caption: 'Coffee and creativity ☕️✨ Working on some new designs today. Sometimes the best ideas come when you least expect them!',
      likes: 892,
      comments: 45,
      timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5 hours ago
      isLiked: true,
      isSaved: true
    },
    {
      id: '3',
      user: {
        username: 'mike_wilson',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        verified: true
      },
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=600&fit=crop',
      caption: 'Sunset vibes 🌅 There\'s something magical about golden hour that makes everything look perfect.',
      likes: 2156,
      comments: 156,
      timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000), // 8 hours ago
      isLiked: false,
      isSaved: false
    }
  ]

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  )
} 