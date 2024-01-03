'use client'

import { Navbar, Main } from "./components"
import Login from "./login/page"
import { useSelector } from "react-redux"

export default function Home() {
  const auth = useSelector((state: any) => state.auth.isAuthenticated)
  console.log(auth)
  return (
    <>
    {
      auth ?
      <>
        <Navbar />
        <Main />
      </> :
      <Login />
    }
    </>
  )
}
