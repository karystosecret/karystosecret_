'use client'


import Image from 'next/image'
import Image1 from '/public/images/DJI_0006-Edit.jpg'
import Image2 from '/public/images/DJI_0012.jpg'
import Image3 from '/public/images/IMG_3670.jpg'
import Image4 from '/public/images/IMGP2159.jpg'
import Image5 from '/public/images/IMGP2307.jpg'

const Shops = () =>  {
    return (
        <div id='Places' className="p-20 bg-gradient-to-r from-[#a0b29d] to-[#7ea9b5]  z-10 w-full">
        <p className="text-4xl text-white font-bold text-center mt-10 mb-4">Τοποθεσίες</p>
            <div className="  w-full shadow-xl  items-center p-2 mb-8">
                <p className="text-2xl text-white font-bold mb-4 mx-10 w-full block">Παραλίες </p>
                <div className='grid grid-cols-3 gap-y-10 gap-x-0'>
                    <div className="hover:opacity-75 cursor-pointer m-8 m-w-20 w-full  decoration-green-900 border-radius-4 w-4/5 m-auto px-10">
                        <p className="text-white center font-bold text-center">Αγία Παρασκευή</p>
                        <Image src={Image2} width={0} height={0} style={{ width: '100%', height: 'auto' }} alt=""></Image>
                        <p className="text-white text-sm center mt-1">Μικρή, οργανωμένη παραλία, με κόσμο.</p>
                        <p className="text-white text-sm center mt-1">3 χλμ. απο το κέντρο.</p>
                        <button className='rounded-md bg-white p-1 px-2 border-radius-3 m-auto block my-2 hover:opacity-75'><a className='text-xs text-black' href="">Άνοιγμα στον χάρτη</a></button>
                    </div>
                    <div className="hover:opacity-75 cursor-pointer m-8 m-w-20 w-full  decoration-green-900 border-radius-4 w-4/5 m-auto px-10">
                        <p className="text-white center font-bold text-center">Κάβος</p>
                        <Image src={Image1} width={0} height={0} style={{ width: '100%', height: 'auto' }} alt=""></Image>
                        <p className="text-white text-sm center mt-1">Μεγάλη, οργανωμένη παραλία, με κόσμο.</p>
                        <p className="text-white text-sm center mt-1">2 χλμ. απο το κέντρο.</p>
                        <button className='rounded-md bg-white p-1 px-2 border-radius-3 m-auto block my-2 hover:opacity-75'><a className='text-xs text-black' href="">Άνοιγμα στον χάρτη</a></button>
                    </div>
                    <div className="hover:opacity-75 cursor-pointer m-8 m-w-20 w-full  decoration-green-900 border-radius-4 w-4/5 m-auto px-10">
                        <p className="text-white center font-bold text-center">Ποτάμι</p>
                        <Image src={Image2} width={0} height={0} style={{ width: '100%', height: 'auto' }} alt=""></Image>
                        <p className="text-white text-sm center mt-1">Μεγάλη παραλία, με λίγο κόσμο.</p>
                        <p className="text-white text-sm center mt-1">5 χλμ. απο το κέντρο.</p>
                        <button className=' rounded-md bg-white p-1 px-2 border-radius-3 m-auto block my-2 hover:opacity-75'><a className='text-xs text-black' href="">Άνοιγμα στον χάρτη</a></button>
                    </div>
                </div>
            </div> 
            <div className="  w-full shadow-xl  items-center p-2 mb-8">
                <p className="text-2xl text-white font-bold mb-4 mx-10 w-full block">Αξιοθέατα </p>
                <div className='grid grid-cols-3 gap-y-10 gap-x-0'>
                    <div className="hover:opacity-75 cursor-pointer m-8 m-w-20 w-full  decoration-green-900 border-radius-4 w-4/5 m-auto px-10">
                        <p className="text-white center font-bold text-center">Δρακόσπιτα</p>
                        <Image src={Image3} width={0} height={0} style={{ width: '100%', height: 'auto' }} alt=""></Image>
                        <p className="text-white text-sm center mt-1">Μεγαλιθικά λατρευτικά κτίσματα στη νότια Εύβοια.</p>
                        <p className="text-white text-sm center mt-1">Βρίσκονται κοντά στα Στύρα, την Κάρυστο, και την κορυφή της Όχης.</p>
                        <button className='rounded-md bg-white p-1 px-2 border-radius-3 m-auto block my-2 hover:opacity-75'><a className='text-xs text-black' href="">Άνοιγμα στον χάρτη</a></button>
                    </div>
                    <div className="hover:opacity-75 cursor-pointer m-8 m-w-20 w-full  decoration-green-900 border-radius-4 w-4/5 m-auto px-10">
                        <p className="text-white center font-bold text-center">Φαράγγι Δημοσάρι</p>
                        <Image src={Image4} width={0} height={0} style={{ width: '100%', height: 'auto' }} alt=""></Image>
                        <p className="text-white text-sm center mt-1">Το ρέμα του Δημόσαρη διασχίζει ένα καταπράσινο φαράγγι στην καρδιά της άγριας ορεινής περιοχής.</p>
                        <p className="text-white text-sm center mt-1">Βρισκεται στην Βορειοανατολική πλευρά της Όχης.</p>
                        <button className='rounded-md bg-white p-1 px-2 border-radius-3 m-auto block my-2 hover:opacity-75'><a className='text-xs text-black' href="">Άνοιγμα στον χάρτη</a></button>
                    </div>
                    <div className="hover:opacity-75 cursor-pointer m-8 m-w-20 w-full  decoration-green-900 border-radius-4 w-4/5 m-auto px-10">
                        <p className="text-white center font-bold text-center">Castello Rosso</p>
                        <Image src={Image5} width={0} height={0} style={{ width: '100%', height: 'auto' }} alt=""></Image>
                        <p className="text-white text-sm center mt-1">Μεσαιωνικό κάστρο</p>
                        <p className="text-white text-sm center mt-1">Δεσπόζει στους πρόποδες της Όχης.</p>
                        <button className='rounded-md bg-white p-1 px-2 border-radius-3 m-auto block my-2 hover:opacity-75'><a className='text-xs text-black' href="">Άνοιγμα στον χάρτη</a></button>
                    </div>
                </div>
            </div> 
        </div>   
    );
};

export default Shops;