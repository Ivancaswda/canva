import React from 'react'
import {useState} from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useContext} from "react";
import {UserDetailContext} from "@/context/UserDetailContext";
import {toast} from "sonner";
import {useMutation} from "convex/react";
import {api} from "@/convex/_generated/api";
import {Loader} from "lucide-react";
import {useRouter} from "next/navigation";

const CustomCanvasDialog = ({children}) => {
    const [name, setName] = useState('')
    const [width, setWidth] = useState()
    const [height, setHeight] = useState()
    const createDesignRecord = useMutation(api.designs.CreateNewDesign)
    const {userDetail} = useContext(UserDetailContext) // getting data where we can access userId = uid
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const onCreate = async (option) => {

        setLoading(true)
        console.log(userDetail)
        const result = await createDesignRecord({
            name: name,
            width: Number(width),
            height: Number(height),
            uid: userDetail?._id
        })
        toast('Вы успешно создали canva проект')
        setLoading(false)
        console.log(result)
        // navigate to editor screen
        router.push(`/design/${result}`)

    }

    return (
        <Dialog>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Создать canva проект?</DialogTitle>
                    <DialogDescription asChild>
                            <div>
                                <h2 className='text-sm'>Предоставьте проекту название, длину и ширину</h2>
                                <div className='mt-5'>
                                    <label >Название проекта</label>
                                    <Input onChange={(e) => setName(e.target.value)} className='mt-2 w-full'  placeholder={'Design Name'}/>
                                    <div className=' mt-1 flex gap-5 w-full'>
                                        <div>
                                            <label for="">длина</label>
                                            <Input type='number' onChange={(e) => setWidth(e.target.value)} className='mt-2 w-full' placeholder={708}/>
                                        </div>
                                        <div>
                                            <label for="">ширина</label>
                                            <Input type='number' onChange={(e) => setHeight(e.target.value)} className='mt-2 w-full' placeholder={708}/>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-end mt-6'>
                                    <Button disabled={loading && !name || !width || !height} onClick={onCreate} className='w-full cursor-pointer '>{loading ? <Loader className='animate-spin'/> : 'Create'}</Button>
                                </div>
                            </div>

                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    )
}
export default CustomCanvasDialog
