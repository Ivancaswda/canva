'use client'
import React from 'react'
import Image from "next/image";
import {Gift, Option, Star, StarIcon} from "lucide-react";
import {canvasSizeOptions} from "@/services/Options";
import {useMutation} from "convex/react";
import {api} from "@/convex/_generated/api";
import {useContext} from 'react'
import {UserDetailContext} from "@/context/UserDetailContext";
import {toast} from "sonner";
import {useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";

const IntroOptions = () => {
    const router=  useRouter()
    const createDesignRecord = useMutation(api.designs.CreateNewDesign)
// creates new design and saved into db
/*
*
* @param {*} option
*
 */

    const {userDetail} = useContext(UserDetailContext) // getting data where we can access userId = uid

    const OnCanvasOptionSelect = async (option) => {
        toast('Загрузка...')
        console.log(userDetail)
        const result = await createDesignRecord({
            name: option.name,
            width: option.width,
            height: option.height,
            uid: userDetail?._id
        })
        console.log(result)
        // navigate to editor screen
        router.push(`/design/${result}`)
    }

    return (
        <div>


            <div className={'relative'}>
                <Image src={'/background-main-image.png'} alt='banner' width={1000}
                       className='w-full object-cover h-[200px] rounded-2xl' height={200}/>
                <h2 className='text-3xl bg-primary text-white rounded-xl px-4 py-2 bottom-5 font-semibold left-10 absolute'>Рабочая панель</h2>
                <div className='absolute top-5 right-10 flex items-center gap-4 '>
                    <Button onClick={() => router.push('/workspace/billing')} className='flex items-center gap-2 '><StarIcon className='text-yellow-400 '/> Обновить план</Button>
                    <Button className={'p-2'} ><Gift/></Button>
                </div>
            </div>

            <div className='flex gap-3 items-center mt-10'>
                {canvasSizeOptions.map((item, index) => (
                    <div onClick={() => OnCanvasOptionSelect(item)} key={index} className={'flex cursor-pointer flex-col items-center justify-center gap-2 '}>
                        <Image src={item.icon} className='rounded-full' alt={item.name} width={60} height={60}/>
                        <h2 className='text-xs mt-2'>{item.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default IntroOptions
