import { useState } from "react"

export default function Contact() {
  const [nome, setNome] = useState("")
  const [mensagem, setMensagem] = useState("")

  const enviarWhats = (e) => {
    e.preventDefault()
    const texto = `Olá! Me chamo ${nome}, ${mensagem}`
    const url = `https://wa.me/5561981974009?text=${encodeURIComponent(texto)}`
    window.open(url, "_blank")
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contato</h2>

        <form onSubmit={enviarWhats} className="contact-form">
          <input
            type="text"
            placeholder="Seu Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />

          <textarea
            placeholder="Sua Mensagem"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            required
          />

          <button type="submit" className="btn btn-primary">
            Enviar via WhatsApp
          </button>
        </form>
      </div>
    </section>
  )
}