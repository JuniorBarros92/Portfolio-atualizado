import { useState } from "react"

export default function Navbar() {
  const [active, setActive] = useState(false)

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">Junior Barros</div>

        <ul className={`nav-links ${active ? "active" : ""}`}>
          <li><a href="#home">Início</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#skills">Habilidades</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>

        <div
          className={`hamburger ${active ? "active" : ""}`}
          onClick={() => setActive(!active)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}