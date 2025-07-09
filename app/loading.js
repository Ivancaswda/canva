import {Loader2Icon} from "lucide-react";
import React from "react";

export default function Loading() {
  // Stack uses React Suspense, which will render this page while user data is being fetched.
  // See: https://nextjs.org/docs/app/api-reference/file-conventions/loading
  return <><div className='w-full h-[100vh] flex items-center justify-center'>
    <div>
      <Loader2Icon className='animate-spin text-primary size-10'/>
    </div>
  </div></>;
}
