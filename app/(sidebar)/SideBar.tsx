import Separator from '@/components/Separator'
import React from 'react'
import SidebarImageSection from './components/SidebarImageSection'
import SideBarBodySection from './components/SideBarBodySection'

const SideBar = () => {
    return (
        <div className="grid grid-cols-[1fr_auto] overflow-hidden h-screen w-full">
            <div className='border-edge grid grid-rows-[1fr_3fr] h-screen overflow-hidden'>
                <div className="">
                    <div className="border-r border-b border-edge">
                        <SidebarImageSection />
                    </div>
                    <div className="relative">
                        <div className="absolute w-full h-full">
                        <div className="grid h-full w-full grid-cols-[1fr_3.9fr_1fr]">
                            <span className='w-full border-r h-full '></span>
                            <span className='w-full border-r h-full'></span>
                        </div>
                        </div>
                        <Separator />
                    </div>
                </div>
                <div className="border-t border-edge">
                    <SideBarBodySection />
                </div>
            </div>
            <div className="w-8 h-screen overflow-y-hidden ">
                <Separator rotation="rotate-90" />
            </div>
        </div>
    )
}
export default SideBar
