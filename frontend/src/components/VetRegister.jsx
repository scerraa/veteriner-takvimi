import React, { useContext, useState } from 'react'
import { VetContext } from '../context/VetContext'
import { useNavigate } from 'react-router-dom'
import { FaUserPlus, FaPaw } from 'react-icons/fa'

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
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-md space-y-4 rounded bg-white p-6 shadow"
    >
      <h2 className="flex items-center text-2xl font-bold">
        <FaUserPlus className="mr-2" /> Vet Registration
      </h2>
      <input
        className="w-full rounded border p-2"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        className="w-full rounded border p-2"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      <input
        className="w-full rounded border p-2"
        name="password"
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
      />
      <input
        className="w-full rounded border p-2"
        name="location"
        placeholder="Location"
        value={form.location}
        onChange={handleChange}
      />
      <input
        className="w-full rounded border p-2"
        name="categories"
        placeholder="Expertise (comma separated)"
        value={form.categories}
        onChange={handleChange}
      />
      <button
        className="flex items-center gap-2 rounded bg-blue-600 px-4 py-2 text-white"
        type="submit"
      >
        <FaPaw /> Register
      </button>
    </form>
  )
}

export default VetRegister

