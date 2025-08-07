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
    <form onSubmit={handleSubmit}>
      <h2>Book Appointment with {vet.name}</h2>
      <input placeholder="Your Name" value={userName} onChange={e => setUserName(e.target.value)} />
      <input type="datetime-local" value={date} onChange={e => setDate(e.target.value)} />
      <button type="submit">Book</button>
    </form>
  )
}

export default MakeAppointment
