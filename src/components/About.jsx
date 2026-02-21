import styles from "./About.module.css";
import foto from "../assets/WhatsApp Image 2025-09-01 at 00.42.09.jpeg";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function About() {
  const [imageRef, imageVisible] = useScrollReveal();
  const [textRef, textVisible] = useScrollReveal();

  return (
    <section id="about">
      <div className="container">
        <h2 className={styles.title}>Sobre Mim</h2>

        <div className={styles.content}>
          <div
            ref={imageRef}
            className={`${styles.image} ${imageVisible ? styles.showLeft : ""}`}
          >
            <img src={foto} alt="Junior" />
          </div>

          <div
            ref={textRef}
            className={`${styles.text} ${textVisible ? styles.showRight : ""}`}
          >
            <p>
              Estudante de Análise e Desenvolvimento de Sistemas e estou
              iniciando minha jornada em Front-End e Design de Interfaces
              (UI/UX). Tenho conhecimentos básicos em HTML,CSS e JavaScript e
              React, estou aprendendo a criar interfaces modernas e funcionais..
              Tenho facilidade em aprender novas tecnologias. Também possuo
              experiência em outras áreas, o que me trouxe visão de equipe,
              disciplina e foco em resultado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
