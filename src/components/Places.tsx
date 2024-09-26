

import Image from 'next/image'
import Link from 'next/link';

import { promises as fs } from 'fs';
import router from 'next/router';



export default async function Shops()  {
    const file = await fs.readFile(process.cwd() + '/data/categories.json', 'utf8');
    const data = JSON.parse(file);
    return (
        <div id='Places' className="animate-fadeInAnimation p-6 md:p-20 bg-gradient-to-r from-[#a0b29d] to-[#7ea9b5]  z-10 w-full pt-8 pb-40 overflow-hidden">
        <p className="text-4xl md:text-5xl text-white font-bold text-center mb-4 drop-shadow-md tracking-tight">Τοποθεσίες</p>
            <div className="rounded-md  w-full shadow-md md:shadow-xl  items-center p-2 mb-12">
            <p className="flex items-center text-xl md:text-3xl text-white font-bold mt-8 mb-8 mx-4 md:mx-10 w-full">
            Παραλίες
            <span className="flex-grow h-px bg-white ml-4 mr-20"></span>
            </p>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-y-14 gap-x-0 pb-4'>
                    {data.beaches.map((beach:any) =>(
                     <Link
                     key={beach.id}
                     href={`/more/${beach.id}`}
                     className="group hover:-translate-y-1 hover:scale-[1.01] transition ease-in-out duration-100 cursor-pointer m-4 m-w-20 w-full decoration-green-900 border-radius-4 w-4/5 m-auto px-2 md:px-4"
                   >
                     <div className="relative w-full" style={{ paddingBottom: "72%" }}>
                       <Image
                         className="absolute rounded-md md:rounded-sm inset-0 w-full h-full object-cover group-hover:brightness-[1.06] group-hover:contrast-[1.03]"
                         src={beach.image}
                         alt={beach.title}
                         layout="fill"
                       />
                       <div className="absolute inset-0 flex flex-col justify-start p-0.5 text-white bg-black bg-opacity-15">
                         <p className="text-lg font-bold text-center mb-[46%]">{beach.title}</p>
                         <p className="text-sm text-center mt-1 ">{beach.smallDescription}</p>
                         <p className="text-sm text-center mt-1 ">{beach.region}</p>
                       </div>
                     </div>
                     <button className="rounded-md md:rounded-sm border border-1 border-white relative mx-auto mt-2 flex items-center justify-center px-5 py-2 overflow-hidden text-white transition duration-300 ease-out shadow-md hover:shadow-xl hover:ring-2 hover:ring-[#7ea9b5]">
                       <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#a0b29d] via-[#7ea9b5] to-[#a0b29d]"></span>
                       <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-[#a0b29d] opacity-30 group-hover:rotate-90 ease"></span>
                       <span className="relative text-white text-xs">Μάθε Περισσότερα</span>
                     </button>
                   </Link>
                    ))}
                </div>
            </div> 
            <div className="rounded-md  w-full shadow-md md:shadow-xl  items-center p-2 mb-12">
            <p className="flex items-center text-xl md:text-3xl text-white font-bold mt-8 mb-8 mx-4 md:mx-10 w-full">
            Αξιοθέατα
            <span className="flex-grow h-px bg-white ml-4 mr-20"></span>
            </p>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-y-14 gap-x-0 pb-4'>
                    {data.places.map((beach:any) =>(
                    <Link
                    key={beach.id}
                    href={`/more/${beach.id}`}
                    className="group hover:-translate-y-1 hover:scale-[1.01] transition ease-in-out duration-100 cursor-pointer m-4 m-w-20 w-full decoration-green-900 border-radius-4 w-4/5 m-auto px-2 md:px-4"
                  >
                    <div className="relative w-full" style={{ paddingBottom: "72%" }}>
                      <Image
                        className="absolute rounded-md md:rounded-sm inset-0 w-full h-full object-cover group-hover:brightness-[1.06] group-hover:contrast-[1.03]"
                        src={beach.image}
                        alt={beach.title}
                        layout="fill"
                      />
                      <div className="absolute inset-0 flex flex-col justify-start p-0.5 text-white bg-black bg-opacity-15">
                        <p className="text-lg font-bold text-center mb-[46%]">{beach.title}</p>
                        <p className="text-sm text-center mt-1 ">{beach.smallDescription}</p>
                        <p className="text-sm text-center mt-1 ">{beach.region}</p>
                      </div>
                    </div>
                    <button className="rounded-md md:rounded-sm border border-1 border-white relative mx-auto mt-2 flex items-center justify-center px-5 py-2 overflow-hidden text-white transition duration-300 ease-out shadow-md hover:shadow-xl hover:ring-2 hover:ring-[#7ea9b5]">
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#a0b29d] via-[#7ea9b5] to-[#a0b29d]"></span>
                      <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-[#a0b29d] opacity-30 group-hover:rotate-90 ease"></span>
                      <span className="relative text-white text-xs">Μάθε Περισσότερα</span>
                    </button>
                  </Link>
                    ))}
                </div>
            </div>
        </div>   
    );
};
