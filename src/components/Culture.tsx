

import Image from 'next/image'
import Link from 'next/link';

import { promises as fs } from 'fs';
import router from 'next/router';


export default async function  Shops()  {
    const file = await fs.readFile(process.cwd() + '/data/categories2.json', 'utf8');
    const data = JSON.parse(file);
    return (
        <div id='Places' className="animate-fadeInAnimation p-4 md:p-20 bg-gradient-to-r from-[#a0b29d] to-[#7ea9b5]  z-10 w-full md:pt-8 pb-40 overflow-hidden">
        <p className="text-4xl md:text-5xl text-white font-bold text-center mb-8 md:mb-4 drop-shadow-md tracking-tight">Τοπική Κουλτούρα</p> 
            <div className="rounded-md  w-full shadow-md md:shadow-xl  items-center p-2 mb-8 bg-white bg-opacity-5">
            <p className="flex items-center text-xl md:text-3xl text-white font-bold mt-2 mb-6 md:mt-4 md:mb-8 mx-4 md:mx-10 w-full">
            Τοπικά Προϊόντα
            <span className="flex-grow h-px bg-white ml-4 mr-20"></span>
            </p>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-0 pb-4'>
                    {data.products.map((beach:any) =>(
                     <Link
                     key={beach.id}
                     href={`/more/${beach.id}`}
                     className="group hover:-translate-y-1 hover:scale-[1.01] transition ease-in-out duration-100 cursor-pointer m-4 m-w-20 w-full decoration-green-900 border-radius-4 w-4/5 m-auto px-2 md:px-4"
                   >
                     <div className="relative w-full" style={{ paddingBottom: "56%" }}>
                       <Image
                         className=" absolute rounded-md  inset-0 w-full h-full object-cover group-hover:brightness-[1.06] group-hover:contrast-[1.03]"
                         src={beach.image}
                         alt={beach.title}
                         layout="fill"
                       />
                       <div className='z-20 absolute w-full  h-full backdrop-filter bg-[#a0b29d] bg-opacity-10 rounded-md'></div>
                       <div className="absolute inset-0 flex flex-col justify-start text-white ">
                         <p className="p-1 text-xs font-semibold text-center mb-[42%] drop-shadow-lg border-b bg-[#3b5961] bg-opacity-55 rounded-md backdrop-blur-[1px]">{beach.title}</p>
                         <p className="text-[0.6rem] text-center drop-shadow-lg">{beach.smallDescription}</p>
                       </div>
                     </div>
                     <button className="rounded-md  border border-1 border-white relative mx-auto mt-1 flex items-center justify-center w-full py-1 overflow-hidden text-white transition duration-300 ease-out hover:shadow-xl hover:ring-2 hover:ring-[#7ea9b5]">
                       <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#a0b29d] via-[#7ea9b5] to-[#a0b29d]"></span>
                       <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-[#a0b29d] opacity-30 group-hover:rotate-90 ease"></span>
                       <span className="relative text-white text-xs">Άνοιγμα</span>
                     </button>
                   </Link>
                    ))}
                </div>
            </div> 
            <div className="rounded-md  w-full shadow-md md:shadow-xl  items-center p-2 mb-8 bg-white bg-opacity-5">
            <p className="flex items-center text-xl md:text-3xl text-white font-bold mt-2 mb-6 md:mt-4 md:mb-8 mx-4 md:mx-10 w-full">
            Αθλητισμός
            <span className="flex-grow h-px bg-white ml-4 mr-20"></span>
            </p>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-0 pb-4'>
                {data.sports.map((beach: any) => (
        <Link
        key={beach.id}
        href={`/more/${beach.id}`}
        className="group hover:-translate-y-1 hover:scale-[1.01] transition ease-in-out duration-100 cursor-pointer m-4 m-w-20 w-full decoration-green-900 border-radius-4 w-4/5 m-auto px-2 md:px-4"
      >
        <div className="relative w-full" style={{ paddingBottom: "56%" }}>
          <Image
            className="absolute rounded-md  inset-0 w-full h-full object-cover group-hover:brightness-[1.06] group-hover:contrast-[1.03]"
            src={beach.image}
            alt={beach.title}
            layout="fill"
          />
          <div className='z-20 absolute w-full  h-full backdrop-filter bg-[#a0b29d] bg-opacity-10 rounded-md'></div>
          <div className="absolute inset-0 flex flex-col justify-start text-white ">
            <p className="p-1 text-xs font-semibold text-center mb-[42%] drop-shadow-lg border-b bg-[#3b5961] bg-opacity-55 rounded-md backdrop-blur-[1px]">{beach.title}</p>
            <p className="text-[0.6rem] text-center drop-shadow-lg">{beach.smallDescription}</p>
          </div>
        </div>
        <button className="rounded-md  border border-1 border-white relative mx-auto mt-1 flex items-center justify-center w-full py-1 overflow-hidden text-white transition duration-300 ease-out hover:shadow-xl hover:ring-2 hover:ring-[#7ea9b5]">
          <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#a0b29d] via-[#7ea9b5] to-[#a0b29d]"></span>
          <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-[#a0b29d] opacity-30 group-hover:rotate-90 ease"></span>
          <span className="relative text-white text-xs">Άνοιγμα</span>
        </button>
      </Link>
      ))}
                </div>
            </div>
          
        </div>   
    );
};
