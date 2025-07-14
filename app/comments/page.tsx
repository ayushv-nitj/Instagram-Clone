import { Header } from '@/components/header'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

const post = {
  user: {
    username: 'alex_parker',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
  },
  image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop',
  caption: 'Just finished an amazing hike! The views were absolutely breathtaking. 🌲🏔️',
}

const initialComments = [
  {
    id: 1,
    user: {
      username: 'sarah_lee',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    },
    text: 'Wow, looks amazing!'
  },
  {
    id: 2,
    user: {
      username: 'mike_wilson',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    },
    text: 'Great shot!'
  },
]

export default function CommentsPage() {
  const [comments, setComments] = useState(initialComments)
  const [newComment, setNewComment] = useState('')

  function handleAddComment(e: React.FormEvent) {
    e.preventDefault()
    if (!newComment.trim()) return
    setComments([
      ...comments,
      {
        id: comments.length + 1,
        user: {
          username: 'you',
          avatar: '/mypic.png',
        },
        text: newComment,
      },
    ])
    setNewComment('')
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-xl mx-auto px-4 py-10">
        <div className="bg-card rounded-xl shadow-lg overflow-hidden">
          <img src={post.image} alt="Post" className="w-full h-64 object-cover" />
          <div className="p-4">
            <div className="flex items-center gap-3 mb-2">
              <Avatar src={post.user.avatar} alt={post.user.username} size="sm" />
              <span className="font-semibold text-sm">{post.user.username}</span>
            </div>
            <div className="mb-4 text-gray-200">{post.caption}</div>
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Comments</h3>
              <div className="space-y-3 max-h-40 overflow-y-auto">
                {comments.map(comment => (
                  <div key={comment.id} className="flex items-center gap-3">
                    <Avatar src={comment.user.avatar} alt={comment.user.username} size="sm" />
                    <span className="font-semibold text-sm">{comment.user.username}</span>
                    <span className="text-gray-300 text-sm">{comment.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <form onSubmit={handleAddComment} className="flex items-center gap-2 pt-2 border-t border-border">
              <Avatar src="/mypic.png" alt="You" size="sm" />
              <input
                type="text"
                className="flex-1 bg-surface rounded-lg p-2 text-white border border-border focus:ring-2 focus:ring-primary-400"
                placeholder="Add a comment..."
                value={newComment}
                onChange={e => setNewComment(e.target.value)}
              />
              <Button type="submit" variant="gradient" size="sm">Post</Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
} 