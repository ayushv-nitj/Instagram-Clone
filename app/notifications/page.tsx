import { Header } from '@/components/header'
import { Avatar } from '@/components/ui/avatar'
import { cn, formatTimeAgo } from '@/lib/utils'
import { Heart, MessageCircle, UserPlus } from 'lucide-react'

const notifications = [
  {
    id: '1',
    type: 'like',
    user: {
      username: 'alex_parker',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    },
    time: new Date(Date.now() - 60 * 60 * 1000),
    postImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=200&fit=crop',
  },
  {
    id: '2',
    type: 'comment',
    user: {
      username: 'sarah_lee',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    },
    time: new Date(Date.now() - 2 * 60 * 60 * 1000),
    comment: 'Love this! 😍',
    postImage: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=200&h=200&fit=crop',
  },
  {
    id: '3',
    type: 'follow',
    user: {
      username: 'emma_davis',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    },
    time: new Date(Date.now() - 4 * 60 * 60 * 1000),
  },
]

function NotificationItem({ notification }: { notification: typeof notifications[0] }) {
  return (
    <div className="flex items-center gap-4 py-4 border-b border-border last:border-b-0">
      <Avatar src={notification.user.avatar} alt={notification.user.username} size="md" />
      <div className="flex-1 min-w-0">
        <div className="text-sm">
          <span className="font-semibold">{notification.user.username}</span>
          {notification.type === 'like' && (
            <span> liked your post.</span>
          )}
          {notification.type === 'comment' && (
            <span> commented: <span className="text-gray-300">"{notification.comment}"</span></span>
          )}
          {notification.type === 'follow' && (
            <span> started following you.</span>
          )}
        </div>
        <div className="text-xs text-gray-400">{formatTimeAgo(notification.time)}</div>
      </div>
      {notification.type !== 'follow' && notification.postImage && (
        <img src={notification.postImage} alt="Post" className="w-12 h-12 rounded-lg object-cover" />
      )}
      {notification.type === 'follow' && (
        <UserPlus className="w-6 h-6 text-primary-400" />
      )}
      {notification.type === 'like' && (
        <Heart className="w-6 h-6 text-red-500" />
      )}
      {notification.type === 'comment' && (
        <MessageCircle className="w-6 h-6 text-primary-400" />
      )}
    </div>
  )
}

export default function NotificationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-2xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-6 gradient-text">Notifications</h2>
        <div className="bg-card rounded-xl divide-y divide-border">
          {notifications.map((notification) => (
            <NotificationItem key={notification.id} notification={notification} />
          ))}
        </div>
      </main>
    </div>
  )
} 