'use client'
import React from 'react'
import {Slice} from "lucide-react";
import {useCanvasHook} from "@/app/(routes)/design/[designId]/page";
import {Slider} from "@/components/ui/slider";

const BorderWidth = () => {
    const {canvasEditor} = useCanvasHook()
    const onWidthChange = (value) => {
        const activeObject = canvasEditor.getActiveObject();

        if (activeObject) {



            activeObject.set({
                strokeWidth: value
            })
            canvasEditor.add(activeObject)
            canvasEditor.renderAll()
        }
    }

    return (
        <div>
            <h2 className='my-2'>Толщина границы</h2>
            <Slider onValueChange={(v) => onWidthChange(v[33])}  defaultValue={[0]} max={100} step={1}/>
        </div>
    )
}
export default BorderWidth
