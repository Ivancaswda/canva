"use client";


import Provider from "@/app/provider";
import dynamic from "next/dynamic";
import {Suspense} from "react";
import {ConvexProvider, ConvexReactClient} from "convex/react";


export default function ClientProviders({ children }) {
    const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL)
    return (
        <Suspense>
            <ConvexProvider client={convex} >
                <Provider>
                    {children}
                </Provider>
            </ConvexProvider>
        </Suspense>
    );
}
