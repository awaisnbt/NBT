"use client";
import React from "react";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { BiEnvelope } from "react-icons/bi";

const index = () => {
  return (
    <>
      <div className="w-full h-12 px-11 m-auto lg:flex sm:flex justify-between items-center lg:flex-row flex-col hidden">
        <div className="w-80 h-full flex items-center"> 
          <div className="Number h-3/4 w-1/2  flex items-center">
            <div className="h-6 w-6 bg-[rgb(245,197,76)] rounded-full flex items-center justify-center">
              <BsFillTelephoneOutboundFill className="text-white text-xs rotate-12" />
            </div>
            <p className="text-xs ml-2">+97145579184</p>
          </div>
          <div className="Number h-3/4 w-1/2  flex items-center ml-3">
            <div className="h-6 w-6 bg-[rgb(245,197,76)] rounded-full flex items-center justify-center">
              <BiEnvelope className="text-white text-xs " />
            </div>
            <p className="text-xs ml-2">NEWSLETTER</p>
          </div>
        </div>
        <div className="Number h-3/4 w-96 flex justify-center items-center text-xs text-gray-500">
          Empowering businesses with cutting-edge technology solutions.
        </div>
      </div>
      <hr className="h-0.5 w-[92.5%] bg-gray-200 m-auto" />
    </>
  );
};

export default index;
