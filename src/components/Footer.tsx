import React from "react";
import Image from 'next/image'
import Link from "next/link";
import logoImage from '/public/icons/logofnl.png'
import { TfiAlignJustify } from "react-icons/tfi";



const Header = () =>  {
    return (
        <div className="bg-gradient-to-r from-[#e2e8e2] to-[#d8e5e9] bg-brightness-90 z-20 h-100 w-full border-b-0 shadow-inner items-center px-4">
            <Link className="pointer-events-none w-fit m-auto" href={"/"}>
                <Image className="m-auto p-12 pointer-events-none" layout="intrinsic" src={logoImage} width={300} height={150} alt=""/>
            </Link>
            <Link className="m-auto" href={"/"}><p className="hover:underline mt-2 text-center text-sm text-black">Πολιτική Cookies</p></Link>
            <p className="mt-8 text-center text-sm text-[#a0b29d]">Επικοινωνία:</p>
            <p className="text-center text-sm text-[#a0b29d]">karystosecret@gmail.com</p>
            <p className="m-auto text-sm text-center text-[#7ea9b5] w-full mt-14 ">© KARYSTOSECRET - All Rights Reserved</p>
        </div>    
    );
};

export default Header;