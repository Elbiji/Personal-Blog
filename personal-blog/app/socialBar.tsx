import React from "react";

export const SocialBar = () => {
    return (
        <div className="pb-2 pt-2">
          <div className="inset-0  mt-4 p-[1.4px] rounded-xl shadow-lg bg-gradient-to-tr from-neutral-300 via-neutral-200 to-neutral-100">
            <div className="p-[4px] flex h-full w-full rounded-[0.65rem] bg-white justify-between items-center">
              <div className="group flex items-center gap-1">
                  <div className="border-solid border-2 p-[8px] rounded-lg hover:shadow-xl transition-all duration-[1200ms] shadow-sm group bg-gradient-to-tr from-white via-white to-neutral-200 group-hover:rotate-12">
                    <a className="hover:text-emerald-700 duration-[3000]">
                      <svg className="duration-300  fill-neutral-400  group-hover:rotate-12 group-hover:animate-pulse group-hover:scale-150 transition-all" width="16" height="16" viewBox="0 0 25 25">
                        <path d="M3.5 21V16M3.5 6V1M1 3.5H6M1 18.5H6M12 2L10.2658 6.50886C9.98381 7.24209 9.84281 7.60871 9.62353 7.91709C9.42919 8.1904 9.1904 8.42919 8.91709 8.62353C8.60871 8.8428 8.24209 8.98381 7.50886 9.26582L3 11L7.50886 12.7342C8.24209 13.0162 8.60871 13.1572 8.91709 13.3765C9.1904 13.5708 9.42919 13.8096 9.62353 14.0829C9.84281 14.3913 9.98381 14.7579 10.2658 15.4911L12 20L13.7342 15.4911C14.0162 14.7579 14.1572 14.3913 14.3765 14.0829C14.5708 13.8096 14.8096 13.5708 15.0829 13.3765C15.3913 13.1572 15.7579 13.0162 16.4911 12.7342L21 11L16.4911 9.26582C15.7579 8.98381 15.3913 8.8428 15.0829 8.62353C14.8096 8.42919 14.5708 8.1904 14.3765 7.91709C14.1572 7.60871 14.0162 7.24209 13.7342 6.50886L12 2Z"/>
                      </svg>
                    </a>
                  </div>
                <p className="font-Inter text-xs text-neutral-500 transition duration-300">
                  <span className="font-bold ">Socials. </span>
                   my works.
                   <span className="block max-w-0 group-hover:max-w-full transition-all duration-1000 h-[1px] bg-neutral-500"></span>
                </p>
              </div>
              <div className="flex items-center justify-start">
                <div className="flex gap-1 justify-between">
                  <div className="border-solid border-2 p-[8px] rounded-lg hover:shadow-xl transition-all duration-500 cursor-pointer shadow-sm group  bg-gradient-to-br from-white via-white to-neutral-100">
                    <a href="https://github.com/Elbiji" className="hover:text-emerald-700 duration-300">
                      <svg className="duration-300  fill-neutral-400 group-hover:fill-neutral-500 group-hover:scale-110" width="16" height="16"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                      </svg>
                    </a>
                  </div>
                  <div className="border-solid border-2 p-[8px] rounded-lg hover:shadow-xl transition-all duration-500 cursor-pointer shadow-sm group bg-gradient-to-br from-white via-white to-neutral-100">                  
                      <a href="https://x.com/cikajipapa">
                        <svg className="duration-300  fill-neutral-400 group-hover:fill-neutral-500 group-hover:scale-110" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                          <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
                        </svg>
                      </a>
                    </div>
                    <div className="border-solid border-2 p-[8px] rounded-lg hover:shadow-xl transition-all duration-500 cursor-pointer shadow-sm group bg-gradient-to-br from-white via-white to-neutral-100">
                      <a href="https://www.linkedin.com/in/bagas-noor-8aa0b8234/">
                        <svg className="duration-300  fill-neutral-400 group-hover:fill-neutral-500 group-hover:scale-110" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                          <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
    )
}