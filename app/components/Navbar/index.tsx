"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/logo.png";
import { BiMenu } from "react-icons/bi";

const index = () => {

//  States  ***

const [Sidebar , setsidebar] = useState("-left-full")


//  ***

//////////////////////////

//  Functions  ***

  const handleNav = ()=>{
    setsidebar("left-0")
  }

//  ***



//////////////////////////

//  useEffects  ***

// useEffect(()=>{
//     console.log(Sidebar);
    
// },[Sidebar])

//  ***







  return (
    <>
      <nav className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center sm:justify-center justify-end lg:justify-start  h-20 relative">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image className="h-full w-44" src={Logo} alt="Logo" />
              </Link>
            </div>
            <div className="icons md:hidden absolute left-0 visible">
                <BiMenu onClick={handleNav} className="text-[30px] text-gray-500" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/home">
                  <li className=" hover:text-[rgb(245,197,76)] px-3 py-2 text-xs font-medium list-none transition-all duration-150">
                    HOME
                  </li>
                </Link>
                <Link href="/services">
                  <li className=" hover:text-[rgb(245,197,76)] px-3 py-2 text-xs font-medium list-none transition-all duration-150">
                    OUR SERVICES
                  </li>
                </Link>
                <Link href="/about">
                  <li className="hover:text-[rgb(245,197,76)] px-3 py-2 text-xs font-medium list-none transition-all duration-150">
                    ABOUT US
                  </li>
                </Link>
                <Link href="/blog">
                  <li className="hover:text-[rgb(245,197,76)] px-3 py-2 text-xs font-medium list-none transition-all duration-150">
                    BLOG
                  </li>
                </Link>
                <Link href="/portfolio">
                  <li className="hover:text-[rgb(245,197,76)] px-3 py-2 text-xs font-medium list-none transition-all duration-150">
                    PORTFOLIO
                  </li>
                </Link>
                <Link href="/faq">
                  <li className="hover:text-[rgb(245,197,76)] px-3 py-2 text-xs font-medium list-none transition-all duration-150">
                    FAQ
                  </li>
                </Link>
                <Link href="/contact">
                  <li className="hover:text-[rgb(245,197,76)] px-3 py-2 text-xs font-medium list-none transition-all duration-150">
                    CONTACT US
                  </li>
                </Link>
              </div>
            </div>
            <button className="bg-transparent transition-all duration-150 lg:block md:hidden sm:block hidden font-medium absolute right-3 text-sm hover:bg-[rgb(245,197,76)] hover:text-white py-2 px-4 border border-gray-100 hover:border-transparent rounded">
              BOOK A CALL
            </button>
          </div>
        </div>
        <div className={` h-screen w-full bg-yellow-400 fixed top-0 ${Sidebar}`}>

        </div>
      </nav>
     
    </>
  );
};

export default index;
