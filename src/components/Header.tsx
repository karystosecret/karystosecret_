'use client'

import React, { useEffect, useState } from "react";
import Image from 'next/image';
import logoImage from '/public/icons/logofnl.png';
import { TfiAlignJustify } from "react-icons/tfi";
import Link from "next/link";

const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js


const Header = () =>  {
    
    const [header, setHeader] = useState(false);

    const scrollHeader = () =>{
        if(window.scrollY >= 40){
            setHeader(true)
        }else{
            setHeader(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', scrollHeader)
        
        return()=>{
            window.addEventListener('scroll', scrollHeader)
        }

    },[])

    const [isMenuOpen, setMenuOpen] = useState(false);

    // Function to toggle menu visibility
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div className={header ? "backdrop-blur-lg bg-white/85 z-20 sticky top-0 left-0 right-0 flex flex-row h-28 md:h-20 w-full border-b-0 shadow-xl items-center md:mb-20" : "backdrop-blur-lg bg-white/85 z-20 sticky top-0 left-0 right-0 flex flex-row h-28 md:h-40 w-full border-b-0 shadow-xl items-center " }>
            <button  onClick={toggleMenu} className=" md:hidden absolute left-0 px-8 hover:opacity-75 z-20">
                <TfiAlignJustify className="m-2 fill-[#a0b29d] stroke-black w-6 h-6" />
            </button>
            {isMenuOpen && (
                <div className="absolute top-28 left-0 w-full z-10 shadow-lg bg-white/95 backdrop-blur-lg ">
                    <div className="flex flex-col items-center">
                        <Link href="/" className="py-4 text-[#a0b29d] hover:text-[#7ea9b5] text-center w-full">Αρχική</Link>
                        <Link href="/ships" className="py-4 text-[#a0b29d] hover:text-[#7ea9b5] text-center w-full">Δρομολόγια</Link>
                        <Link href="/info" className="py-4 text-[#a0b29d] hover:text-[#7ea9b5] text-center w-full">Χρήσιμα Τηλέφωνα</Link>
                        <Link href="/places" className="py-4 text-[#7ea9b5] hover:text-[#a0b29d] text-center w-full">Τοποθεσίες-Καταστήματα</Link>
                        <Link href="/culture" className="py-4 text-[#7ea9b5] hover:text-[#a0b29d] text-center w-full">Τοπική Κουλτούρα</Link>
                        <Link href="/events" className="py-4 text-[#7ea9b5] hover:text-[#a0b29d] text-center w-full">Εκδηλώσεις</Link>
                    </div>
                </div>
            )}
            <div className="m-4 grid grid-cols-8 w-full px-10">
                <Link href="/" className="hidden md:flex items-center justify-center text-[#a0b29d] hover:text-[#7ea9b5] mx-8 text-xs text-center">Αρχική</Link>
                <Link href="/ships" className="hidden md:flex items-center justify-center text-[#a0b29d] hover:text-[#7ea9b5] mx-8 text-xs text-center" >Δρομολόγια</Link>
                <Link href="/info" className="hidden md:flex items-center justify-center text-[#a0b29d] hover:text-[#7ea9b5] mx-8 text-xs text-center" >Χρήσιμα Τηλ.</Link>
                <div className="w-40"></div>
                <div className="w-40"></div>
                <Link href="/places" className="hidden md:flex items-center justify-center text-[#7ea9b5] hover:text-[#a0b29d] mx-8 text-xs text-center">Τοποθεσίες-Καταστήματα</Link>
                <Link href="/culture" className="hidden md:flex items-center justify-center text-[#7ea9b5] hover:text-[#a0b29d] mx-8 text-xs text-center" >Τοπική Κουλτούρα</Link>
                <Link href="/events" className="hidden md:flex items-center justify-center text-[#7ea9b5] hover:text-[#a0b29d] mx-8 text-xs text-center" >Εκδηλώσεις</Link>
            </div>
            <Link href="/" className={header ? "w-44 h-28 md:h-20 hover:opacity-75 absolute top-1 px-4 pt-2 left-0 right-0 m-auto" : "md:w-80 w-44 h-28 md:h-40 hover:opacity-75 absolute top-1 md:top-4 px-4 md:pt-0 pt-2 left-0 right-0 m-auto"}>
                <Image className="m-auto" layout="intrinsic" src={logoImage} width={200} height={160} alt=""/>
            </Link>
        </div>    
    );
};

export default Header;