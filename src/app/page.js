"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export default function Home() {
  return (
    <main className="min-h-screen min-w-screen flex flex-col items-center justify-between bg-black relative overflow-hidden">
      <div className="cloud absolute z-0 w-full h-full"></div>
      <div className="container absolute z-0"></div>
      <div className="fix w-full flex justify-between items-center px-[41px] py-[38px] z-10">
        <Link href={"/"}>
          <Image
            src="/4.png"
            width={159}
            height={22.68}
            alt="logo"
            className=""
          />
        </Link>
        <div className="flex justify-between items-center gap-[47px] uppercase">
          <div className="text-[16px] text-white leading-8 font-gohu14">
            {"about"}
          </div>
          <div className="text-[16px] text-white leading-8 font-gohu14">
            {"points"}
          </div>
          <div className="text-[16px] text-white leading-8 font-gohu14">
            {"waitlist"}
          </div>
        </div>
      </div>
      {/* <div className="flex flex-row justify-between items-center ">
        <div className="min-w-1/2"></div>
        <div className="z-0 min-w-1/2 flex flex-col justify-end items-center ">
          <div className="text-[48px] font-normal leading-[64px] text-white font-pixeboy">
            {"gamble for free"}
          </div>
          <div className="text-[64px] font-normal leading-[64px] text-[#4AF5D3] font-pixeboy">
            {"earn points"}
          </div>
          <div>
            <div className="flex flex-row items-center gap-4 ">
              <Image src="/3.png" width={18} height={18} alt="logo" />
              <div className="text-[18px] font-medium leading-8 text-left text-white font-gohu14">
                Click LAUNCH APP
              </div>
            </div>
            <div className="flex flex-row items-center gap-4">
              <Image src="/3.png" width={18} height={18} alt="logo" />
              <div className="text-[18px] font-medium leading-8 text-left text-white font-gohu14">
                Connect your wallet
              </div>
            </div>
            <div className="flex flex-row items-center gap-4">
              <Image src="/3.png" width={18} height={18} alt="logo" />
              <div className="text-[18px] font-medium leading-8 text-left text-white font-gohu14">
                Enter your invite code
              </div>
            </div>
          </div>
          <div className="w-full flex flex-row mt-[25px] justify-around items-center uppercase">
            <div className="border border-[#4AF5D3] rounded-[6px] bg-[#4AF5D340] text-white px-[25px] py-[12px] text-[12px] font-medium leading-4 text-center font-gohu14">
              launch app
            </div>

            <div className="border border-[#410DFF] rounded-[6px] bg-[#410DFF40] text-white px-[25px] py-[12px] text-[12px] font-medium leading-4 text-center font-gohu14">
              learn more
            </div>
          </div>
        </div>
      </div> */}

      <div className="flex h-screen w-full -mt-[400px]">
        <div className="w-0 sm:w-1/2"></div>
        <div className="w-full sm:w-1/2 flex items-center justify-center">
          <div className="z-0 min-w-1/2 flex flex-col justify-end items-center ">
            <div className="text-[48px] font-normal leading-[64px] text-white font-pixeboy">
              {"gamble for free"}
            </div>
            <div className="text-[64px] font-normal leading-[64px] text-[#4AF5D3] font-pixeboy">
              {"earn points"}
            </div>
            <div>
              <div className="flex flex-row items-center gap-4 ">
                <Image src="/3.png" width={18} height={18} alt="logo" />
                <div className="text-[18px] font-medium leading-8 text-left text-white font-gohu14">
                  Click LAUNCH APP
                </div>
              </div>
              <div className="flex flex-row items-center gap-4">
                <Image src="/3.png" width={18} height={18} alt="logo" />
                <div className="text-[18px] font-medium leading-8 text-left text-white font-gohu14">
                  Connect your wallet
                </div>
              </div>
              <div className="flex flex-row items-center gap-4">
                <Image src="/3.png" width={18} height={18} alt="logo" />
                <div className="text-[18px] font-medium leading-8 text-left text-white font-gohu14">
                  Enter your invite code
                </div>
              </div>
            </div>
            <div className="w-full flex flex-row mt-[25px] justify-around items-center uppercase">
              <div className="border border-[#4AF5D3] rounded-[6px] bg-[#4AF5D340] text-white px-[25px] py-[12px] text-[12px] font-medium leading-4 text-center font-gohu14">
                launch app
              </div>

              <div className="border border-[#410DFF] rounded-[6px] bg-[#410DFF40] text-white px-[25px] py-[12px] text-[12px] font-medium leading-4 text-center font-gohu14">
                learn more
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
