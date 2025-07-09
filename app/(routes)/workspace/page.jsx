'use client'
import React, {useContext} from 'react'
import IntroOptions from "@/app/(routes)/workspace/_components/IntroOptions";
import RecentDesign from "@/app/(routes)/workspace/_components/RecentDesign";
import {UserDetailContext} from "@/context/UserDetailContext";
import {useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";

const Page = () => {
    const {userDetail} = useContext(UserDetailContext)
    const router = useRouter()

    console.log(userDetail)
    return userDetail && (
        <div className='p-10 w-full'>

            
            <IntroOptions/>
            <RecentDesign/>
        </div>
    )
}
export default Page
