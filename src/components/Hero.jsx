import { useEffect, useState } from "react"
import styles from "./Hero.module.css"

export default function Hero() {
  const [text, setText] = useState("")
  const full = "Desenvolvedor Front End"

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      setText((t) => full.slice(0, i + 1))
      i++
      if (i >= full.length) {
        clearInterval(timer)
      }
    }, 80)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className={styles.hero}>
      <div className="container">
        <h1 className={styles.name}>Junior Barros</h1>
        <p className={styles.subtitle}>{text}</p>
      </div>
    </section>
  )
}