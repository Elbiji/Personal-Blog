import { motion, AnimatePresence, px } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface DropdownMenuProps { // defining the required parameter for the sake of Typescript
    isOpen: boolean;
    navbarEffect: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export default function DropDownMenu({ isOpen, setIsOpen }: DropdownMenuProps) {
    const SCROLL_THRESHOLD_PX = 30;
    const [width, setWidth] = useState(window.innerWidth);
    const [isClosing, setIsClosing] = useState(false);
    
    useEffect(() => {
        function handleScroll() {
            const scrollposition = window.scrollY;
            if (scrollposition > SCROLL_THRESHOLD_PX){
                setIsClosing(true);

                setTimeout(() => {
                    setIsOpen(false);
                    setIsClosing(false);
                }, 200);
            }
        }

        document.addEventListener("scroll", handleScroll);

        return () => { document.removeEventListener("scroll", handleScroll)};
        
    }, [setIsOpen]);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        }
        
        window.addEventListener('resize', handleResize);

        return () => {
            removeEventListener('resize', handleResize);
        }
    })

    // Kenapa komponen dalamnya bisa langsung berada di tengah tanpa adanya intervensi flexbox seperti justify-space-between? karena sebenarnya dalam div utama sudah ada styling fixed left-1/2 -translate-x-1/2 sehingga komponen secara langsung ditengahkan

    return (
        <AnimatePresence>
            {isOpen && width > 20000 ? (
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
            ) : (
                <motion.div
                exit={{ opacity: 0}}
                initial={{ opacity: 0}}
                animate={{ opacity: isClosing ? 0 : 1 }}
                transition={{ duration: 0.3, ease:"easeInOut"}}
                className="fixed left-1/2 -translate-x-1/2 mt-[55px]"> 
                    <div className="p-[4px] inset-0 flex gap-[4px] bg-neutral-800 w-max rounded-2xl transition-all  duration-1000 shadow-xl">
                        <div className="flex p-[2px] bg-neutral-700 rounded-[0.90rem] group hover:bg-neutral-600 duration-500 cursor-pointer">
                            <div className="flex gap-[8px] w-[200px]">
                                <div className="p-2 bg-neutral-800 rounded-xl border-solid border-2 border-neutral-500 bg-gradient-to-br from-neutral-700 via-neutral-6from-neutral-700 to-neutral-800">
                                    <svg className="fill-white duration-300 group-hover:scale-125 group-hover:rotate-12" width="24" height="24"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                        <path d="M4.1 38.2L106.4 191.5c11.2-11.6 23.7-21.9 37.3-30.6L68.4 48l64.5 0 54.9 91.5c15.8-5.5 32.4-9.1 49.6-10.6l-6.1-10.1L169.3 15.5C163.5 5.9 153.1 0 141.9 0L24.6 0C11 0 0 11 0 24.6c0 4.8 1.4 9.6 4.1 13.6zm276.6 80.5l-6.1 10.1c17.2 1.5 33.8 5.2 49.6 10.6L379.2 48l64.5 0L368.4 160.9c13.6 8.7 26.1 19 37.3 30.6L507.9 38.2c2.7-4 4.1-8.8 4.1-13.6C512 11 501 0 487.4 0L370.1 0c-11.2 0-21.7 5.9-27.4 15.5L280.8 118.7zM256 208a128 128 0 1 1 0 256 128 128 0 1 1 0-256zm0 304a176 176 0 1 0 0-352 176 176 0 1 0 0 352zm7.2-257.5c-2.9-5.9-11.4-5.9-14.3 0l-19.2 38.9c-1.2 2.4-3.4 4-6 4.4L180.7 304c-6.6 1-9.2 9-4.4 13.6l31 30.2c1.9 1.8 2.7 4.5 2.3 7.1l-7.3 42.7c-1.1 6.5 5.7 11.5 11.6 8.4L252.3 386c2.3-1.2 5.1-1.2 7.4 0l38.4 20.2c5.9 3.1 12.7-1.9 11.6-8.4L302.4 355c-.4-2.6 .4-5.2 2.3-7.1l31-30.2c4.7-4.6 2.1-12.7-4.4-13.6l-42.9-6.2c-2.6-.4-4.9-2-6-4.4l-19.2-38.9z"/>
                                    </svg>
                                </div>
                                <div className="flex-col">
                                    <p className="text-white font-Inter font-semibold group-hover:underline">Tributes</p>
                                    <p className="text-wrap text-neutral-200 font-Inter font-normal text-justify text-xs">Inspiration of this blog</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex p-[4px] bg-neutral-700 rounded-[0.90rem] group cursor-pointer hover:bg-neutral-600 duration-500">
                            <div className="flex gap-[8px] w-[200px]">
                                <div className="p-2 bg-neutral-800 rounded-xl border-solid border-2 border-neutral-500 bg-gradient-to-br from-neutral-700 via-neutral-6from-neutral-700 to-neutral-800">
                                    <svg className="fill-white duration-300 group-hover:scale-125 group-hover:-rotate-12" width="24" height="24"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                        <path d="M384 64c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0 0 96c0 17.7-14.3 32-32 32l-96 0 0 96c0 17.7-14.3 32-32 32l-96 0 0 96c0 17.7-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l96 0 0-96c0-17.7 14.3-32 32-32l96 0 0-96c0-17.7 14.3-32 32-32l96 0 0-96z"/>
                                    </svg>
                                </div>
                                <div className="flex-col">
                                    <p className="text-white font-Inter font-semibold group-hover:underline">Next Step</p>
                                    <p className="text-wrap text-neutral-200 font-Inter font-normal text-justify text-xs">What to do next?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

