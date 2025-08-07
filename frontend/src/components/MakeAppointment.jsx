import React, { useContext, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { VetContext } from '../context/VetContext'

const MakeAppointment = () => {
  const { vetId } = useParams()
  const { vets, addAppointment } = useContext(VetContext)
  const vet = vets.find(v => v.id === vetId)
  const [userName, setUserName] = useState('')
  const [date, setDate] = useState('')
  const navigate = useNavigate()

  if (!vet) return <p>Vet not found.</p>

  const handleSubmit = e => {
    e.preventDefault()
    addAppointment({ vetId, userName, date })
    navigate('/')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-md space-y-4 rounded bg-white p-6 shadow"
    >
      <h2 className="text-2xl font-bold">Book Appointment with {vet.name}</h2>
      <input
        className="w-full rounded border p-2"
        placeholder="Your Name"
        value={userName}
        onChange={e => setUserName(e.target.value)}
      />
      <input
        className="w-full rounded border p-2"
        type="datetime-local"
        value={date}
        onChange={e => setDate(e.target.value)}
      />
      <button
        className="rounded bg-blue-600 px-4 py-2 text-white"
        type="submit"
      >
        Book
      </button>
    </form>
  )
}

export default MakeAppointment

