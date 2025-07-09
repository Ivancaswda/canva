import React from 'react'
import {useQuery} from "convex/react";
import {api} from "@/convex/_generated/api";
import Image from "next/image";
import {useCanvasHook} from "@/app/(routes)/design/[designId]/page";

const TemplatesList = () => {
    const {canvasEditor} = useCanvasHook()
    const templateList = useQuery(api.templates.GetAllTemplates)
    console.log(templateList)
    const onTemplateSelect = (template) => { // selecting template
        if (canvasEditor) {
            canvasEditor.loadFromJSON(template?.jsonData, () => {
                canvasEditor?.requestRenderAll()
            })
        }
    }

    return (
        <div>
            <div className='grid grid-cols-2 gap-5 mt-4'>
                {templateList?.map((item, index) => (
                    <Image onClick={() => onTemplateSelect(item)}
                        className='w-full h-[150px] rounded-lg object-contain bg-secondary cursor-pointer'
                            key={index} alt={item?.name} width={500} height={500} src={item.imagePreview}/>
                ))}
            </div>
        </div>
    )
}
export default TemplatesList
