import { useState } from "react"
import styles from "./Cadastro.module.css"

export default function Cadastro() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [age, setAge] = useState("")
  const [users, setUsers] = useState([])

  function handleSubmit(event) {
    event.preventDefault()

    const newUser = {
      id: Date.now(),
      name,
      email,
      age
    }

    setUsers([...users, newUser])

    setName("")
    setEmail("")
    setAge("")  

  }


  return (
    <div className={styles.app}>
      <h1>Cadastro de usuario</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="Nome" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input placeholder="Idade" type="number" value={age} onChange={(e) => setAge(e.target.value)} />

        <button type="submit">Cadastrar</button>
      </form>

      <div className="user-list">
        {users.map((user) => (
          <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.age}</p>
          </div>
        ))}
      </div>

    </div>
  )
}