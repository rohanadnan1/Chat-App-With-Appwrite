'use client'

import {LoginWrapper, LoginBox, LoginInput, LoginButton} from "../mui-components/LoginStyles"
import {account} from "../appwrite"
import { ID } from "../appwrite"
import { useState } from "react"
import { useRouter } from "next/navigation"
import {useDispatch} from "react-redux"
import { signup } from "../store/authSlice"

const SignupPage = () => {

    const dis = useDispatch()
    const router = useRouter()    
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [name, setName] = useState<string>('')
    const handleSignup = async (email: string, password: string) => {
        const res = await account.create(ID.unique(),email, password, name)
        if(res){
           const acc = await account.createEmailSession(email, password)
            if(acc){
                router.push('/login')
            }
        }
    }
    
    return(
        <LoginWrapper>
            <LoginBox sx={{
                paddingBottom: '2rem',
                height: '70%',
            }}>
                <h1 style={{
                    color: '#fff',
                    fontSize: '3rem',
                }}>Signup</h1>
                <LoginInput placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} />
                <LoginInput placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)} />
                <LoginInput type="password" placeholder="Password" />
                <LoginInput type="password" placeholder="Confirm Password" 
                onChange={(e) => setPassword(e.target.value)}/>
                <LoginButton onClick={()=>handleSignup(email, password)}>Signup</LoginButton>
            </LoginBox>
        </LoginWrapper>
    )
}

export default SignupPage
