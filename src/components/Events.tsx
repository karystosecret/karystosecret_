'use client'

import Image from 'next/image'
import Image1 from '/public/Events/galaxy.png'
import Image2 from '/public/Events/petalouda.png'

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
    <div id='Events' className='embla w-full bg-gradient-to-r from-[#a0b29d] to-[#7ea9b5]'>
        <p className="text-4xl text-white font-bold text-center mt-10 mb-4 ">Εκδηλώσεις</p>
      <div className='embla__viewport w-1/6  m-auto shadow-xl mt-8 mb-20' ref={emblaRef}>
        <div className='embla__container h-full'>
          <div className='embla__slide flex items-center justify-center'>
            <Image src={Image1} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} alt=""></Image>
          </div>
          <div className='embla__slide flex items-center justify-center'>
            <Image src={Image2} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} alt=""></Image>
          </div>
        </div>
      </div>
    </div>
  )
}