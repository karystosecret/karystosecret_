import React from "react";
import Link from "next/link";


import Image from 'next/image'
import Image1 from '/public/images/DJI_0006-Edit.jpg'
import Image2 from '/public/images/DJI_0012.jpg'
import Image3 from '/public/images/IMG_3670.jpg'
import Image4 from '/public/images/IMGP2159.jpg'
import Image5 from '/public/images/IMGP2307.jpg'

const Shops = () =>  {
    return (
        <div id="Shops" className="p-20 bg-gradient-to-r from-[#a0b29d] to-[#7ea9b5]  z-10 w-full">
        <p className="text-4xl text-white font-bold text-center mt-10 mb-4">Καταστήματα</p>
            <div className="  w-full shadow-xl  items-center p-2 mb-8">
                <p className="text-2xl text-white font-bold mb-4 mx-10 w-full block">Εστιατόρια</p>
                <div className='grid grid-cols-3 gap-y-10 gap-x-0'>
                    
                </div>
            </div> 
            <div className="  w-full shadow-xl  items-center p-2 mb-8">
                <p className="text-2xl text-white font-bold mb-4 mx-10 w-full block">Beach Bar </p>
                <div className='grid grid-cols-3 gap-y-10 gap-x-0'>
                    
                </div>
            </div> 
            <div className="  w-full shadow-xl  items-center p-2 mb-8">
                <p className="text-2xl text-white font-bold mb-4 mx-10 w-full block">Cafe</p>
                <div className='grid grid-cols-3 gap-y-10 gap-x-0'>
                
                </div>
            </div> 
            <div className="  w-full shadow-xl  items-center p-2 mb-8">
                <p className="text-2xl text-white font-bold mb-4 mx-10 w-full block">Night Life</p>
                <div className='grid grid-cols-3 gap-y-10 gap-x-0'>
                
                </div>
            </div> 
        </div>     
    );
};

export default Shops;