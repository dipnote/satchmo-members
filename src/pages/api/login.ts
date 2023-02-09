import { createHash } from "crypto"
import { NextApiRequest, NextApiResponse } from "next"

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const password = JSON.parse(req.body).password

  if (password == process.env.PASSWORD) {
    res.setHeader(
      "Set-Cookie",
      `log=${createHash("sha256")
        .update(process.env.PASSWORD!)
        .digest("hex")}; Max-Age=${60 * 60 * 8}; Path=/; Secure`
    )
    res.json({ success: true })
  } else {
    res.json({ success: false })
  }
}

export default handler
