"use client";

import {
  LoginWrapper,
  LoginBox,
  LoginInput,
  LoginButton,
} from "../mui-components/LoginStyles";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";
import {  useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { account } from "../appwrite";

const Login = () => {
  const dis = useDispatch();
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const loginUser = async () => {
    if (email && password) {
      const res = await account.createEmailSession(email, password);
      if (res) {
        const { name } = await account.get();
        dis(login({ name, email }));
        router.push("/");
      }
    }
  };

  const handleUserOnLoad = async () => {
    const res = await account.get();
    const { name, email, $id } = res;
    console.log('responce for id', res.$id)
    dis(login({ name, email, $id }));
    router.push("/");
  }

  useEffect(()=>{
    handleUserOnLoad()
  }, [])


  return (
    <LoginWrapper>
      <LoginBox>
        <h1
          style={{
            color: "#fff",
            fontSize: "3rem",
          }}
        >
          Login
        </h1>
        <LoginInput
          type="email"
          placeholder="Username"
          onChange={(e) => setEmail(e.target.value)}
        />
        <LoginInput
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <LoginButton onClick={loginUser}>Login</LoginButton>
        <Link href="/signup">
          <p>Don't have an account ? Signup.</p>
        </Link>
      </LoginBox>
    </LoginWrapper>
  );
};

export default Login;
