'use client'

import Image from 'next/image'
import Image1 from '/public/Events/galaxy.png'

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
    <div id='Events' className='p-6 md:p-20 animate-fadeInAnimation embla w-full bg-gradient-to-r from-[#a0b29d] to-[#7ea9b5] pt-8 pb-40'>
        <p className="text-4xl md:text-5xl text-white font-bold text-center mb-4 drop-shadow-md tracking-tight">Εκδηλώσεις</p>
        <div className='animate-moveDownAnimation flex flex-col md:flex-row rounded-md shadow-xl md:px-44 '>
          <p className="mx-4 md:m-auto  md:w-3/6 m-auto text-gray-200 center text-center text-sm drop-shadow-md">Live συναυλίες, εκθέσεις, θεατρικές και χορευτικές παραστάσεις και προβολές συμβαίνουν στην Κάρυστο και μας καλούν να ζήσουμε μια ξεχωριστή εμπειρία.</p>
          <div className='embla__viewport md:w-1/4 w-3/4 m-10 mt-4 md:m-auto md:my-10 shadow-xl mx-auto' ref={emblaRef}>
            <div className='embla__container h-full '>
              <div className='embla__slide flex items-center justify-center'>
                <Image className='rounded-lg md:rounded-md' src={Image1} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} alt=""></Image>
              </div>
              <div className='embla__slide flex items-center justify-center '>
                <Image className='rounded-lg md:rounded-md' src={Image1} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} alt=""></Image>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}