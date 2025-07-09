'use client'
import React from 'react'
import ImageKit from 'imagekit'
import {useParams} from "next/navigation";
import {Button} from "@/components/ui/button";
import {useState} from "react";
import {FabricImage} from "fabric";
import {useCanvasHook} from "@/app/(routes)/design/[designId]/page";
import {StickerList} from "@/services/Options";

const UploadImage = () => {
    const {designId} = useParams()
    const [loading, setLoading]  = useState(false)
    const {canvasEditor} = useCanvasHook()
    // imagekit initilazation
    const imagekit = new ImageKit({
        publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY,
        privateKey: process.env.NEXT_PUBLIC_IMAGEKIT_PRIVATE_KEY,
        urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT
    })
    // adding images on canva project

    const onFileUpload = async (event) => {
        const file = event.target.files[0]
        const imageRef = await imagekit.upload({
            file:file,
            fileName: designId + ".png",
            isPublished: true
        })

        const canvasImageRef = await FabricImage.fromURL(
            imageRef?.url , {crossOrigin: 'anonymous'}
        )

        canvasImageRef.set({
            width: 200,
            height: 200,

        })
        canvasEditor.add(canvasImageRef)
     //   canvasEditor.renderAll()
        setLoading(false)
        console.log(imageRef)
    }

    return (
        <div>
            <label htmlFor="uploadImage">
                <h2 className='p-2 bg-primary  text-white text-center mt-12 rounded-md w-full'>{loading ? <Loader className='animate-spin text-primary'/> : 'Upload Image'}</h2>
            </label>
            <input type="file" multiple={false} id='uploadImage' className='hidden' onChange={onFileUpload}/>
        </div>
    )
}
export default UploadImage
