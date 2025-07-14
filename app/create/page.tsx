"use client";
import { Header } from '@/components/header'
import { useRef, useState } from 'react'
import { Button } from '@/components/ui/button'

export default function CreatePostPage() {
  const [image, setImage] = useState<string | null>(null)
  const [caption, setCaption] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (ev) => setImage(ev.target?.result as string)
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-md mx-auto px-4 py-10 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-6 gradient-text">Create Post</h2>
        <form className="bg-card rounded-xl p-6 w-full flex flex-col gap-4 shadow-lg">
          <div className="flex flex-col items-center gap-2">
            {image ? (
              <img src={image} alt="Preview" className="w-40 h-40 object-cover rounded-lg" />
            ) : (
              <div className="w-40 h-40 bg-surface rounded-lg flex items-center justify-center text-gray-400 text-3xl">+</div>
            )}
            <input
              type="file"
              accept="image/*"
              className="hidden"
              ref={fileInputRef}
              onChange={handleImageChange}
            />
            <Button type="button" variant="outline" size="sm" onClick={() => fileInputRef.current?.click()}>
              {image ? 'Change Image' : 'Upload Image'}
            </Button>
          </div>
          <textarea
            className="bg-surface rounded-lg p-2 text-white resize-none min-h-[80px] border border-border focus:ring-2 focus:ring-primary-400"
            placeholder="Write a caption..."
            value={caption}
            onChange={e => setCaption(e.target.value)}
          />
          <Button type="submit" variant="gradient" size="md" className="w-full">Post</Button>
        </form>
      </main>
    </div>
  )
} 