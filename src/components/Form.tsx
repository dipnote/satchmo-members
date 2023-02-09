"use client"

import styles from "@/styles/Form.module.css"
import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"

const Form = () => {
  const [info, setInfo] = useState("")

  const router = useRouter()

  const submit = (e: FormEvent) => {
    e.preventDefault()

    router.push(`?info=${info}`)
  }

  return (
    <div className={styles.container}>
      <form onSubmit={submit}>
        <input
          placeholder="Name or Mobile"
          value={info}
          onChange={(e) => setInfo(e.target.value)}
          pattern="[A-Za-z]{3,}|[0-9]{4,}"
          className={styles.input}
        />

        <button className={styles.button}>Submit</button>
      </form>
    </div>
  )
}

export default Form
