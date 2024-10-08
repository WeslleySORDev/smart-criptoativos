import { ChevronLeftIcon } from 'lucide-react'
import { ChevronRightIcon } from 'lucide-react'
import { forwardRef, HTMLAttributes } from 'react'

import { CarouselProvider, useCarousel } from '../contexts/carousel'
import { tailwindMerge } from '../helpers/tailwind-merge'

export const Carousel = forwardRef(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <CarouselProvider>
        <div
          role="region"
          aria-roledescription="carousel"
          className={tailwindMerge('relative overflow-hidden', className)}
          {...props}
          ref={forwardedRef}
        >
          {children}
        </div>
      </CarouselProvider>
    )
  },
)

Carousel.displayName = 'Carousel'

export const CarouselContent = forwardRef(
  ({ className, ...props }, forwardedRef) => {
    const { carouselRef } = useCarousel()

    return (
      <div ref={carouselRef}>
        <div
          className={tailwindMerge('flex', className)}
          {...props}
          ref={forwardedRef}
        />
      </div>
    )
  },
)

CarouselContent.displayName = 'CarouselContent'

export const CarouselItem = forwardRef(
  ({ className, ...props }, forwardedRef) => {
    return (
      <div
        role="group"
        aria-roledescription="slide"
        className={tailwindMerge(
          'shrink-0 grow-0 basis-full md:basis-1/2 lg:basis-1/4 xl:basis-1/5',
          className,
        )}
        {...props}
        ref={forwardedRef}
      />
    )
  },
)

CarouselItem.displayName = 'CarouselItem'

export const CarouselPrevious = forwardRef(
  ({ className, ...props }, forwardedRef) => {
    const { canScrollPrev, scrollPrev } = useCarousel()

    return (
      <button
        type="button"
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        className={tailwindMerge('', className)}
        {...props}
        ref={forwardedRef}
      >
        <ChevronLeftIcon />
        <span className="sr-only">Slide anterior</span>
      </button>
    )
  },
)

CarouselPrevious.displayName = 'CarouselPrevious'

export const CarouselNext = forwardRef(
  ({ className, ...props }, forwardedRef) => {
    const { canScrollNext, scrollNext } = useCarousel()

    return (
      <button
        type="button"
        disabled={!canScrollNext}
        onClick={scrollNext}
        className={tailwindMerge('', className)}
        {...props}
        ref={forwardedRef}
      >
        <ChevronRightIcon />
        <span className="sr-only">Próximo slide</span>
      </button>
    )
  },
)

CarouselNext.displayName = 'CarouselNext'

export const CarouselDots = () => {
  const { scrollDot, scrollSnaps, selectedIndex } = useCarousel()

  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {scrollSnaps.map((_, index) => {
        const isSelected = selectedIndex === index ? 'bg-[#7ed956]' : ''

        return (
          <button
            key={`dot-${index}`}
            type="button"
            onClick={() => scrollDot(index)}
            className={tailwindMerge(
              'flex size-2 cursor-pointer touch-manipulation items-center justify-center rounded-full bg-[#1f1f1f] no-underline after:flex after:size-2 after:items-center after:rounded-full after:contain-content',
              isSelected,
            )}
          />
        )
      })}
    </div>
  )
}
