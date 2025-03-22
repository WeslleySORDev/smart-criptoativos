import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

const CarouselContext = createContext({})

export const CarouselProvider = ({ children }) => {
  const [carouselRef, carouselApi] = useEmblaCarousel(
    { align: 'start', loop: true, dragFree: true },
    [Autoplay({ playOnInit: true, delay: 4000 })],
  )
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])

  const scrollDot = useCallback(
    (index) => carouselApi?.scrollTo(index),
    [carouselApi],
  )

  const scrollPrev = useCallback(() => carouselApi?.scrollPrev(), [carouselApi])
  const scrollNext = useCallback(() => carouselApi?.scrollNext(), [carouselApi])

  const onInit = useCallback(() => {
    if (!carouselApi) return

    setScrollSnaps(carouselApi.scrollSnapList())
  }, [carouselApi])

  const onSelect = useCallback(() => {
    if (!carouselApi) return

    setSelectedIndex(carouselApi.selectedScrollSnap())
    setCanScrollPrev(carouselApi.canScrollPrev())
    setCanScrollNext(carouselApi.canScrollNext())
  }, [carouselApi])

  useEffect(() => {
    if (!carouselApi) return

    onInit()
    onSelect()

    carouselApi
      .on('reInit', onInit)
      .on('reInit', onSelect)
      .on('select', onSelect)

    return () => {
      carouselApi.off('select', onSelect)
    }
  }, [carouselApi, onInit, onSelect])

  const value = {
    canScrollNext,
    canScrollPrev,
    carouselApi,
    carouselRef,
    selectedIndex,
    scrollSnaps,
    scrollDot,
    scrollNext,
    scrollPrev,
  }

  return (
    <CarouselContext.Provider value={value}>
      {children}
    </CarouselContext.Provider>
  )
}

export const useCarousel = () => {
  const carouselContext = useContext(CarouselContext)

  if (!carouselContext) {
    throw new Error('useCarousel deve ser usado dentro de <Carousel />')
  }

  return carouselContext
}
