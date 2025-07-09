import React from 'react'
import Image from "next/image";
import {UserButton} from "@stackframe/stack";

const WorkspaceHeader = () => {
    return (
        <div className='p-2 px-5 flex justify-between items-center shadow-sm'>
            <Image src={'/logo .png'} className='w-[100px] h-[40px]' alt={'logo'} width={100} height={100}/>

            <UserButton/>
        </div>
    )
}
export default WorkspaceHeader
