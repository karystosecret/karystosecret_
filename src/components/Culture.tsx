'use client'

import Image from 'next/image'
import Link from 'next/link';

import data from '/data/categories2.json';

const Shops = () =>  {
    return (
        <div id='Places' className="animate-fadeInAnimation p-4 md:p-20 bg-gradient-to-r from-[#a0b29d] to-[#7ea9b5]  z-10 w-full pt-8 pb-40 overflow-hidden">
        <p className="text-4xl md:text-5xl text-white font-bold text-center mb-4 drop-shadow-md tracking-tight">Τοπική Κουλτούρα</p>
            <div className="rounded-md  w-full shadow-xl  items-center p-2 mb-12">
                <p className="text-xl md:text-3xl text-white font-bold mt-4 mb-8 mx-10 w-full block">Τοπικά Προιόντα</p>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-0 pb-4'>
                    {data.products.map((beach:any) =>(
                    <Link href={`/more/${beach.id}`} className="group hover:-translate-y-1 hover:scale-[1.01] transition ease-in-out duration-100 cursor-pointer m-8 m-w-20 w-full  decoration-green-900 border-radius-4 w-4/5 m-auto px-4 md:px-10">
                        <p className="text-sm md:text-md md:font-bold text-white center text-center mb-1">{beach.title}</p>
                        <div className="relative w-full" style={{ paddingBottom: "55%" }}>
                            <Image
                            className="absolute rounded-sm inset-0 w-full h-full object-cover group-hover:brightness-[1.06] group-hover:contrast-[1.03]"
                            src={beach.image}
                            alt={beach.title}
                            layout="fill"
                            />
                        </div>
                        <p className="text-xs center mt-1 text-gray-200">{beach.smallDescription}</p>
                        <p className="text-xs center mt-1 text-gray-200">{beach.region}</p>
                    </Link>
                    ))}
                </div>
            </div> 
            <div className="rounded-md  w-full shadow-xl  items-center p-2 mb-12 hidden">
                <p className="text-xl md:text-3xl text-white font-bold mt-4 mb-8 mx-10 w-full block">Τοπική Κουζίνα</p>
                <div className='grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-0 pb-4'>
                    {data.foods.map((beach:any) =>(
                    <Link href={`/more/${beach.id}`} className="group hover:-translate-y-1 hover:scale-[1.01] transition ease-in-out duration-100 cursor-pointer m-8 m-w-20 w-full  decoration-green-900 border-radius-4 w-4/5 m-auto px-4 md:px-10">
                        <p className="text-white center text-sm md:text-md md:font-bold  text-center mb-1">{beach.title}</p>
                        <div className="relative w-full" style={{ paddingBottom: "58%" }}>
                            <Image
                            className="absolute rounded-sm inset-0 w-full h-full object-cover group-hover:brightness-[1.06] group-hover:contrast-[1.03]"
                            src={beach.image}
                            alt={beach.title}
                            layout="fill"
                            />
                        </div>
                        <p className="text-xs center mt-1 text-gray-200">{beach.smallDescription}</p>
                        <p className="text-xs center mt-1 text-gray-200">{beach.region}</p>
                    </Link>
                    ))}
                </div>
            </div>
        </div>   
    );
};

export default Shops;