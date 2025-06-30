import React, { useEffect, useState } from "react";
import recapRef from "./page"

function responsiveNavbar(){
    const [width, setWidth] = useState(window.innerWidth);
    const [navbarEffect, setNavbarEffect] = useState(false);

    useEffect (() => {
        const handleWidth = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWidth);

        return () => {
            window.removeEventListener('resize', handleWidth);
        };
    }, [])

    return (
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
                      <div className="w-[1.2px] bg-neutral-500 h-[20px]"></div>
                      <div className="">
                        <div className="flex gap-[4px] items-center group cursor-pointer" onClick={() => {
                          setDropdown(!dropdown);
                        }}>
                          <a className="text-neutral-500  group-hover:text-white duration-200">More</a>
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
    )
}