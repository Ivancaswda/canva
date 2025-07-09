import React from 'react'
import ShapeSettings from "@/services/Sharable/ShapeSettings";
import {useCanvasHook} from "@/app/(routes)/design/[designId]/page";
import {useEffect} from "react";
import {useState} from "react";
import {TextSettingsList} from "@/services/Options";
import TextSettingsForNavbar from "@/services/Components/TextSettingsForNavbar";

const TopNavBar = () => {
    const {canvasEditor} = useCanvasHook()
    const [showShapeSettings, setShowShapeSettings] = useState(false)
    const [enableTextSettings, setEnableTextSettings] = useState(false)
    useEffect(() => {

        if (canvasEditor) {
            const activeObject = canvasEditor.getActiveObject()
            console.log(activeObject, canvasEditor)

        }

    }, [canvasEditor])

    if (canvasEditor) {
        canvasEditor.on('selection:created', function (e){
            console.log('Selected element', e)
            const activeObject = canvasEditor.getActiveObject()
            if (!activeObject.text) {
                setShowShapeSettings(true)
                setEnableTextSettings(false)
            }
            if (activeObject.text) {
                setShowShapeSettings(false)
                setEnableTextSettings(true)
            }

            // if we did not choose anything then we conceal tools like fillColor, border widrh - shapesettings

        })
        // to update header between for text and for other elements
        canvasEditor.on('selection:updated', function() {
            const activeObject = canvasEditor.getActiveObject()
            if (!activeObject.text) {
                setShowShapeSettings(true)
                setEnableTextSettings(false)
            }
            if (activeObject.text) {
                setShowShapeSettings(false)
                setEnableTextSettings(true)
            }
        })
        canvasEditor.on('selection:cleared', function () {
            setShowShapeSettings(false)
        })
    }
    return (
        <div className='bg-white p-3'>
            {showShapeSettings && <ShapeSettings/>}
            {enableTextSettings && <TextSettingsForNavbar/>}

        </div>
    )
}
export default TopNavBar
