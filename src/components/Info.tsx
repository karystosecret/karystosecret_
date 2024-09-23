'use client'


import Image from 'next/image'
import Image1 from '/public/images/DJI_0006-Edit.jpg'
import Image2 from '/public/images/DJI_0012.jpg'
import Image3 from '/public/images/IMG_3670.jpg'
import Image4 from '/public/images/IMGP2159.jpg'
import Image5 from '/public/images/IMGP2307.jpg'

const Shops = () =>  {
    return (
        <div id='Info' className="p-20 bg-gradient-to-r from-[#a0b29d] to-[#7ea9b5]  z-10 w-full">
        <p className="text-4xl text-white font-bold text-center mt-10 mb-4">Χρήσιμα Τηλέφωνα</p>
            <div className='grid grid-cols-2 w-full  shadow-xl  p-4 mb-8'>
            <div className="  w-1/2  items-center">
                <p className="text-xl text-white font-bold mb-1 mx-10 w-full block">Νοσοκομείο Καρύστου </p>
                <p className="text-sm text-white font ml-12 mb-8 mx-10 w-full block">166-2224350100 </p>
                <p className="text-xl text-white font-bold mb-1 mx-10 w-full block">Πυροσβεστική Καρύστου</p>
                <p className="text-sm text-white font ml-12 mb-8 mx-10 w-full block">2224026199 </p>
                <p className="text-xl text-white font-bold mb-1 mx-10 w-full block">Λιμεναρχείο Καρύστου </p>
                <p className="text-sm text-white font ml-12 mb-8 mx-10 w-full block">22240222 </p>
            </div> 
            <div className="  w-1/2  items-center ml-40">
                <p className="text-xl text-white font-bold mb-1 mx-10 w-full block">Αστυνομία Καρύστου</p>
                <p className="text-sm text-white font ml-12 mb-8 mx-10 w-full block">22240222252</p>
                <p className="text-xl text-white font-bold mb-1 mx-10 w-full block">ΚΤΕΛ Καρύστου</p>
                <p className="text-sm text-white font ml-12 mb-8 mx-10 w-full block">2224026303</p>
                <p className="text-xl text-white font-bold mb-1 mx-10 w-full block">Ταξί Καρύστου</p>
                <p className="text-sm text-white font ml-12 mb-8 mx-10 w-full block">2224026500</p>
            </div> 
            </div>
        </div>   
    );
};

export default Shops;