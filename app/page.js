'use client'
import Image from "next/image";
import {UserButton} from "@stackframe/stack";
import {useContext, useEffect} from "react";
import {UserDetailContext} from "@/context/UserDetailContext";
import {useRouter} from "next/navigation";
import {Loader2Icon} from "lucide-react";
export default function Home() {
    const {userDetail} = useContext(UserDetailContext)
    const router = useRouter()

    console.log(userDetail)

    useEffect(() => {

            router.push('/workspace')


    }, [ router])
  return (
    <div className={'flex items-center justify-center w-full h-[100vh]'}>
        <Loader2Icon className='animate-spin text-purple-500 size-12
        '/>
    </div>
  );
}
