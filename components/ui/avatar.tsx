import { cn } from "@/lib/utils"
import Image from "next/image"

interface AvatarProps {
  src?: string | null
  alt?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

export function Avatar({ src, alt = "Avatar", size = 'md', className }: AvatarProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  }

  return (
    <div className={cn(
      "relative rounded-full overflow-hidden bg-gradient-to-br from-primary-400 to-secondary-500",
      sizeClasses[size],
      className
    )}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-white font-semibold">
          {alt.charAt(0).toUpperCase()}
        </div>
      )}
    </div>
  )
} 