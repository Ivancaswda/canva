'use client'
import React from 'react'
import {useParams} from "next/navigation";
import {UserButton} from "@stackframe/stack";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {Download, List, Save} from "lucide-react";
import {useCanvasHook} from "@/app/(routes)/design/[designId]/page";
import {useMutation} from "convex/react";
import {api} from "@/convex/_generated/api";
import {toast} from "sonner";
import {useState} from "react";
import ImageKit from "imagekit";
import {useEffect} from "react";
import Link from "next/link";

const DesignHeader = ({DesignInfo}) => {
    // changing name of project

    // save project of canva in db
    const {canvasEditor} = useCanvasHook()
    // defining the mutation from backend
    const imagekit = new ImageKit({
        publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY,
        privateKey: process.env.NEXT_PUBLIC_IMAGEKIT_PRIVATE_KEY,
        urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT
    })
    const SaveDesign = useMutation(api.designs.SaveDesign)
    const {designId} = useParams()
    const [designName, setDesignName] = useState(DesignInfo?.name || '')
    // updating name of project every time it changes
    useEffect(() => {
        setDesignName(DesignInfo?.name || '');
    }, [DesignInfo]);
    // SAVING DESIGN IN JSON FORMAT IN DB
    const onSave = async () => {
        if (canvasEditor) {

            toast('Вы успешно сохранили проект')
            const base64Image = canvasEditor?.toDataURL({
                format: 'png',
                quality: 0.5
            })




            // adding new one

            const imageRef = await imagekit.upload({
                file:base64Image,
                fileName: designId + ".png",
                isPublished: true,
                useUniqueFileName: false
            })
            console.log(imageRef?.url)
            const JSONDesign = canvasEditor.toJSON()
            console.log(JSONDesign)

            const result = await SaveDesign({
                id: designId,
                jsonDesign: JSONDesign,
                imagePreview: imageRef?.url, // contains image kit url
                name: designName
            })

            console.log(result)
        }
    }

    const onExport = async () => {
        const dataUrl = canvasEditor?.toDataURL({
            format: 'png',
            quality: 1
        })
        const link = document?.createElement("a")
        link.href = dataUrl;
        link.download = 'CanvaCloneDesign.png',
        link.click()

    }

    return (
        <div className='p-3 fixed h-[60px] top-0 z-20 w-full flex justify-between items-center bg-gradient-to-r from-green-200 via-blue-400 to-purple-200'>
            <div className='flex items-center gap-2'>

                <Image  alt={'canva-logo-white'} src='/logo-white.png'  width={100} height={60} />
            </div>
            <input onChange={(e) => setDesignName(e.target.value)} value={designName} type="text" placeholder={'Имя проекта'} className='outline-none text-white'/>
            <div className='flex gap-4 items-center'>

                <Link href='/workspace'> <Button onClick={onSave}><Save/>Сохранить проект</Button></Link>

                <Button onClick={() => onExport()}><Download/>Export</Button>
                <UserButton />
            </div>
        </div>
    )
}
export default DesignHeader
