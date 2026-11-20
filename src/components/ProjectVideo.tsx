import { useState } from 'react'
import { FaPlay } from 'react-icons/fa6'

interface ProjectVideoProps {
  videoId: string
  title: string
}

export function ProjectVideo({ videoId, title }: ProjectVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="relative aspect-video w-full overflow-hidden border border-line bg-surface">
      {isPlaying ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      ) : (
        <button
          type="button"
          onClick={() => setIsPlaying(true)}
          aria-label={`Reproducir video: ${title}`}
          className="group absolute inset-0 flex h-full w-full flex-col items-center justify-center gap-4 overflow-hidden"
        >
          <img
            src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
            alt=""
            aria-hidden="true"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover opacity-35 brightness-75 grayscale transition-opacity duration-500 group-hover:opacity-50"
          />
          <span
            aria-hidden="true"
            className="editorial-grid absolute inset-0 opacity-30"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/55 to-canvas/35"
          />

          <span
            aria-hidden="true"
            className="absolute inset-2 border border-line/60"
          />

          <span className="relative grid h-16 w-16 place-items-center rounded-full border border-accent bg-canvas/70 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-canvas sm:h-20 sm:w-20">
            <FaPlay aria-hidden="true" className="ml-0.5 text-sm sm:text-base" />
          </span>

          <span className="relative font-mono text-[10px] uppercase tracking-[0.22em] text-ink">
            Reproducir demo
          </span>

          <span className="absolute left-5 top-5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
            Demo · 2025
          </span>
          <span className="absolute bottom-5 right-5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
            YouTube
          </span>
        </button>
      )}
    </div>
  )
}
