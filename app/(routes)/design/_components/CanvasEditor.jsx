import React from 'react'
import {Canvas} from "fabric";
import {useRef, useState, useEffect} from 'react'
import {useCanvasHook} from "@/app/(routes)/design/[designId]/page";
import TopNavBar from "@/services/Components/TopNavBar";

const CanvasEditor = ({DesignInfo}) => {

    const canvasRef= useRef()
    const [canvas, setCanvas] = useState(null)
    const {canvasEditor, setCanvasEditor} = useCanvasHook()
    useEffect(() => {
        console.log(DesignInfo)
            if (canvasRef.current) {
                const initCanvas = new Canvas(canvasRef.current, {
                    width: DesignInfo?.width / 2 ,
                    height: DesignInfo?.height / 2,
                    backgroundColor: '#fff'
                })
                // set hign resolution canvas

                const scaleFactor = window.devicePixelRatio || 1
                // if screen is reduced then we change our canvas
                initCanvas.set({
                    width: DesignInfo?.width * scaleFactor,
                    height: DesignInfo?.height * scaleFactor,
                    zoom: 1  / scaleFactor
                })
            if (DesignInfo?.jsonTemplate) {
                initCanvas.loadFromJSON(DesignInfo.jsonTemplate, () => {
                    initCanvas?.requestRenderAll()
                })
            }


                initCanvas.renderAll()
                setCanvas(initCanvas)
                setCanvasEditor(initCanvas)
                return () => {
                    initCanvas.dispose()
                }
            }
    }, [DesignInfo])

    // deleting the image using backspace button on keyboard

  /*
  useEffect(() => {
        const handleKeyDown = (event) => {
            if (event?.key === 'Delete' || event?.key === 'Backspace') {
                if (canvasEditor) {
                    const activeObject = canvasEditor.getActiveObject()
                    if (activeObject) {
                        canvasEditor.remove(activeObject)
                        canvasEditor.renderAll()
                    }
                }
            }
        }

        document.addEventListener('keydown', handleKeyDown) // calling the method
        return  () => {
            document.removeEventListener('keydown', handleKeyDown)
        }


    }, [canvasEditor])
*/

    return (
        <div className='bg-secondary rounded-lg  h-screen mt-[6%] ml-[30%]  w-[70%]'>
            <TopNavBar/>
            <div className=' flex items-center justify-center flex-col'>
                <canvas id='canvas' ref={canvasRef}/>
            </div>
        </div>
    )
}
export default CanvasEditor
