import { Header } from '@/components/header'

export default function MessagesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-2xl mx-auto px-4 py-10 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-2 gradient-text">Messages</h2>
        <p className="text-gray-400 mb-6">Your direct messages will appear here.</p>
        <div className="bg-card rounded-xl p-8 text-center text-gray-400">No messages yet.</div>
      </main>
    </div>
  )
} 