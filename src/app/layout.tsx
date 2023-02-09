import "@/styles/globals.css"
import styles from "@/styles/Layout.module.css"
import Link from "next/link"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Satchmo Members</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </head>
      <body>
        <header>
          <Link href="/">
            <h1 className={styles.header}>Satchmo Members</h1>
          </Link>
        </header>

        <main>{children}</main>

        <footer>
          <div className={styles.footer}></div>
        </footer>
      </body>
    </html>
  )
}
