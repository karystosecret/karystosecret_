import Header from "@/components/Header2";
import Footer from "@/components/Footer";

import Image from 'next/image'
import Link from 'next/link';

import { promises as fs } from 'fs';
import router from 'next/router';


import { notFound } from 'next/navigation';

export default async function MoreInfo({ params }: { params: { id: string } }) {

    const file = await fs.readFile(process.cwd() + '/data/categories.json', 'utf8');
    const data = JSON.parse(file);
    const datafnl = data.beaches.concat(data.places);

    const file2 = await fs.readFile(process.cwd() + '/data/categories2.json', 'utf8');
    const data2 = JSON.parse(file2);
    const data2fnl = data2.products.concat(data.sports);

    const all = datafnl.concat(data2fnl);
    const itemId = params.id;
    const more = all.find((p: any) => p.id === parseInt(itemId));

    console.log('datafnl:', datafnl);
    console.log('all:', all);

    if (!more) {
        return notFound(); // Handle product not found (404)
      }

    return (
        <>
        <Header/>
        <div id='Places' className="animate-fadeInAnimation p-4 md:p-20 bg-gradient-to-r from-[#a0b29d] to-[#7ea9b5]  z-10 w-full pt-8 pb-40">
        <p className="text-4xl md:text-5xl text-white font-bold text-center mb-8 drop-shadow-md tracking-tight">{more.title}</p>
            <div className="rounded-md  w-full shadow-xl  items-center p-2 mb-12">
                <div className='pb-4'>
                    <div className="md:m-0 md:m-t-8 m-8  w-full decoration-green-900 border-radius-4 w-4/5 m-auto px-4 md:px-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 md:gap-y-8 gap-2 ">
                            <div className="animate-moveDownAnimation  w-full relative " style={{ paddingBottom: "65%" }}>
                                <Image
                                className="absolute rounded-sm inset-0 w-full h-full object-cover "
                                src={more.image}
                                alt={more.title}
                                layout="fill"
                                />
                            </div>
                            <div className="animate-moveDownAnimation  w-full relative" style={{ paddingBottom: "65%" }}>
                                <Image
                                className="absolute rounded-sm inset-0 w-full h-full object-cover "
                                src={more.image}
                                alt={more.title}
                                layout="fill"
                                />
                            </div>
                            
                        </div>
                        <p className="animate-moveDownAnimation text-xl center mt-8 text-gray-200">{more.smallDescription}</p>
                        <p className="animate-moveDownAnimation text-lg center mt-4 text-gray-200">{more.region}</p>
                        <p style={{ whiteSpace: 'pre-line' }} className="text-md center mt-4 text-gray-200">{more.bigDescription}</p>
                        {more.link && (
                        <a href={more.link} className="animate-jump cursor-pointer rounded-sm border border-1 border-white relative md:mx-80 my-8 flex items-center justify-center px-5 py-4 overflow-hidden text-white transition duration-300 ease-out shadow-md hover:shadow-xl hover:ring-2 hover:[#7ea9b5]">
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#a0b29d] via-[#7ea9b5] to-[#a0b29d]"></span>
                            <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-[#a0b29d] opacity-30 group-hover:rotate-90 ease"></span>
                            <span className="relative text-white text-md">Άνοιγμα στον Χάρτη</span>
                        </a>
                )}
                    </div>
                </div>
            </div>
        </div> 
        <Footer/>
        </>
      );
}




