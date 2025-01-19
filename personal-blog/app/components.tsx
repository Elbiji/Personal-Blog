import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface DropdownMenuProps { // defining the required parameter for the sake if Typescript
    isOpen: boolean;
}

export default function DropDownMenu ({ isOpen }: DropdownMenuProps){ // Typescript destructuring method and matching prop
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                 className="flex absolute left-1/2 -translate-x-1/2 mt-[50px] bg-neutral-800/80 backdrop-blur-md  w-[600px] h-[300px] rounded-lg items-center justify-between">
                    
                </motion.div>
            )}
        </AnimatePresence>
    )
}