"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/logo.png";

const index = () => {
  return (
    <>
      <nav className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-20 relative">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image className="h-full w-44" src={Logo} alt="Logo" />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/home">
                  <li className=" hover:text-[rgb(245,197,76)] px-3 py-2 text-xs font-medium list-none">
                    HOME
                  </li>
                </Link>
                <Link href="/home">
                  <li className=" hover:text-[rgb(245,197,76)] px-3 py-2 text-xs font-medium list-none">
                    OUR SERVICES
                  </li>
                </Link>
                <Link href="/home">
                  <li className="hover:text-[rgb(245,197,76)] px-3 py-2 text-xs font-medium list-none">
                    ABOUT US
                  </li>
                </Link>
                <Link href="/home">
                  <li className="hover:text-[rgb(245,197,76)] px-3 py-2 text-xs font-medium list-none">
                    BLOG
                  </li>
                </Link>
                <Link href="/home">
                  <li className="hover:text-[rgb(245,197,76)] px-3 py-2 text-xs font-medium list-none">
                    PORTFOLIO
                  </li>
                </Link>
                <Link href="/home">
                  <li className="hover:text-[rgb(245,197,76)] px-3 py-2 text-xs font-medium list-none">
                    FAQ
                  </li>
                </Link>
                <Link href="/home">
                  <li className="hover:text-[rgb(245,197,76)] px-3 py-2 text-xs font-medium list-none">
                    CONTACT US
                  </li>
                </Link>
              </div>
            </div>
            <button className="bg-transparent font-medium absolute right-5 text-sm hover:bg-[rgb(245,197,76)] hover:text-white py-2 px-4 border border-gray-100 hover:border-transparent rounded">
              BOOK A CALL
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default index;
