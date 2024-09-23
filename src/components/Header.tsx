'use client'

import React, { useEffect, useState } from "react";
import Image from 'next/image'
import logoImage from '/public/icons/logo.png'
import { TfiAlignJustify } from "react-icons/tfi";

const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToShips() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 570, behavior: 'smooth' });
}
function scrollToInfo() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 1140, behavior: 'smooth' });
}
function scrollToPlaces() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 1720, behavior: 'smooth' });
}

function scrollToShops() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 2800, behavior: 'smooth' });
}

function scrollToEvents() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 3360, behavior: 'smooth' });
}

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

    return (
        <div className={header ? "backdrop-blur-lg bg-white/85 z-20 sticky top-0 left-0 right-0 flex flex-row h-20 w-full border-b-0 shadow-md  items-center px-4" : "backdrop-blur-lg bg-white/80 z-20 sticky top-0 left-0 right-0 flex flex-row h-40 w-full border-b-0 shadow-md  items-center px-4" }>
            <button onClick={scrollToTop} className=" md:hidden absolute left-0 px-8 hover:opacity-75">
                <TfiAlignJustify className="m-auto fill-[#a0b29d] stroke-black w-10 h-10" />
            </button>
            <div className="m-8 grid grid-cols-7 w-full ">
                <button onClick={scrollToTop} className="text-[#a0b29d] hover:text-[#7ea9b5] mx-8 text-sm">Αρχική</button>
                <button onClick={scrollToShips} className="text-[#a0b29d] hover:text-[#7ea9b5] mx-8 text-sm" >Δρομολόγια</button>
                <button onClick={scrollToInfo} className="text-[#a0b29d] hover:text-[#7ea9b5] mx-8 text-sm" >Χρήσιμα Τηλ.</button>
                <div className="w-40"></div>
                <button onClick={scrollToPlaces} className="text-[#7ea9b5] hover:text-[#a0b29d] mx-8 text-sm ml-14">Τοποθεσίες</button>
                <button onClick={scrollToShops} className="text-[#7ea9b5] hover:text-[#a0b29d] mx-8 text-sm" >Καταστήματα</button>
                <button onClick={scrollToEvents} className="text-[#7ea9b5] hover:text-[#a0b29d] mx-8 text-sm" >Εκδηλώσεις</button>
            </div>
            <button className={header ? "w-32 h-20 hover:opacity-75 absolute top-1 pl-4 left-0 right-0 m-auto" : "w-fit hover:opacity-75 absolute top-4 pl-4 left-0 right-0 m-auto"}>
                <Image className="m-auto" layout="intrinsic" src={logoImage} width={200} height={160} alt=""/>
            </button>
        </div>    
    );
};

export default Header;