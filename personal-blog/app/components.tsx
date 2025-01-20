import { motion, AnimatePresence } from "framer-motion";

interface DropdownMenuProps { // defining the required parameter for the sake if Typescript
    isOpen: boolean;
    navbarEffect: boolean;
}

export default function DropDownMenu ({ isOpen, navbarEffect }: DropdownMenuProps){ // Typescript destructuring method and matching prop
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                initial={{ opacity: 0}}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0}}
                 className="fixed left-1/2 -translate-x-1/2 mt-[50px] z-10">
                    <div className={`p-[8px] flex justify-center items-center gap-[8px] bg-neutral-800 w-max rounded-2xl transition-all duration-1000  ${
                        navbarEffect
                        ? "" 
                        : ""
                    }`}>
                        <div className="relative overflow-hidden rounded-xl group cursor-pointer">
                            <video autoPlay muted loop className="group-hover:scale-125 group-hover:opacity-75  group-hover:blur-md w-[300px] h-[200px] object-cover rounded-xl overflow-hidden duration-200 opacity-60 relative">
                                <source src="/frieren-2.mp4" type="video/mp4"></source>
                            </video>
                            <p className="absolute left-[15px] bottom-[80px] w-[30px] text-white font-Inter font-semibold group-hover:underline">Tributes</p>
                            <p className="absolute left-[15px] bottom-[10px] w-[200px] text-wrap text-neutral-200 font-Inter font-normal text-justify text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                        <div className="group relative overflow-hidden rounded-xl cursor-pointer">
                            <video autoPlay muted loop className="group-hover:scale-125 group-hover:opacity-75  group-hover:blur-md w-[300px] h-[200px] object-cover rounded-xl overflow-hidden duration-200 opacity-60 relative">
                                <source src="/steps.mp4" type="video/mp4"></source>                         
                            </video>
                            <p className="absolute left-[335px] bottom-[90px] w-[30px] text-white font-Inter font-semibold text-nowrap">What To Expect</p>
                            <p className="absolute left-[15px] bottom-[80px] w-[30px] text-white font-Inter font-semibold group-hover:underline">Steps</p>
                            <p className="absolute left-[15px] bottom-[10px] w-[200px] text-wrap text-neutral-200 font-Inter font-normal text-justify text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

