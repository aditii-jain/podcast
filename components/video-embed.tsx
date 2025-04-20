"use client"

interface VideoEmbedProps {
  videoId: string
  title: string
  platform: "youtube" | "vimeo" | "custom"
  aspectRatio?: "16:9" | "4:3" | "1:1"
}

export function VideoEmbed({ videoId, title, platform, aspectRatio = "16:9" }: VideoEmbedProps) {
  // Calculate padding based on aspect ratio
  const getPaddingTop = () => {
    switch (aspectRatio) {
      case "4:3":
        return "75%"
      case "1:1":
        return "100%"
      default:
        return "56.25%" // 16:9
    }
  }

  // Generate the appropriate embed URL based on the platform
  const getEmbedUrl = () => {
    switch (platform) {
      case "youtube":
        return `https://www.youtube.com/embed/${videoId}`
      case "vimeo":
        return `https://player.vimeo.com/video/${videoId}`
      case "custom":
        // For custom videos hosted elsewhere
        return videoId
      default:
        return ""
    }
  }

  return (
    <div className="w-full">
      <div style={{ position: "relative", paddingTop: getPaddingTop() }}>
        <iframe
          src={getEmbedUrl()}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none",
          }}
        />
      </div>
    </div>
  )
}
