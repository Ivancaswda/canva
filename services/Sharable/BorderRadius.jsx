'use client'
import React from 'react'
import {useCanvasHook} from "@/app/(routes)/design/[designId]/page";
import {Slider} from "@/components/ui/slider";

const BorderRadius = () => {
    const {canvasEditor} = useCanvasHook()
    const onRadiusChange = (value) => {
        const activeObject = canvasEditor.getActiveObject();

        if (activeObject) {



            activeObject.set({
                rx: value,
                ry: value
            })
            canvasEditor.add(activeObject)
            canvasEditor.renderAll()
        }
    }

    return (
        <div>
            <h2 className='my-2'>Закругление границы</h2>
            <Slider onValueChange={(v) => onRadiusChange(v[0])}  defaultValue={[0]} max={100} step={1}/>
        </div>
    )
}
export default BorderRadius
