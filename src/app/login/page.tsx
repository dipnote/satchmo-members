"use client"

import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"

const Login = () => {
  const [password, setPassword] = useState("")
  const [success, setSuccess] = useState(true)

  const router = useRouter()

  const signIn = async (e: FormEvent) => {
    e.preventDefault()

    const response = await (
      await fetch("http://localhost:3000/api/login", {
        method: "POST",
        body: JSON.stringify({ password }),
      })
    ).json()

    response.success ? router.push("/") : setSuccess(false)
  }

  return (
    <>
      {success || <h1>Inccorect Password</h1>}

      <form onSubmit={signIn}>
        <input
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button>Sign In</button>
      </form>
    </>
  )
}
export default Login
