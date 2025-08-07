import React, { useContext, useState } from 'react'
import { VetContext } from '../context/VetContext'
import { useNavigate } from 'react-router-dom'

const VetRegister = () => {
  const { registerVet } = useContext(VetContext)
  const [form, setForm] = useState({ name: '', email: '', password: '', location: '', categories: '' })
  const navigate = useNavigate()

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    registerVet(form)
    navigate('/vet/login')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Vet Registration</h2>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} />
      <input name="location" placeholder="Location" value={form.location} onChange={handleChange} />
      <input name="categories" placeholder="Expertise (comma separated)" value={form.categories} onChange={handleChange} />
      <button type="submit">Register</button>
    </form>
  )
}

export default VetRegister
