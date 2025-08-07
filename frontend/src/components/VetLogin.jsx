import React, { useContext, useState } from 'react'
import { VetContext } from '../context/VetContext'
import { useNavigate } from 'react-router-dom'

const VetLogin = () => {
  const { loginVet } = useContext(VetContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    const ok = loginVet(email, password)
    if (ok) navigate('/vet/dashboard')
    else setError('Invalid credentials')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Vet Login</h2>
      {error && <p>{error}</p>}
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  )
}

export default VetLogin
