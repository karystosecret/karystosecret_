'use client'

import Image from "next/image";
import birdsImage from '/public/icons/birds.png'
import Maps from "@/components/Maps";

const Shops = () =>  {
    return (
        <div id='Info' className="animate-fadeInAnimation p-4 md:p-20 bg-gradient-to-r from-[#a0b29d] to-[#7ea9b5]  z-10 w-full md:pt-8 pb-40 overflow-hidden">
        <Image src={birdsImage} width={140} height={140} layout="intrinsic" sizes=""  alt=''className="hidden drop-shadow-md absolute top-100vh left-0 md:ml-8 ml-1 z-10 md:pt-2 pt-8 scale-50 md:scale-100"/>
        <p className="text-4xl md:text-5xl text-white font-bold text-center mb-4 md:mb-8 drop-shadow-md tracking-tight">Χρήσιμα Τηλέφωνα</p>
            <div className='grid grid-cols-1 md:grid-cols-2 w-full rounded-md shadow-md md:shadow-xl md:p-4 p-0 pt-4 md:pt-0 mb-8 '>
            <div className="animate-moveDownAnimation  md:w-1/2  items-center">
                <p className="text-lg md:text-xl text-white font-bold mb-[0.6] md:mb-1 mx-8 md:mx-10 w-full block">Νοσοκομείο Καρύστου </p>
                <p className="text-md md:text-sm font ml-10 md:ml-12 mb-4 md:mb-8 mx-8 md:mx-10 w-full block text-gray-200">166-2224350100 </p>
                <p className="text-lg md:text-xl text-white font-bold mb-[0.6] md:mb-1 mx-8 md:mx-10 w-full block">Πυροσβεστική Καρύστου</p>
                <p className="text-md md:text-sm font ml-10 md:ml-12 mb-4 md:mb-8 mx-8 md:mx-10 w-full block text-gray-200">2224026199 </p>
                <p className="text-lg md:text-xl text-white font-bold mb-[0.6] md:mb-1 mx-8 md:mx-10 w-full block">Λιμεναρχείο Καρύστου </p>
                <p className="text-md md:text-sm font ml-10 md:ml-12 mb-4 md:mb-8 mx-8 md:mx-10 w-full block text-gray-200">2224022227</p>
            </div> 
            <div className="animate-moveDownAnimation  md:w-1/2  items-center md:ml-40">
                <p className="text-lg md:text-xl font-bold mb-[0.6] md:mb-1 mx-8 md:mx-10 w-full block">Αστυνομία Καρύστου</p>
                <p className="text-md md:text-sm font ml-10 md:ml-12 mb-4 md:mb-8 mx-8 md:mx-10 w-full block text-gray-200">22240222252</p>
                <p className="text-lg md:text-xl text-white font-bold mb-[0.6] md:mb-1 mx-8 md:mx-10 w-full block">ΚΤΕΛ Καρύστου</p>
                <p className="text-md md:text-sm font ml-10 md:ml-12 mb-4 md:mb-8 mx-8 md:mx-10 w-full block text-gray-200">2224026303</p>
                <p className="text-lg md:text-xl text-white font-bold mb-[0.6] md:mb-1 mx-8 md:mx-10 w-full block">Ταξί Καρύστου</p>
                <p className="text-md md:text-sm font ml-10 md:ml-12 mb-4 md:mb-8 mx-8 md:mx-10 w-full text-gray-200">2224026500</p>
            </div> 
            </div>
            <div className="rounded-md overflow-hidden"><Maps/></div>
        </div>   
    );
};

export default Shops;