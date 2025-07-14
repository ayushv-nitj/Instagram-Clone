import { Header } from '@/components/header'
import { StoriesContainer } from '@/components/story'
import { PostsContainer } from '@/components/post'
import { Sidebar } from '@/components/sidebar'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex gap-8">
          {/* Main Content */}
          <div className="flex-1 max-w-2xl">
            <StoriesContainer />
            <PostsContainer />
          </div>
          
          {/* Sidebar */}
          <Sidebar />
        </div>
      </main>
    </div>
  )
} 