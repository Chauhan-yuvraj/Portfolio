/* eslint-disable @next/next/no-img-element */
import { ToggleTheme } from '@/components/toggle-theme'
import React from 'react'

const SidebarImageSection = () => {
    return (
        <div className="grid grid-cols-[1fr_4fr_1fr] grid-rows-[1fr_5fr_1fr]">
            <div className=""></div>
            <div className="border-x"></div>
            <div className="z-10">
                <ToggleTheme />

            </div>

            <div className=""></div>
            <div className="border-x flex justify-center relative">
                <img src="/india.svg" alt="" className='absolute left-0' />
                <img src="/pic.webp" alt="yuvraj" className='size-32 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none sm:size-40' />
            </div>
            <div className=""></div>
            <div className=""></div>
            <div className="border-x"></div>
            <div className=""></div>
        </div>
    )
}

export default SidebarImageSection