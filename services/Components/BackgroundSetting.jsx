'use client'
import React from 'react'
import {useState} from "react";
import ColorPickerEditor from "@/services/Sharable/ColorPickerEditor";
import {useCanvasHook} from "@/app/(routes)/design/[designId]/page";
const BackgroundSetting = () => {

    const [bgColor, setBgColor] = useState('#fff')
    const {canvasEditor} = useCanvasHook()

    // changing canvas color
    const onColorChange= (color) => {
        setBgColor(color)
        canvasEditor?.set({
            backgroundColor: color,
            backgroundImage: null
        })
        canvasEditor.renderAll()
    }

    return (
        <div>
            <ColorPickerEditor value={bgColor} onColorChange={(v) => onColorChange(v)}/>
        </div>
    )
}
export default BackgroundSetting
