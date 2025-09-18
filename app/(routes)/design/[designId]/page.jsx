'use client'
import React from 'react'
import {api} from "@/convex/_generated/api";
import {useParams} from "next/navigation";
import DesignHeader from "@/app/(routes)/design/_components/DesignHeader";
import {useQuery} from "convex/react";
import Sidebar from "@/app/(routes)/design/_components/Sidebar";
import CanvasEditor from "@/app/(routes)/design/_components/CanvasEditor";
import {useState} from "react";
import {useContext} from "react";
import {CanvasContext} from "@/context/CanvasContext";

const DesignEditor = () => {
    const {designId} = useParams()



    const DesignInfo = useQuery(api.designs.GetDesign, {
        id: designId
    })
    console.log(DesignInfo)
    const [canvasEditor, setCanvasEditor] = useState()



    return (
        <div className='relative'>
            <CanvasContext.Provider value={{canvasEditor, setCanvasEditor}}>


                <DesignHeader DesignInfo={DesignInfo}/>
                <div className='flex items-start'>
                    <Sidebar/>
                    <CanvasEditor DesignInfo={DesignInfo}/>
                </div>
            </CanvasContext.Provider>
        </div>
    )
}
export default DesignEditor


export const useCanvasHook = () => {
    const context = useContext(CanvasContext)

    if (!context) {
        throw  new Error('Error')
    }
    return context

}