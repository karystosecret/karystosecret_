'use client'

import Image from 'next/image'
import Image1 from '/public/images/DJI_0006-Edit.jpg'
import Image2 from '/public/images/DJI_0012.jpg'
import Image5 from '/public/images/IMGP2307.jpg'

import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className='embla w-full'>
      <div className='embla__viewport  h-screen -mt-40' ref={emblaRef}>
        <div className='embla__container h-full'>
          <div className='embla__slide flex items-center justify-center'>
            <Image src={Image2} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} alt=""></Image>
          </div>
          <div className='embla__slide flex items-center justify-center'>
            <Image src={Image5} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} alt=""></Image>
          </div>
          <div className='embla__slide flex items-center justify-center'>
            <Image src={Image1} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} alt=""></Image>
          </div>
        </div>
      </div>
    </div>
  )
}