import React from 'react'
import {sideBarMenu} from "@/services/Options";
import {useState} from "react";
import SidebarSettings from "@/app/(routes)/design/_components/SidebarSettings";

const Sidebar = () => {
    const [selectedOption, setSelectedOption] = useState()
    return (
        <div className='flex fixed top-20 w-[30%] z-20  '>
            <div className='w-[90px] border-right h-screen pt-2'>
                {sideBarMenu.map((menu, index) => (
                    <div onClick={() => setSelectedOption(menu)} key={index} className='p-2 mb-2 items-center
                    hover:bg-secondary cursor-pointer shadow-sm flex flex-col'>
                        <menu.icon/>
                        <h2 className={'mt-1 text-center text-sm'}>{menu.name}</h2>

                    </div>
                ))}
            </div>
            <SidebarSettings selectedOption={selectedOption}/>
        </div>
    )
}
export default Sidebar
