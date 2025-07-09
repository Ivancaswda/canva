'use client'
import React from 'react'
import {useQuery} from "convex/react";
import {api} from "@/convex/_generated/api";
import Image from "next/image";
import CustomCanvasDialog from "@/app/(routes)/workspace/_components/CustomCanvasDialog";
import {Button} from "@/components/ui/button";
import {useMutation} from "convex/react";
import {CreateDesignFromTemplate} from "@/convex/designs";
import {useContext} from "react";
import {UserDetailContext} from "@/context/UserDetailContext";
import {useRouter} from "next/navigation";

const PreTemplateList = () => {

    const templateList = useQuery(api.templates.GetAllTemplates)
    // defining mutation
    const createOnNewDesignFromTemplate = useMutation(api.designs.CreateDesignFromTemplate)
    const {userDetail} = useContext(UserDetailContext)
    const router= useRouter()
    const onTemplateSelect = async (template) => {
        // save onto design table with uid
        const id = await createOnNewDesignFromTemplate({
            imagePreview: template?.imagePreview,
            jsonTemplate: template?.jsonData,
            name: template?.name,
            uid: userDetail?._id,
            width: template?.width,
            height:template?.height
        })
        console.log(id)
        router.push('/design/' + id)
    }
    return (
        <div className='mt-7'>
            <h2 className='font-bold text-2xl'>Recent Designs</h2>
            {templateList?.length === 0 ? <div className='flex flex-col items-center gap-4 justify-center'>
                <Image src={'/edittool.png'} alt='edit' width={100} height={100}/>
                <h2 className='text-center text-sm '>У вас пока нету ни одного проекта</h2>
                <CustomCanvasDialog>
                    <Button className='cursor-pointer'>+ create new</Button>
                </CustomCanvasDialog>
            </div> : <div className={'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-5'}>

                {templateList?.map((item, index) => (
                    <div onClick={() => onTemplateSelect(item)} key={index}
                         className={'bg-secondary cursor-pointer rounded-lg'}>
                        <Image alt={item?.name} width={300} height={300}
                               className='w-full h-[200px] object-contain rounded-lg' src={item?.imagePreview}/>
                    </div>
                ))}
            </div>}
        </div>
    )
}
export default PreTemplateList
