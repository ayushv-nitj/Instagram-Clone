import { Header } from '@/components/header'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { cn, formatNumber } from '@/lib/utils'

const user = {
  username: 'av_alanche._',
  fullName: 'Ayush Verma',
  avatar: '/mypic.png',
  bio: `𝐋𝐢𝐯𝐢𝐧𝐠 𝐦𝐨𝐦𝐞𝐧𝐭𝐬 𝐭𝐡𝐚𝐭 𝐟𝐞𝐞𝐥𝐬 𝐥𝐢𝐤𝐞 𝐦𝐮𝐬𝐢𝐜 🎧
𝐍𝐈𝐓 𝐉𝐒𝐑 𝐂𝐒𝐄 𝟐𝟖
𝐉𝐬𝐫 📍|| 𝐓𝐨𝐤𝐲𝐨 🔰`,
  website: 'https://github.com/ayushv-nitj',
  posts: 12,
  followers: 1234,
  following: 567,
}

const posts = [
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=600&fit=crop',
]

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-10">
        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 mb-8">
          <Avatar src={user.avatar} alt={user.username} size="xl" className="shadow-lg" />
          <div className="flex-1 w-full">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
              <h2 className="text-2xl font-bold gradient-text">{user.username}</h2>
              <Button variant="outline" size="sm" className="font-semibold">Edit Profile</Button>
            </div>
            <div className="flex space-x-6 mb-4">
              <span><span className="font-semibold">{user.posts}</span> posts</span>
              <span><span className="font-semibold">{formatNumber(user.followers)}</span> followers</span>
              <span><span className="font-semibold">{formatNumber(user.following)}</span> following</span>
            </div>
            <div className="mb-2 font-semibold text-lg text-white">{user.fullName}</div>
            <div className="mb-2 whitespace-pre-line text-gray-300">{user.bio}</div>
            <a href={user.website} target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:underline text-sm">{user.website}</a>
          </div>
        </div>
        {/* Posts Grid */}
        <div className="border-t border-border pt-8">
          <div className="grid grid-cols-3 gap-2 md:gap-4">
            {posts.map((src, i) => (
              <div key={i} className="relative aspect-square bg-surface rounded-lg overflow-hidden group cursor-pointer">
                <img src={src} alt="Post" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200" />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
} 