import React from 'react'
import {Bold, Italic, Underline} from 'lucide-react'
import {useCanvasHook} from "@/app/(routes)/design/[designId]/page";
import {Toggle} from "@/components/ui/toggle";

const FontStyles = () => {

    const {canvasEditor} = useCanvasHook()
    const activeObject = canvasEditor.getActiveObject()
    const onSettingClick = (type) => {

        if (activeObject) {
            if (type === 'bold') {
                activeObject.set({fontWeight: activeObject.fontWeight ==='bold' ? null : 'bold'})
            } else if (type === 'italic') {
                activeObject.set({fontStyle: activeObject.fontStyle === 'italic' ? 'normal' : 'italic'})
            } else {
                activeObject.set({underline: activeObject.underline ? false : true  })
            }

        }
        canvasEditor.add(activeObject)
    }
    return (
        <div>
            <Toggle defaultPressed={activeObject?.fontWeight === 'bold' } aria-label={'Toggle bold'} onClick={() => onSettingClick('bold')}>
                <Bold className='w-4 h-4' size={'lg'}/>
            </Toggle>
            <Toggle defaultPressed={activeObject.fontStyle === 'italic' } aria-label={'Toggle Italic'} onClick={() => onSettingClick('italic')}>
                <Italic className='w-4 h-4' size={'lg'}/>
            </Toggle>
            <Toggle defaultPressed={activeObject.underline } aria-label={'Toggle Underline'} onClick={() => onSettingClick('underline')}>
                <Underline className='w-4 h-4' size={'lg'}/>
            </Toggle>

        </div>
    )
}
export default FontStyles
