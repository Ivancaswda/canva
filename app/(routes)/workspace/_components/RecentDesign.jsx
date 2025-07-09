'use client'
import React, {useContext} from 'react'
import {useState} from "react";
import {Text} from "lucide-react";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import CustomCanvasDialog from "@/app/(routes)/workspace/_components/CustomCanvasDialog";
import {useConvex} from "convex/react";
import {UserDetailContext} from "@/context/UserDetailContext";
import {api} from "@/convex/_generated/api";
import {useRouter} from "next/navigation";
import {useEffect} from "react";
import {GetUserDesigns} from "@/convex/designs";

const RecentDesign = () => {

    const [designList, setDesignList] = useState([])
    const {userDetail, setUserDetail} = useContext(UserDetailContext)
    const convex = useConvex()

    useEffect(() => {
        if (userDetail) {
            console.log('ahsagassg')
            GetRecentDesigns()

        }
    }, [userDetail])

    const GetRecentDesigns = async () => {
        const result= await convex.query(api.designs.GetUserDesigns, {
            uid: userDetail?._id
        })
        console.log(result)
        setDesignList(result)

    }

    const router= useRouter()
    return (
        <div className='mt-7'>
            <h2 className='font-bold text-2xl'>Недавние проекты</h2>
            {designList?.length === 0 ? <div className='flex flex-col items-center gap-4 justify-center'>
                <Image src={'/edittool.png'} alt='edit' width={100} height={100}/>
                <h2 className='text-center text-sm ' >У вас пока нету ни одного проекта</h2>
                <CustomCanvasDialog>
                    <Button className='cursor-pointer'>+ create new</Button>
                </CustomCanvasDialog>
            </div> : <div className={'grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-5'}>

                {designList?.map((item, index) => (
                    <div onClick={() => router.push(`/design/${item._id}`)} key={index} className={'bg-secondary cursor-pointer rounded-lg'}>

                        {item?.imagePreview ?

                            <div className='group relative flex items-center justify-center '>
                                <Image alt={item?.name} width={300} height={300}
                                       className='w-full h-[150px] object-contain rounded-lg' src={item?.imagePreview}/>
                                <div
                                    className='absolute transition-all duration-400  flex items-center justify-center text-center  w-full h-full bg-black group-hover:opacity-40 rounded-lg opacity-0'>

                                </div>

                                <p className='font-semibold  transition-all duration-400 absolute group-hover:opacity-100 opacity-0   text-2xl text-white '>{item?.name}</p>
                            </div>


                            : <div
                                className='bg-gradient-to-r from-green-200 via-blue-400 w-full h-[150px] rounded-lg  to-purple-200 flex justify-center text-center items-center '><h1 className='font-semibold text-center text-lg text-secondary'>{item?.name}</h1></div>}

                    </div>
                ))}
            </div>}
        </div>
    )
}
export default RecentDesign
