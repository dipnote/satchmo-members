import Form from "@/components/Form"
import Member from "@/components/Member"
import styles from "@/styles/Page.module.css"
import { createHash } from "crypto"
import { MongoClient } from "mongodb"
import { cookies } from "next/headers"

const getMembers = async (info: string) => {
  const db = (await new MongoClient(process.env.MONGO!).connect()).db(
    "dbAmSpaces"
  )

  const nextCookies = cookies()

  if (
    nextCookies.get("log")?.value ==
      createHash("sha256").update(process.env.PASSWORD!).digest("hex") &&
    info
  ) {
    const members = await db
      .collection("colSatchmo")
      .find({
        $or: [
          {
            name_first: { $regex: `^${info}$`, $options: "i" },
          },
          {
            phone_mobile: { $regex: info },
          },
        ],
      })
      .sort({ name_father: 1 })
      .toArray()

    return members
  }

  return []
}

const Home = async (context: any) => {
  const info = context.searchParams.info

  const members = await getMembers(info)

  return (
    <div className={styles.container}>
      <Form />

      {members.length != 0
        ? members.map((member, i) => <Member key={i} member={member} />)
        : info && <p>{info} not found</p>}
    </div>
  )
}

export default Home
