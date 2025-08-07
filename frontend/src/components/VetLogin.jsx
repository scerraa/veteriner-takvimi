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
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-md space-y-4 rounded bg-white p-6 shadow"
    >
      <h2 className="text-2xl font-bold">Vet Login</h2>
      {error && <p className="text-red-500">{error}</p>}
      <input
        className="w-full rounded border p-2"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        className="w-full rounded border p-2"
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button className="rounded bg-blue-600 px-4 py-2 text-white" type="submit">
        Login
      </button>
    </form>
  )
}

export default VetLogin

