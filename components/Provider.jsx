"use client";
import { SessionProvider } from "next-auth/react"

//sessions are managed by browser so use client
const Provider = ({children}) => {
  return (
    <SessionProvider>
    {children}
    </SessionProvider>
  )
}

export default Provider;