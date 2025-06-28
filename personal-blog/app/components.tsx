import { motion, AnimatePresence, px } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface DropdownMenuProps { // defining the required parameter for the sake of Typescript
    isOpen: boolean;
    navbarEffect: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export default function DropDownMenu({ isOpen, setIsOpen }: DropdownMenuProps) {
    const SCROLL_THRESHOLD_PX = 30;
    
    useEffect(() => {
        function handleScroll() {
            const scrollposition = window.scrollY;
            if (scrollposition > SCROLL_THRESHOLD_PX){
                setIsOpen(false);
            }
        }

        document.addEventListener("scroll", handleScroll);

        return () => { document.removeEventListener("scroll", handleScroll)};
        
    }, [setIsOpen]);

    // Kenapa komponen dalamnya bisa langsung berada di tengah tanpa adanya intervensi flexbox seperti justify-space-between? karena sebenarnya dalam div utama sudah ada styling fixed left-1/2 -translate-x-1/2 sehingga komponen secara langsung ditengahkan

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                exit={{ opacity: 0}}
                initial={{ opacity: 0}}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, ease:"easeInOut"}}
                className="fixed left-1/2 -translate-x-1/2 mt-[55px]"> 
                    <div className="p-[8px] flex gap-[8px] bg-neutral-800 w-max rounded-2xl transition-all duration-1000
                    ">
                        <div className="relative overflow-hidden rounded-xl group cursor-pointer">
                            <img
                                src="/tribute.gif"
                                className="group-hover:scale-125 group-hover:opacity-75 group-hover:blur-md w-[300px] h-[200px] object-cover rounded-xl overflow-hidden duration-200 opacity-80 relative"
                            />
                            <p className="absolute left-[15px] bottom-[80px] w-[30px] text-white font-Inter font-semibold group-hover:underline">Tributes</p>
                            <p className="absolute left-[15px] bottom-[10px] w-[200px] text-wrap text-neutral-200 font-Inter font-normal text-justify text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                        <div className="relative overflow-hidden rounded-xl group cursor-pointer">
                            <img
                                src="/steps.gif"
                                className="group-hover:scale-125 group-hover:opacity-75 group-hover:blur-md w-[300px] h-[200px] object-cover rounded-xl overflow-hidden duration-200 opacity-80 relative"
                            />
                            <p className="absolute left-[15px] bottom-[80px] w-[30px] text-white font-Inter text-nowrap font-semibold group-hover:underline">Next Step</p>
                            <p className="absolute left-[15px] bottom-[10px] w-[200px] text-wrap text-neutral-200 font-Inter font-normal text-justify text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

