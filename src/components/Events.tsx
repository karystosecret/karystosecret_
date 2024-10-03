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
    <div id='Events' className='p-4 md:p-20 animate-fadeInAnimation embla w-full bg-gradient-to-r from-[#a0b29d] to-[#7ea9b5] md:pt-8 pb-40'>
        <p className="text-4xl md:text-5xl text-white font-bold text-center mb-4 drop-shadow-md tracking-tight">Εκδηλώσεις</p>
        <div className='animate-moveDownAnimation flex flex-col md:flex-row rounded-md shadow-md md:shadow-xl md:px-44 bg-white bg-opacity-10 md:p-8'>
          <p className="mx-0 mt-0 md:mt-1/3 md:mx-4 md:m-auto  md:w-3/6 m-0 text-gray-200 center text-center text-sm drop-shadow-md">Συναυλίες, εκθέσεις, θεατρικές και χορευτικές παραστάσεις και προβολές, διοργανώνονται στην Κάρυστο, προσφέροντας μια μοναδική εμπειρία.</p>
          <div className='embla__viewport md:w-[30%] w-3/4 m-8 mt-4 md:mt-4 md:m-auto shadow-xl mx-auto rounded-md overflow-hidden' ref={emblaRef}>
            <div className='embla__container h-full '>
              <div className='embla__slide flex items-center justify-center'>
                <Image className='rounded-lg ' src={Image1} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} alt=""></Image>
              </div>
              <div className='embla__slide flex items-center justify-center '>
                <Image className='rounded-lg ' src={Image1} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} alt=""></Image>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}