'use client'
import React from 'react'
import {ImageUp, Loader} from "lucide-react";
import {useState} from "react";

import Image from "next/image";
import {Button} from "@/components/ui/button";
import ImageKit from "imagekit";
import {FabricImage} from "fabric";
import {useParams} from "next/navigation";
import {useCanvasHook} from "@/app/(routes)/design/[designId]/page";
import {useEffect} from "react";

const CustomImageUpload = ({selectedAi}) => {
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState()
    const {designId} = useParams()
    const {canvasEditor} = useCanvasHook()
    // imagekit initilazation
    const imagekit = new ImageKit({
        publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY,
        privateKey: process.env.NEXT_PUBLIC_IMAGEKIT_PRIVATE_KEY,
        urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT
    })

    // getting image with which we suppose to ai-interact
    const onImageUpload = async (event) => {
        setLoading(true)
        const file = event.target.files[0]
        const imageRef = await imagekit.upload({
            file:file,
            fileName: designId + ".png",
            isPublished: true
        })

        setImage(imageRef?.url)


        setLoading(false)
    }
    const onAddToCanvas = async () => {
        // adding to canva workspace
        const canvasImageRef = await FabricImage.fromURL(image, {crossOrigin: 'anonymous'})


        console.log(image)
        canvasEditor.add(canvasImageRef)
        setImage(null)
    }
    useEffect(() => {
            if (selectedAi) {
                // selecting ai-interaction with image and adding in url necessary
                let imageUrl = image
                if (image?.includes('?tr=')) {
                    imageUrl = imageUrl + ',' +  selectedAi.command;
                } else {
                    imageUrl = imageUrl + '?tr=' + selectedAi.command;

                }
                console.log(imageUrl)
                setImage(imageUrl)
            }
    }, [selectedAi])

    return (
        <div>
            {!image ? <label htmlFor='uploadImage'
                             className='bg-secondary p-4 flex items-center justify-center flex-col h-[100px] p-4'>
                    <ImageUp/>
                    <h2 className='text-xs'>Upload image</h2>

                </label> :
                <label htmlFor='uploadImage'> <Image src={image} alt={'Image'} width={300} height={300}
                                      className='w-full h-[150px] rounded-lg'/>
                </label>}


            <input onChange={onImageUpload} className={'hidden'} type="file" id='uploadImage'/>

            <Button disabled={loading} onClick={onAddToCanvas} className='w-full py-2 my-2 bg-primary text-white' size='md'>{loading ? <Loader className='animate-spin text-primary' /> : 'Добавить в Canva'}</Button>
        </div>
    )
}
export default CustomImageUpload
