'use client'
import React from 'react'
import {WorkspaceMenu} from "@/services/Options";
import {CircleIcon} from "lucide-react";
import {usePathname} from "next/navigation";
import CustomCanvasDialog from "@/app/(routes)/workspace/_components/CustomCanvasDialog";
import {useRouter} from "next/navigation";

const Sidebar = () => {
    const router = useRouter()
    const path = usePathname()
    console.log(path)

    return (
        <div className={'h-screen shadow-sm p-2 bg-purple-50'}>
            <CustomCanvasDialog>
                <div className='p-2 group flex items-center cursor-pointer gap-2 flex-col mb-5'>
                    <CircleIcon className='bg-purple-500  group-hover:bg-purple-800 text-white rounded-full h-8 w-8'/>
                    <h2 className='text-xs text-purple-600 group-hover:text-purple-800'>Create</h2>
                </div>
            </CustomCanvasDialog>
            {WorkspaceMenu.map((item, index) => (
                <div onClick={() => router.push(item.path)}  key={index} className={`p-2 w-[70px] flex items-center flex-col gap-4 hover:bg-purple-100 cursor-pointer group  rounded-xl mb-4 ${item.path === path && 'bg-purple-100' }`}>
                    <item.icon  className={`group-hover:text-purple-800 ${item.path === path && 'text-purple-800' } `}/>
                    <h2 className={`text-xs text-center group-hover:text-purple-800 ${item.path === path && 'text-purple-800'}`}>{item.name}</h2>
                </div>
            ))}
        </div>
    )
}
export default Sidebar
