import React, { JSX } from "react";

export type ValidYear = "2025" | "2024";

export const yearContent : Record<ValidYear, JSX.Element> = {
    "2025": (
        <div id="2025-container" className="text-left group">
            <h1 className="duration-200 group-hover:font-extralight group-hover:text-sm mt-8 text-4xl font-Inter font-bold text-neutral-500">A New Chapter</h1>
            <div className="flex justify-between">
                <p id="2025" className="text-sm  group-hover:text-sm group-hover:font-bold duration-200 text-neutral-500 font-Inter pt-4 text-justify font-extralight">Part 1</p>
                <p className="text-sm  group-hover:text-sm group-hover:font-bold duration-200 text-neutral-500 font-Inter pt-4 text-justify font-extralight">2025</p>
            </div>
            <p className="duration-200 group-hover:text-lg text-sm font-mono pt-4 text-justify"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    ),
    "2024": (
        <div id="2024-container" className="text-left group">
        <h1 className="duration-200 group-hover:font-extralight group-hover:text-sm mt-8 text-4xl font-Inter font-bold text-neutral-500">The Unknown</h1>
        <div className="flex justify-between">
            <p id="2024" className="text-sm  group-hover:text-sm group-hover:font-bold duration-200 text-neutral-500 font-Inter pt-4 text-justify font-extralight">Part 1</p>
            <p className="text-sm  group-hover:text-sm group-hover:font-bold duration-200 text-neutral-500 font-Inter pt-4 text-justify font-extralight">2024</p>
        </div>
        <p className="duration-200 group-hover:text-lg text-sm font-mono pt-4 text-justify"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    )
}