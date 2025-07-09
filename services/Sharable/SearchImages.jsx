'use client'
import React from 'react'
import axios from "axios";
import {useEffect, useState} from "react";
import Image from "next/image";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {SearchIcon} from "lucide-react";
import {useCanvasHook} from "@/app/(routes)/design/[designId]/page";
import {FabricImage} from "fabric";
// using usnsplash creating oportunity for adding various image from the internet
const SearchImages = () => {
    const [imageList, setImageList] = useState()
    const [searchInput, setSearchInput] = useState()
    useEffect(() => {
        GetImageList('Gradient')
    }, [])
    const {canvasEditor} = useCanvasHook()

    // getting infinite source of images which user can add into his template
    const GetImageList =  async (searchInput) => {
        const result = await axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: searchInput,
                page: 1,
                per_page:20,

            },
            headers: {
                Authorization: 'Client-ID ' + process.env.NEXT_PUBLIC_UNDESPLASH_KEY
            }
        })
        console.log(result)
        setImageList(result?.data?.results) // getting images from api
    }

    // add selected image to canva
    const addImageToCanvas = async (imageUrl) => {
        const canvasImageRef = await FabricImage.fromURL(imageUrl, {crossOrigin: 'anonymous'})
        canvasEditor.add(canvasImageRef) // adding image
        canvasEditor.renderAll()
    }


    return (
        <div className='mt-5'>
            <h2>Search Images</h2>
            <div className='flex gap-2 items-center my-2'>
                <Input onChange={(e) => setSearchInput(e.target.value)} placeholder='Лето 2025'/>
                <Button onClick={() => GetImageList(searchInput)}><SearchIcon/></Button>
            </div>
            <div className=' grid grid-cols-2 gap-2 overflow-auto h-[75vh]'>
                {imageList?.map((item, index) => (
                    <div onClick={() => addImageToCanvas(item.urls.regular)} key={index}>
                        <Image className='w-full cursor-pointer h-[80px]   rounded-sm' width={300} height={300} src={item?.urls?.thumb} alt={item?.slug}/>
                    </div>
                ))}
            </div>

        </div>
    )
}
export default SearchImages
