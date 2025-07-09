'use client'
import React, {useContext} from 'react'
import WorkspaceHeader from "@/app/(routes)/workspace/_components/WorkspaceHeader";
import Sidebar from "@/app/(routes)/workspace/_components/Sidebar";
import IntroOptions from "@/app/(routes)/workspace/_components/IntroOptions";
import {Button} from "@/components/ui/button";
import {UserDetailContext} from "@/context/UserDetailContext";
import {useRouter} from "next/navigation";
import {ArrowRightIcon} from "lucide-react";

import { SignIn } from "@stackframe/stack";

 const WorkSpaceLayout = ({children}) => {
     const {userDetail} = useContext(UserDetailContext)
     const router = useRouter()

     console.log(userDetail)
     return userDetail ? (
         <div>
             <WorkspaceHeader/>
             <div className={'flex '}>
                 <Sidebar/>
                 {children}
             </div>


         </div>
     ) : <div className="flex items-center justify-center w-full h-[100vh] gap-20">
         <img
             className="w-[300px] h-[300px] rounded-lg"
             src="https://i.pinimg.com/originals/0a/89/cd/0a89cdb6245c8c05abd84ae6d1414645.png"
             alt=""
         />
        <SignIn/>
     </div>
 }
export default WorkSpaceLayout