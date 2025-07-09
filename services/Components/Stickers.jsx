import React from 'react'
import {StickerList} from "@/services/Options";
import {useCanvasHook} from "@/app/(routes)/design/[designId]/page";
import {FabricImage} from "fabric";

const Stickers = () => {

    const {canvasEditor} = useCanvasHook()
    const onAddSticker = async (imageUrl) => {
        if (canvasEditor) {
            const canvasImageRef = await FabricImage.fromURL(imageUrl, {crossOrigin: 'anonymous'})
            canvasEditor.add(canvasImageRef)
        }
    }
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2  gap-4 overflow-y-auto h-[75vh]'>{StickerList.map((item, index) => (
            <div onClick={() => onAddSticker(item)}  key={index}>
                <img src={item} className='w-[20px] h-[20px] md:w-[80px] md:h-[80px]' alt=""/>
            </div>
        ))}</div>
    )
}
export default Stickers
