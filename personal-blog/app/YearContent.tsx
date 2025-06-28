import React, { JSX } from "react";
import  {motion, AnimatePresence }  from "framer-motion";


export type ValidYear = "2025" | "2024"; //Typescript really need things to be specific

// Record <K, V> k = Key, V = value
export const yearContent : Record<ValidYear, JSX.Element> = {
    "2025": ( 
        <div id="2025-container" className="text-left">
            <div className="relative ">
                <video autoPlay muted loop preload="auto" className="w-full h-[400px] object-cover z-0 rounded-3xl rounded-b-none">
                    <source src="/frieren-sousou-no-frieren.mp4" type="video/mp4"></source>
                </video>
                <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-b from-transparent via-white/35 to-white z-0" />
                <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-b from-transparent via-white/35 to-white z-0" />
            </div> 
            <div className="relative group tracking-wide -mt-[8px] z-10">
                <h1 className=" duration-200 text-4xl font-Inter font-bold text-neutral-500">A New Chapter</h1>
                <div className="flex justify-between">
                    <p id="2025" className="text-sm text-neutral-500 font-Inter pt-4 text-justify font-extralight">Part 1</p>
                    <p className="text-sm text-neutral-500 font-Inter pt-4 text-justify font-extralight">2025</p>
                </div>
                <p className="duration-200  text-sm font-mono pt-4 text-justify"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> 
            </div>
        </div>
    ),
    "2024": (
        <div id="2024-container" className="text-left">
            <div className="relative">
                <video autoPlay muted loop preload="auto" className="bg-gradient-to-b from-current to-transparent w-full h-[400px] object-cover rounded-2xl rounded-b-none">
                    <source src="/himmel.mp4" type="video/mp4"></source>
                </video>
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-b from-transparent via-white/35 to-white" />
                <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-b from-transparent via-white/35 to-white" />
            </div>
            <div className="relative group tracking-wide -mt-[8px] z-10">
                <h1 className="duration-200 text-4xl font-Inter font-bold text-neutral-500">The Unknown</h1>
                <div className="flex justify-between">
                    <p id="2024" className="text-sm text-neutral-500 font-Inter pt-4 text-justify font-extralight">Part 1</p>
                    <p className="text-sm text-neutral-500 font-Inter pt-4 text-justify font-extralight">2024</p>
                </div>
                <p className="duration-200  text-sm font-mono pt-4 text-justify"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div> 
    </div>
    )
}