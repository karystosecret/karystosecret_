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
    <Image className="animate-moveDownAnimation  pointer-events-none absolute -mt-10 md:mt-0 top-1/4 left-4 w-3/6 md:top-48 md:left-12 md:w-1/4 z-10" layout="intrinsic" src={textImage1} alt=""/>
    <Image className="animate-moveDownAnimation  pointer-events-none absolute  mt-10 md:mt-0 top-3/4 right-4 w-3/6 md:top-3/4 md:right-12 md:w-1/4" layout="intrinsic" src={textImage2}  alt=""/>
    
    <div
      className="shadow-md md:shadow-xlg p-4 md:p-20 bg-gradient-to-r from-[#a0b29d] to-[#7ea9b5]  z-0 w-full md:pt-8 overflow-hidden pb-40 md:pb-40 m-4 m-w-20 w-full decoration-green-900 border-radius-4 w-4/5 m-auto"
    >
      <div className="relative w-full border border-1 border-white rounded-lg" style={{ paddingBottom: "50vh" }}>
        <Image
          className="z-20 absolute rounded-md  inset-0 w-full h-full object-cover opacity-20"
          src={Image2}
          alt=''
          layout="fill"
        />
        <div className='z-10 absolute w-full  h-full backdrop-filter bg-gradient-to-r from-[#a0b29d] to-[#7ea9b5] rounded-lg brightness-[0.9]'></div>
        <div className="absolute inset-0 flex flex-col justify-start text-white ">
          <p className="z-30 text-xl md:text-3xl text-white font-semibold text-center pt-10  mb-8 z-10 drop-shadow-md tracking-tight">Λίγα λόγια για την Κάρυστο</p>
          <p className=" z-30 m-4 md:m-10 mt-0 center text-center text-sm md:text-md drop-shadow-md">Η Κάρυστος, μια γραφική πόλη στη νότια Εύβοια, συνδυάζει αρμονικά την φυσική ομορφιά με την μακρά ιστορία.<br></br> Περιτριγυρισμένη από το όρος Όχη και καταγάλανα νερά, προσφέρει μοναδικές παραλίες. Τα αξιοθέατά της γοητεύουν τους λάτρεις της ιστορίας, ενώ η γαστρονομία της περιοχής αναδεικνύει φρέσκα τοπικά προϊόντα. <br></br>Η εύκολη πρόσβαση από την Αθήνα, την καθιστά ιδανικό προορισμό, προσφέροντας μια αυθεντική ελληνική εμπειρία σε ένα μαγευτικό περιβάλλον. </p>
        </div>
      </div>
    </div>
    
    </>
  )
}