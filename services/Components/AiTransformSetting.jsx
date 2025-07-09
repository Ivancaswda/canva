'use client'
import React from 'react'
import {AITransformationSettings} from "@/services/Options";
import Image from "next/image";
import {Text} from "lucide-react";
import CustomImageUpload from "@/services/Sharable/CustomImageUpload";
import {useState} from 'react'
const AiTransformSetting = () => {

    const [selectedAi, setSelectedAi] = useState()

    // ADDING AI INTERACTION WITH IMAGE USING IMAGEKIT! WE NEED TO PUT command in link tab
    return (
        <div className='h-[70vh] overflow-auto'>
            <CustomImageUpload selectedAi={selectedAi}/>
            <h2 className={'mt-4'}>ИИ взаимодействие by CanvaAI</h2>

            {/* Обернем скроллируемую часть */}
            <div className='h-[70vh] '>
                <div className='grid grid-cols-2 gap-3'>
                    {AITransformationSettings.map((item, index) => (
                        <div key={index}>
                            <Image
                                onClick={() => setSelectedAi(item)}
                                src={item.image}
                                alt={item.name}
                                width={500}
                                height={500}
                                className='w-full h-[70px] object-cover cursor-pointer'
                            />
                            <h2 className='text-xs text-center'>{item.name}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default AiTransformSetting
