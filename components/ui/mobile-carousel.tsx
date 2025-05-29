"use client"

import * as React from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function MobileCarousel({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  })

  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  React.useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
      emblaApi.off("reInit", onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <div className={cn("relative", className)}>
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">{children}</div>
      </div>
      <div className="flex justify-center gap-2 mt-4">
        <Button
          variant="outline"
          size="icon"
          className={cn(
            "h-8 w-8 rounded-full",
            !canScrollPrev && "opacity-50 cursor-not-allowed"
          )}
          disabled={!canScrollPrev}
          onClick={scrollPrev}
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="sr-only">Previous slide</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className={cn(
            "h-8 w-8 rounded-full",
            !canScrollNext && "opacity-50 cursor-not-allowed"
          )}
          disabled={!canScrollNext}
          onClick={scrollNext}
        >
          <ArrowRight className="h-4 w-4" />
          <span className="sr-only">Next slide</span>
        </Button>
      </div>
    </div>
  )
}

export function MobileCarouselItem({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("flex-shrink-0 flex-grow-0 w-full", className)}>
      <div className="p-1">{children}</div>
    </div>
  )
}
