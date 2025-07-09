import React from 'react'
import {ShapeList} from "@/services/Options";
import Image from "next/image";
import {Circle, Rect,Line, Triangle} from "fabric";
import {useCanvasHook} from "@/app/(routes)/design/[designId]/page";



const Shapes = () => {
        const {canvasEditor} = useCanvasHook()
    const onShapeSelect = (item) => {
        const properties = {
            left: 100,
            top: 100,
            width:100, // for a square
            height:100,
            radius: 50,
            stroke: 'black',
             fill: 'black',
            strokeWidth: 0
        }
        if (item.name === "Круг") {
            const circleRef = new Circle({
                ...properties
            })
            canvasEditor.add(circleRef)
            canvasEditor.renderAll()
        } else if (item.name === "Квадрат") {
            const squareRef = new Rect({
                ...properties
            })
            canvasEditor.add(squareRef)
            canvasEditor.renderAll()
        } else if (item.name === 'Треугольник') {
            const triangleRef = new Triangle({
                ...properties
            })
            canvasEditor.add(triangleRef)
            canvasEditor.renderAll()
        } else if (item.name === 'Линия') {
            const lineRef = new Line([50, 50, 200, 200], {
                stroke: 'black',
                strokeWidth: 5
            })
            canvasEditor.add(lineRef)
            canvasEditor.renderAll()
        }
        canvasEditor.renderAll()
    }

    return (
        <div>
            <div className='grid grid-cols-3 gap-3 '>
                {ShapeList.map((item,  index) => (
                    <div key={index} className='p-2 border rounded-xl cursor-pointer' onClick={() => onShapeSelect(item)}>
                        <Image src={item.icon} alt={item.name} width={100} height={100}/>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Shapes
