'use client'
import React from 'react'
import ColorPickerEditor from "@/services/Sharable/ColorPickerEditor";
import {useState} from "react";
import {useCanvasHook} from "@/app/(routes)/design/[designId]/page";

const BorderColor = () => {
    const [color, setColor] = useState()
    const {canvasEditor} = useCanvasHook()

    const onColorChange= (color) => {
        setColor(color)
        const activeObject = canvasEditor.getActiveObject()
        activeObject.set({
            stroke: color
        })
        canvasEditor.add(activeObject)
        canvasEditor.renderAll()
    }


    return (
        <div>
            <ColorPickerEditor value={color} onColorChange={(v) => onColorChange(v)}/>
        </div>
    )
}
export default BorderColor
