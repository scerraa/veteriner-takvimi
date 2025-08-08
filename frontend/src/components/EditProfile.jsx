import React, { useContext, useState } from 'react'
import { VetContext } from '../context/VetContext'
import { useNavigate } from 'react-router-dom'
import { FaUserEdit, FaSave } from 'react-icons/fa'
import { ISTANBUL_COUNTIES, VET_EXPERTISE } from '../constants'

const EditProfile = () => {
  const { currentVet, updateVet } = useContext(VetContext)
  const navigate = useNavigate()
  const [form, setForm] = useState(currentVet || {})

  if (!currentVet) return <p>Please log in.</p>

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handlePhoto = e => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => setForm({ ...form, photo: reader.result })
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    updateVet(form)
    navigate('/vet/dashboard')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-md space-y-4 rounded bg-white p-6 shadow"
    >
      <h2 className="flex items-center text-2xl font-bold">
        <FaUserEdit className="mr-2" /> Edit Profile
      </h2>
      <input
        className="w-full rounded border p-2"
        name="name"
        placeholder="Name"
        value={form.name || ''}
        onChange={handleChange}
      />
      <input
        className="w-full rounded border p-2"
        name="lastName"
        placeholder="Last Name"
        value={form.lastName || ''}
        onChange={handleChange}
      />
      <select
        className="w-full rounded border p-2"
        name="location"
        value={form.location || ''}
        onChange={handleChange}
      >
        <option value="">Select Location</option>
        {ISTANBUL_COUNTIES.map(county => (
          <option key={county} value={county}>
            {county}
          </option>
        ))}
      </select>
      <select
        className="w-full rounded border p-2"
        name="categories"
        value={form.categories || ''}
        onChange={handleChange}
      >
        <option value="">Select Expertise</option>
        {VET_EXPERTISE.map(cat => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <input type="file" onChange={handlePhoto} />
      {form.photo && (
        <img
          src={form.photo}
          alt="Preview"
          className="h-20 w-20 rounded-full object-cover"
        />
      )}
      <button
        className="flex items-center gap-2 rounded bg-blue-600 px-4 py-2 text-white"
        type="submit"
      >
        <FaSave /> Save
      </button>
    </form>
  )
}

export default EditProfile
