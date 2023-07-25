"use client";
import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
  const [status, setStatus] = useState(false);

  const links = [
    { label: "Home", target: "/" },
    { label: "About", target: "/about" }
  ];

  return (
    <div className="transition-all duration-500">
      <div onClick={() => setStatus(!status)} className="z-50 fixed top-6 right-6 rounded-full h-16 w-16 flex flex-col gap-2 justify-center items-center cursor-pointer">
        <div className={status === false ? "bg-[#313030] h-[3px] w-6 -translate-x-2 transition-all duration-500" : "bg-white h-[3px] w-6 translate-y-[5.5px] rotate-45 transition-all duration-500"}></div>
        <div className={status === false ? "bg-[#313030] h-[3px] w-6 translate-x-2 transition-all duration-500" : "bg-white h-[3px] w-6 -translate-y-[5.5px] -rotate-45 transition-all duration-500"}></div>
      </div>
      <div className={status === false ? "bg-[#313030] flex items-center justify-center fixed right-0 w-full h-full max-w-xl translate-x-full transition-all duration-500" : "bg-[#313030] flex items-center justify-center fixed right-0 w-full h-full max-w-xl translate-x-0 transition-all duration-500"}>
        <div className="w-3/4 h-2/3 flex flex-col text-white transition-all duration-500">
          <div className="flex-grow">
            <div className="flex flex-col group">
              {links.map((link) => (
                <Link href={link.target}><p className="py-2 text-5xl group-hover:opacity-50 hover:!opacity-100 hover:translate-x-4 transition-all duration-500" key={link.label}>
                  {link.label}
                </p></Link>
              ))}
            </div>
          </div>
          <div>footer</div>
        </div>
      </div>
    </div>
  )
}