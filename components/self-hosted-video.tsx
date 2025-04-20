"use client"

import { useRef } from "react"

interface SelfHostedVideoProps {
  videoPath: string
  title: string
}

export function SelfHostedVideo({ videoPath, title }: SelfHostedVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <div className="relative w-full h-full">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        controls
        title={title}
      >
        <source src={videoPath} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
