import React from 'react'
import {useCanvasHook} from "@/app/(routes)/design/[designId]/page";
import {IText} from "fabric";

const TextSettings = () => {

    const {canvasEditor} = useCanvasHook()

// adding any text and adding opportunity to change that
    const onAddTextClick = (type) => {
        if (canvasEditor) {

            if (type === 'Heading') {
                const textRef = new IText('Добавить заголовок', {
                    fontSize: 30,
                    fontWeight: 'bold',
                    fontFamily: 'Arial',
                    fill: 'black',
                    left: 100,
                    top: 100
                });
                canvasEditor.add(textRef)
            } else if (type === 'Subheading') {
                const textRef = new IText('Добавить описание', {
                    fontSize: 20,
                    fontWeight: '400',
                    fontFamily: 'Arial',
                    fill: 'black',
                    left: 100,
                    top: 100
                });
                canvasEditor.add(textRef) // adding any text
            } else {
                const textRef = new IText('Добавить заголовок', {
                    fontSize: 22,
                    fontWeight: '500',
                    fontFamily: 'Arial',
                    fill: 'black',
                    left: 100,
                    top: 100
                });
                canvasEditor.add(textRef) // adding any text
            }
        }
    }

    return (
        <div className='flex flex-col gap-3 cursor-pointer'>
            <h2 onClick={() => onAddTextClick('Heading')} className='font-semibold text-3xl p-3 bg-secondary rounded-xl '>Добавить заголовок</h2>
            <h2 onClick={() => onAddTextClick('SubHeading')} className='font-semibold text-2xl p-3 bg-secondary rounded-xl '>Добавить описание</h2>
            <h2 onClick={() => onAddTextClick('Para')} className='font-semibold text-2xl p-3 bg-secondary rounded-xl '>Добавить параграф</h2>
        </div>
    )
}
export default TextSettings
