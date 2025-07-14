import { Header } from '@/components/header'

const exploreImages = [
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=600&fit=crop',
]

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-6 gradient-text">Explore</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-4">
          {exploreImages.map((src, i) => (
            <div
              key={i}
              className="relative aspect-square bg-surface rounded-lg overflow-hidden group cursor-pointer"
            >
              <img
                src={src}
                alt="Explore Post"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </main>
    </div>
  )
} 