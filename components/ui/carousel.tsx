"use client"

import * as React from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

interface CarouselProps {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
  className?: string
  children: React.ReactNode
}

export const Carousel = React.forwardRef<
  HTMLDivElement,
  CarouselProps
>(
  (
    {
      opts,
      plugins,
      orientation = "horizontal",
      setApi,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins
    )

    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return
      }

      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }, [])

    const scrollPrev = React.useCallback(() => {
      emblaApi?.scrollPrev()
    }, [emblaApi])

    const scrollNext = React.useCallback(() => {
      emblaApi?.scrollNext()
    }, [emblaApi])

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault()
          scrollPrev()
        } else if (event.key === "ArrowRight") {
          event.preventDefault()
          scrollNext()
        }
      },
      [scrollPrev, scrollNext]
    )

    React.useEffect(() => {
      if (!emblaApi) {
        return
      }

      setCanScrollPrev(emblaApi.canScrollPrev())
      setCanScrollNext(emblaApi.canScrollNext())
      emblaApi.on("select", onSelect)
      emblaApi.on("reInit", onSelect)

      return () => {
        emblaApi.off("select", onSelect)
        emblaApi.off("reInit", onSelect)
      }
    }, [emblaApi, onSelect])

    React.useEffect(() => {
      if (emblaApi && setApi) {
        setApi(emblaApi)
      }
    }, [emblaApi, setApi])

    return (
      <div
        ref={ref}
        className={cn("relative", className)}
        onKeyDownCapture={handleKeyDown}
        {...props}
      >
        <div
          ref={emblaRef}
          className="overflow-hidden"
          dir="ltr"
        >
          <div className="flex">
            {children}
          </div>
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
)
Carousel.displayName = "Carousel"

export const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex-shrink-0 min-w-0", className)}
    {...props}
  />
))
CarouselContent.displayName = "CarouselContent"

export const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    role="group"
    aria-roledescription="slide"
    className={cn("min-w-0 shrink-0 grow-0 basis-full", className)}
    {...props}
  />
))
CarouselItem.displayName = "CarouselItem"

export const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => (
  <Button
    ref={ref}
    variant={variant}
    size={size}
    className={cn("absolute left-1 top-1/2 -translate-y-1/2 rounded-full", className)}
    {...props}
  >
    <ArrowLeft className="h-4 w-4" />
    <span className="sr-only">Previous slide</span>
  </Button>
))
CarouselPrevious.displayName = "CarouselPrevious"

export const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => (
  <Button
    ref={ref}
    variant={variant}
    size={size}
    className={cn("absolute right-1 top-1/2 -translate-y-1/2 rounded-full", className)}
    {...props}
  >
    <ArrowRight className="h-4 w-4" />
    <span className="sr-only">Next slide</span>
  </Button>
))
CarouselNext.displayName = "CarouselNext"
