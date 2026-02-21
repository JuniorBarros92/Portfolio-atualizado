import styles from "./Skills.module.css"
import { useScrollReveal } from "../hooks/useScrollReveal"

export default function Skills() {
  const [ref, visible] = useScrollReveal()

  return (
    <section id="skills">
      <div className="container">
        <h2 className={styles.title}>Habilidades</h2>

        <div ref={ref} className={styles.grid}>
          {[
            { name: "HTML5", level: 85 },
            { name: "CSS3", level: 85 },
            { name: "JavaScript", level: 90 },
            { name: "React", level: 85 },
            { name: "Node.js", level: 50 },
            { name: "Git", level: 80 }
          ].map((skill, index) => (
            <div
              key={index}
              className={`${styles.card} ${visible ? styles.show : ""}`}
            >
              <h3>{skill.name}</h3>
              <div className={styles.bar}>
                <div
                  className={styles.progress}
                  style={{ width: visible ? `${skill.level}%` : 0 }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}