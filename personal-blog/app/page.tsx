"use client"
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { yearContent, ValidYear} from "./YearContent";
import './reusable.css';
import DropDownMenu from "./components";
import {FooterPage} from "./footer";
import {SocialBar} from "./socialBar"
import { TextRevealBucketList } from "./components";


export default function Home() {
  const [dropdown, setDropdown] = useState(false); // Declaring a constant dropdown with initial state of false
  const [navbarEffect, setNavbarEffect] = useState(false); // Declaring a constant navbarEffect with initial state of false
  const [selectedYear, setSelectedYear] = useState<ValidYear>("2025"); // Declaring a constant selectedYear with initial state of "2025"
  const recapRef = useRef<HTMLDivElement | null>(null);
  const bucketRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null); 

  useEffect (() => {
    const handleScroll = () => {
      const scrollposition = window.scrollY;
      const triggerpoint = 50;
      
      if (scrollposition > triggerpoint){
        setNavbarEffect(true);
      } else {
        setNavbarEffect(false)
      };
    };

    window.addEventListener('scroll', handleScroll);

    // Clean to ensure no memory leaks
    return () => {
      window.removeEventListener('scroll', handleScroll) 
    }

  }, []);

  return (
    <div className="max-w-screen-lg mx-auto px-5">
      <header className="text-sm z-20 ">
        <nav className="mt-8">
          <div className={`overflow-hidden flex bg-neutral-800 p-2 rounded-lg h-[50px] shadow-sm fixed left-1/2 -translate-x-1/2  z-20 transition-all duration-500 ${
              navbarEffect 
                ? "bg-neutral-800/15 backdrop-blur-lg" 
                : ""}`}>
            {/* {navbarEffect && <div className={`w-full absolute inset-0 h-[100px] backdrop-blur-2xl -z-10 transition-all duration-250${
              navbarEffect 
                ? "opacity-100"
                : "opacity-0"
            }`}></div>}      */}
            <ul className="flex text-nowrap gap-4 px-4 items-center font-Geist font-bold ">
              <a className="text-white  hover:text-gray-600 duration-200 hover:cursor-pointer" onClick={() => {
                aboutRef.current?.scrollIntoView({
                  behavior:"smooth"
                })
              }}>About</a>
              <a className="text-white   hover:text-gray-600 duration-200 hover:cursor-pointer" onClick={() =>{
                recapRef.current?.scrollIntoView({
                  behavior:"smooth"
                })
              }}>Recap</a>
              <a className="text-white   hover:text-gray-600 duration-200 hover:cursor-pointer" onClick={() => {
                bucketRef.current?.scrollIntoView({
                  behavior:"smooth"
                })
              }}>Bucket List</a>
              <div className={`w-[1.2px] bg-neutral-500 h-[20px] duration-500 ${
                navbarEffect
                  ? "bg-white"
                  : ""}`}></div>
              <div className="">
                <div className="flex gap-[4px] items-center group cursor-pointer" onClick={() => {
                  setDropdown(!dropdown);
                }}>
                  <a className={`text-neutral-500  group-hover:text-white duration-200 ${
                    dropdown
                      ? "text-white"
                      : ""}`}>More</a>
                  <svg className= {`group-hover:fill-white fill-neutral-500 pt-[2px] duration-200 origin-center ${
                    dropdown 
                      ? "rotate-180 fill-white origin-center pt-[0px] pb-[2px]"
                      : "rotate-0"
                    } `} width="16" height="16"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                </div>
              </div>
            </ul>
          </div>
          {/* Pemberian dropdown disini mengakibatkan pengaturan margin berdasarkan komponen sebelumnya dalam hal ini yang menjadi acuannya adalah ul (unordered list) */}
          {/* setIsOpen dipake biar kita bisa ngerubah statenya atau nutup dari dalem si komponen DropdownMenu kayak scroll atau klik di luar area yang*/}    
          {dropdown && (
            <div className="relative z-30">
              <DropDownMenu isOpen={dropdown} navbarEffect={navbarEffect} setIsOpen={setDropdown}/>
            </div>
          )}
        </nav>
      </header>
      <div ref={aboutRef} className="pt-32 items-center font-Inter max-w-[30rem] text-left">
      <div>
        <h1 className="font-light text-5xl hover:font-bold hover:tracking-wider inline-block duration-300">Hello!</h1>
        <h2 className="font-semibold pt-2">I am Bagas Noor 🙌 </h2>
        <h1 className=" mt-2 text-sm font-Inter font-semibold text-neutral-500">A sophomore year student in Indonesia</h1>
        <h1 className=" mt-2 text-sm font-Inter font-semibold text-neutral-500">and this is a short story about me</h1>
      </div>
      <p className="text-sm font-mono font-medium pt-4 tracking-wide"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div>
        <SocialBar/>
      </div>
      <div ref={recapRef} className="mt-8 bg-neutral-200 h-[1px] w-auto"></div>
        <div  className="mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedYear}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              exit={{ opacity: 0, x: 50 }}
            >
              {yearContent[selectedYear]}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="text-sm flex justify-start mt-4 gap-2 font-mono">
          <button
          onClick={() => setSelectedYear('2025')}
          className={' font-extrabold hover:shadow-2xl hover:shadow-emerald-700 hover:text-white hover:bg-emerald-700 duration-300 bg-white/30 rounded-2xl px-4 py-2 backdrop-blur-md bg-opacity-70 shadow-xl ring-1 ring-gray-700/20 z-[-0] ${}'}>
            2025  
            <span className="pl-1 text-xs font-normal font-Geist">
               A New Chapter
            </span>
          </button >
          <button
          onClick={() => setSelectedYear('2024')}
          className="font-extrabold hover:shadow-2xl hover:shadow-yellow-400 hover:text-white hover:bg-yellow-400 duration-300 bg-white/30 rounded-2xl px-4 py-2 backdrop-blur-md bg-opacity-70 shadow-xl ring-1 ring-gray-700/20 z-[-0] text-nowrap">
            2024
            <span className="pl-1 text-xs font-normal font-Geist">
               The Unknown
            </span>
          </button >
        </div>
        <div ref={bucketRef} className="mt-8 bg-neutral-200 h-[1px] w-auto"></div>
        <div  className="text-left">
          <h1  className="overflow-hidden mt-8 text-5xl font-Inter font-bold">Bucket List</h1>
          <p className="text-sm text-neutral-500 font-Inter pt-4 text-justify font-semibold">Things that i always wish  would come true.</p>
          <div className="flex mt-10">
            <div className="flex justify-end items-center text-sm font-mono ">
              <ul className="font-semibold">
                <li className="mb-2">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-3">
                      <div className="rounded-[10px] w-[10px] h-[10px] ring-slate-600 ring-1">
                      </div>
                      <div>
                        Get that degree 🎓
                      </div>
                    </div>
                    <p className="inline-block pl-5 font-Inter text-xs text-gray-500">
                        on progress
                    </p>
                  </div>
                </li>
                <li className="mb-2">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-3">
                      <div className="rounded-[10px] w-[10px] h-[10px] ring-slate-600 ring-1">
                      </div>
                      <div>
                        Finish my first personal website
                      </div>
                    </div>
                    <p className="inline-block pl-5 font-Inter text-xs text-gray-500">
                        always work in progress
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-3 mb-2">
                  <div className="rounded-[10px] w-[10px] h-[10px] ring-slate-600 ring-1">
                  </div>
                  <div>
                    Travel to Japan with my family 🎌
                  </div>
                </li>
                <li className="flex items-center gap-3 mb-2">
                  <div className="rounded-[10px] w-[10px] h-[10px] ring-slate-600 ring-1">
                  </div>
                  <div>
                    Travel by my own from Okinawa to Hokkaido 🗾
                  </div>
                </li>
                <li className="flex items-center gap-3 mb-2">
                  <div className="rounded-[10px] w-[10px] h-[10px] ring-slate-600 ring-1">
                  </div>
                  <div>
                    Be able to cook daily 🧑🏻‍🍳
                  </div>
                </li>
                <li className="flex items-center gap-3 mb-2">
                  <div className="rounded-[10px] w-[10px] h-[10px] ring-slate-600 ring-1">
                  </div>
                  <div>
                    Learn AI and other tech related studies 🤖
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 bg-neutral-200 h-[1px] w-auto"></div>
        <div className="text-left">
          <h1 className=" mt-8 text-4xl font-Inter font-bold text-neutral-500">A New Resolution</h1>
          <p className="text-sm text-neutral-500 font-Inter pt-4 text-justify font-semibold">or maybe?</p>
          <p className="text-sm font-mono pt-4 text-justify"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div>
          <FooterPage/>
        </div>
    </div>  
  );
}
