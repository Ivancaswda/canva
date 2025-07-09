import React from 'react'
import {FontFamilyList} from "@/services/Options";
import {useCanvasHook} from "@/app/(routes)/design/[designId]/page";

const FontFamily = () => {

    const {canvasEditor} = useCanvasHook()
    const onOpacityChange = (value) => {
        const activeObject = canvasEditor.getActiveObject();

        if (activeObject) {



            activeObject.set({
                fontFamily: value
            })
            canvasEditor.add(activeObject)
            canvasEditor.renderAll()
        }
    }
    return (
        <div className='h-[200px] overflow-auto cursor-pointer'>
            {FontFamilyList.map((item, index) => (

                    <h2 onClick={() => onOpacityChange(item) } key={index} style={{
                        fontFamily: item
                    }} className='text-lg p-2 bg-secondary rounded-lg mb-2'>{item}</h2>

            ))}
        </div>
    )
}
export default FontFamily
