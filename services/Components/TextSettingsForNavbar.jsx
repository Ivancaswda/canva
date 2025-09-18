'use client'
import React from 'react'
import {useCanvasHook} from "@/app/(routes)/design/[designId]/page";

import {TextSettingsList} from "@/services/Options";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {PaintBucket, Trash} from "lucide-react";

const TextSettingsForNavbar = () => {
    const {canvasEditor} = useCanvasHook()
    const onDelete = async () => {
        const activeObject = canvasEditor.getActiveObject()
        if (activeObject) {
            canvasEditor.remove(activeObject)
        }
    }
    const onChangeColor = (color) => {
        const activeObject = canvasEditor.getActiveObject();
        if (activeObject && activeObject.type === "i-text") {
            activeObject.set("fill", color);
            canvasEditor.renderAll();
        }
    };

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
            <div className='hover:scale-105 transition-all cursor-pointer'>
                <Popover>
                    <PopoverTrigger asChild>
                        <PaintBucket/>
                    </PopoverTrigger>
                    <PopoverContent> <input
                        type="color"
                        onChange={(e) => onChangeColor(e.target.value)}
                        className="w-20 h-10 cursor-pointer"
                    /></PopoverContent>
                </Popover>
            </div>

            <Trash onClick={onDelete} className='hover:scale-105 transition-all cursor-pointer' />
        </div>
    )
}
export default TextSettingsForNavbar
