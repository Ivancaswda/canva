import React from 'react'
import {useCanvasHook} from "@/app/(routes)/design/[designId]/page";
import {Slider} from "@/components/ui/slider";

const Opacity = () => {
    const {canvasEditor} = useCanvasHook()
    const onOpacityChange = (value) => {
        const activeObject = canvasEditor.getActiveObject();

        if (activeObject) {



            activeObject.set({
                opacity: value
            })
            canvasEditor.add(activeObject)
            canvasEditor.renderAll()
        }
    }

    return (
        <div>
            <h2 className='my-2'>Прозрачность</h2>
            <Slider onValueChange={(v) => onOpacityChange(v[0])}  defaultValue={[1]} max={1} step={0.1}/>
        </div>
    )
}
export default Opacity
