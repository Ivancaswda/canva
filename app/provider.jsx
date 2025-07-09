'use client'
import React from 'react'
import {api} from "@/convex/_generated/api";
import {useUser} from "@stackframe/stack";
import {useState, useEffect} from 'react'
import {useMutation} from 'convex/react'

import {CreateNewUser} from "@/convex/users";
import {UserDetailContext} from "@/context/UserDetailContext";

const Provider = ({ children }) => {
    const [userDetail, setUserDetail ] = useState(null)


    const user = useUser()

    const createNewUserMutation = useMutation(api.users.CreateNewUser)

    useEffect(() => {
        if (user) {
            CreateUser()
        }
    },[user])

    const CreateUser = async () => {
        const data = {
            name: user?.displayName,
            email: user?.primaryEmail,
            picture: user?.profileImageUrl
        }
        const result = await createNewUserMutation({
            ...data
        })
        console.log(result)
        setUserDetail(result)
    }
    return (
        <div>
            <UserDetailContext.Provider value={{userDetail, setUserDetail}}>
                {children}
            </UserDetailContext.Provider>

            </div>
    )
}
export default Provider
