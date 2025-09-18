import {Loader2Icon} from "lucide-react";
import React from "react";

export default function Loading() {

  return <><div className='w-full h-[100vh] flex items-center justify-center'>
    <div>
      <Loader2Icon className='animate-spin text-primary size-10'/>
    </div>
  </div></>;
}
