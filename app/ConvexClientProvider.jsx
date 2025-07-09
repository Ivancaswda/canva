'use client'
import React, {Suspense} from 'react'
import {ConvexProvider, ConvexReactClient} from "convex/react";
import Provider from "@/app/provider";
import {Loader, Loader2Icon} from "lucide-react";


const ConvexClientProvider = ({children}) => {

    const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL)

    return (
        <Suspense fallback={<div className='w-full h-[100vh] flex items-center justify-center'>
            <div>
                <Loader2Icon className='animate-spin text-primary size-10'/>
            </div>
        </div>}>
            <ConvexProvider client={convex}>
            <Provider>
                {children}
            </Provider>
            </ConvexProvider>
        </Suspense>
    )
}
export default ConvexClientProvider
