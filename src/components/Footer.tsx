import React from "react";
import Image from 'next/image'
import Link from "next/link";
import logoImage from '/public/icons/logo.png'
import { TfiAlignJustify } from "react-icons/tfi";



const Header = () =>  {
    return (
        <div className="bg-white z-20 h-100 w-full border-b-0 shadow-md  items-center px-4">
            <Link className=" w-fit hover:opacity-75 m-auto" href={"/"}>
                <Image className="m-auto p-8" layout="intrinsic" src={logoImage} width={320} height={160} alt=""/>
            </Link>
            <Link className="hover:opacity-75 m-auto" href={"/"}><p className="mt-4 text-center text-sm text-black">Πολιτική Cookies</p></Link>
            <p className="mt-8 text-center text-sm text-black">Επικοινωνία:</p>
            <p className="mt-1 text-center text-sm text-black">karystosecret@gmail.com</p>
            <p className="m-auto text-sm text-center text-[#7ea9b5] w-full mt-14 ">© KARYSTOSECRET - All Rights Reserved</p>
        </div>    
    );
};

export default Header;