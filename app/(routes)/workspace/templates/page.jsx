'use client'
import React, {useState} from 'react'
import PreTemplateList from "@/app/(routes)/workspace/_components/PreTemplateList";
import Image from "next/image";
import {options} from "@/services/Options";
import {usePathname, useRouter} from "next/navigation";
import {SearchIcon} from "lucide-react";
import {Input} from "@/components/ui/input";

const Templates = () => {
    const path = usePathname()
    const router = useRouter()
    const [searchProj, setSearchProj] = useState('')



    return (
        <div className={'p-10 w-full'}>
            <div className={'relative'}>
                <Image src={'/bg-color.png'} alt='banner' width={1000}
                       className='w-full object-cover h-[400px] rounded-2xl' height={200}/>
                <div className='absolute flex-col z-20 flex items-center justify-center top-14 w-full  '>

                    <h2 className='text-[50px]  font-semibold    text-primary rounded-xl px-4 py-2 top-10   '>Мои
                        шаблоны</h2>
                    <h2 className='text-[30px]     text-primary rounded-xl px-4 py-2 top-10   '>Напишите название своего
                        шаблона</h2>
                    <div className={' px-2 py-1 flex mt-4  items-center justify-between  gap-8 '}>
                        {options.map((item, index) => (
                            <div onClick={() => router.push(item.path)} key={index}
                                 className={` py-2 px-4 group hover:bg-primary/80 hover:text-white transition-all duration-300 border border-gray-200 flex items-center gap-2 rounded-2xl cursor-pointer  ${item.path === path ? 'bg-primary/80 text-white' : 'bg-white text-black'} `}>
                                <item.icon/>
                                <h1>{item.name}</h1>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='absolute right-60 rounded-lg h-[65px] left-65 top-70 bg-white w-[60%]'>
                    <div className='h-full w-full flex items-center gap-4'>
                        <div className='flex items-center justify-center ml-4'>
                            <SearchIcon className='text-primary'/>
                        </div>
                        <Input placeholder='Найди свой шаблон' className='h-full w-full text-4xl font-semibold'
                               value={searchProj} onChange={(e) => setSearchProj(e.target.value)}/>

                    </div>
                </div>

            </div>
            <PreTemplateList/>
        </div>
    )
}
export default Templates
