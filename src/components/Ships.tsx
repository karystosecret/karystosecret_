import React from "react";
import Link from "next/link";
import Image from "next/image";
import olivesImage from '/public/icons/olives.png'

const Shops = () =>  {
    return (
        <div id="Ships" className="animate-fadeInAnimation p-4 md:p-20 bg-gradient-to-r from-[#a0b29d] to-[#7ea9b5]  z-0 w-full md:pt-8 overflow-hidden pb-40 md:pb-40">
        <Image src={olivesImage} width={100} height={100} layout="intrinsic" sizes=""  alt=''className="hidden scale-75 md:scale-100 drop-shadow-md absolute right-0 -mt-8 md:mt-0 mr-0 md:mr-6 z-20"/>
        <p className="text-4xl md:text-5xl text-white font-bold text-center  mb-12 z-10 drop-shadow-md tracking-tight">Δρομολόγια Πλοίων</p>
        <p className="text-xl font-semibold text-white text-center mt-10">Ραφήνα - Μαρμάρι</p>
        <div className="grid w-full shadow-xl rounded-md items-center z-10 mt-4">
            <div className="grid grid-cols-8 grid rows-3 z-10">
                <div className="w-full md:w-40"></div>
                <p className="text-[7px] md:text-xs text-black outline outline-1 md:outline-2 outline-white p-1">Δευτέρα</p>
                <p className="text-[7px] md:text-xs text-black outline outline-1 md:outline-2 outline-white p-1">Τρίτη</p>
                <p className="text-[7px] md:text-xs text-black outline outline-1 md:outline-2 outline-white p-1">Τετάρτη</p>
                <p className="text-[7px] md:text-xs text-black outline outline-1 md:outline-2 outline-white p-1">Πέμπτη</p>
                <p className="text-[7px] md:text-xs text-black outline outline-1 md:outline-2 outline-white p-1">Παρασκευή</p>
                <p className="text-[7px] md:text-xs text-black outline outline-1 md:outline-2 outline-white p-1">Σάββατο</p>
                <p className="text-[7px] md:text-xs text-black outline outline-1 md:outline-2 outline-white p-1">Κυριακή</p>
                
                <p className="text-[7px] md:text-xs text-black outline outline-1 md:outline-2 outline-white p-1">Ραφήνα-Μαρμάρι </p>
                <p className="text-[8px] md:text-xs outline outline-1 md:outline-2 outline-white p-2">9:00, 16:00</p>
                <p className="text-[8px] md:text-xs outline outline-1 md:outline-2 outline-white p-2">9:00, 16:00</p>
                <p className="text-[8px] md:text-xs outline outline-1 md:outline-2 outline-white p-2">9:00, 16:00</p>
                <p className="text-[8px] md:text-xs outline outline-1 md:outline-2 outline-white p-2">9:00, 16:00</p>
                <p className="text-[8px] md:text-xs outline outline-1 md:outline-2 outline-white p-2">9:00, 16:00</p>
                <p className="text-[8px] md:text-xs outline outline-1 md:outline-2 outline-white p-2">9:00, 16:00</p>
                <p className="text-[8px] md:text-xs outline outline-1 md:outline-2 outline-white p-2">9:00, 16:00</p>

                <p className="text-[7px] md:text-xs text-black outline outline-1 md:outline-2 outline-white p-1">Μαρμάρι-Ραφήνα </p>
                <p className="text-[8px] md:text-xs outline outline-1 md:outline-2 outline-white p-2">9:00, 16:00</p>
                <p className="text-[8px] md:text-xs outline outline-1 md:outline-2 outline-white p-2">9:00, 16:00</p>
                <p className="text-[8px] md:text-xs outline outline-1 md:outline-2 outline-white p-2">9:00, 16:00</p>
                <p className="text-[8px] md:text-xs outline outline-1 md:outline-2 outline-white p-2">9:00, 16:00</p>
                <p className="text-[8px] md:text-xs outline outline-1 md:outline-2 outline-white p-2">9:00, 16:00</p>
                <p className="text-[8px] md:text-xs outline outline-1 md:outline-2 outline-white p-2">9:00, 16:00</p>
                <p className="text-[8px] md:text-xs outline outline-1 md:outline-2 outline-white p-2">9:00, 16:00</p>
            </div>
        </div>
        <p className="text-xl font-semibold text-white text-center mt-20">Αγία Μαρίνα - Νέα Στύρα</p>
        <div className="grid w-full shadow-xl items-center mt-4">
            <div className="grid grid-cols-8 grid rows-3">
                <div className="w-full md:w-40"></div>
                <p className="text-[7px] md:text-xs text-black outline outline-1 md:outline-2 outline-white p-1">Δευτέρα</p>
                <p className="text-[7px] md:text-xs text-black outline outline-1 md:outline-2 outline-white p-1">Τρίτη</p>
                <p className="text-[7px] md:text-xs text-black outline outline-1 md:outline-2 outline-white p-1">Τετάρτη</p>
                <p className="text-[7px] md:text-xs text-black outline outline-1 md:outline-2 outline-white p-1">Πέμπτη</p>
                <p className="text-[7px] md:text-xs text-black outline outline-1 md:outline-2 outline-white p-1">Παρασκευή</p>
                <p className="text-[7px] md:text-xs text-black outline outline-1 md:outline-2 outline-white p-1">Σάββατο</p>
                <p className="text-[7px] md:text-xs text-black outline outline-1 md:outline-2 outline-white p-1">Κυριακή</p>
                
                <p className="text-[7px] md:text-xs text-black outline outline-1 md:outline-2 outline-white p-1">Αγία Μαρίνα-Νέα Στύρα</p>
                <p className="text-[8px] md:text-xs outline outline-1 md:outline-2 outline-white p-2">9:00, 16:00</p>
                <p className="text-[8px] md:text-xs outline outline-1 md:outline-2 outline-white p-2">9:00, 16:00</p>
                <p className="text-[8px] md:text-xs outline outline-1 md:outline-2 outline-white p-2">9:00, 16:00</p>
                <p className="text-[8px] md:text-xs outline outline-1 md:outline-2 outline-white p-2">9:00, 16:00</p>
                <p className="text-[8px] md:text-xs outline outline-1 md:outline-2 outline-white p-2">9:00, 16:00</p>
                <p className="text-[8px] md:text-xs outline outline-1 md:outline-2 outline-white p-2">9:00, 16:00</p>
                <p className="text-[8px] md:text-xs outline outline-1 md:outline-2 outline-white p-2">9:00, 16:00</p>

                <p className="text-[7px] md:text-xs text-black outline outline-1 md:outline-2 outline-white p-1">Νέα Στύρα-Αγία Μαρίνα </p>
                <p className="text-[8px] md:text-xs outline outline-1 md:outline-2 outline-white p-2">9:00, 16:00</p>
                <p className="text-[8px] md:text-xs outline outline-1 md:outline-2 outline-white p-2">9:00, 16:00</p>
                <p className="text-[8px] md:text-xs outline outline-1 md:outline-2 outline-white p-2">9:00, 16:00</p>
                <p className="text-[8px] md:text-xs outline outline-1 md:outline-2 outline-white p-2">9:00, 16:00</p>
                <p className="text-[8px] md:text-xs outline outline-1 md:outline-2 outline-white p-2">9:00, 16:00</p>
                <p className="text-[8px] md:text-xs outline outline-1 md:outline-2 outline-white p-2">9:00, 16:00</p>
                <p className="text-[8px] md:text-xs outline outline-1 md:outline-2 outline-white p-2">9:00, 16:00</p>
            </div>
        </div>
        </div>   
    );
};

export default Shops;