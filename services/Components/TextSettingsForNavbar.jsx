'use client'
import React from 'react'
import {useCanvasHook} from "@/app/(routes)/design/[designId]/page";

import {TextSettingsList} from "@/services/Options";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Trash} from "lucide-react";

const TextSettingsForNavbar = () => {
    const {canvasEditor} = useCanvasHook()
    const onDelete = async () => {
        const activeObject = canvasEditor.getActiveObject()
        if (activeObject) {
            canvasEditor.remove(activeObject)
        }
    }

    return (
        <div className='flex gap-6'>
            {TextSettingsList.map((item, index) => (
                <div className='hover:scale-105 transition-all cursor-pointer' key={index}>

                    <Popover>
                        <PopoverTrigger asChild>
                            <item.icon/>
                        </PopoverTrigger>
                        <PopoverContent>{item?.component}</PopoverContent>
                    </Popover>
                </div>
            ))}
            <Trash onClick={onDelete} className='hover:scale-105 transition-all cursor-pointer' />
        </div>
    )
}
export default TextSettingsForNavbar
