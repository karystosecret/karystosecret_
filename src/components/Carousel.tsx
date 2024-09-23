'use client'

import Image from 'next/image'
import Image1 from '/public/images/DJI_0006-Edit.jpg'
import Image2 from '/public/images/DJI_0012.jpg'
import Image5 from '/public/images/IMGP2307.jpg'
import textImage1 from '/public/icons/karystosecrettext1.png'
import textImage2 from '/public/icons/karystosecrettext2.png'

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
    <>
    <div className='animate-fadeInAnimation embla h-screen md:w-full md:pb-40 bg-gradient-to-r from-[#a0b29d] to-[#7ea9b5]'>
      <div className='embla__viewport  h-[calc(100%-8rem)] md:h-screen md:-mt-40' ref={emblaRef}>
        <div className='embla__container h-full'>
          <div className='embla__slide flex items-center justify-center'>
            <Image src={Image2} width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt=""></Image>
          </div>
          <div className='embla__slide flex items-center justify-center'>
            <Image src={Image5} width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt=""></Image>
          </div>
          <div className='embla__slide flex items-center justify-center'>
            <Image src={Image1} width={0} height={0} sizes="100vw"  style={{ width: '100%', height: '100%', objectFit: 'cover'  }} alt=""></Image>
          </div>
        </div>
      </div>
    </div>
    <Image className="animate-moveDownAnimation  pointer-events-none absolute -mt-10 md:mt-0 top-1/4 left-4 w-3/5 md:top-48 md:left-12 md:w-1/4 z-10" layout="intrinsic" src={textImage1} alt=""/>
    <Image className="animate-moveDownAnimation  pointer-events-none absolute -mt-10 md:mt-0 top-3/4 right-4 w-3/5 md:top-3/4 md:right-12 md:w-1/4" layout="intrinsic" src={textImage2}  alt=""/>
    </>
  )
}