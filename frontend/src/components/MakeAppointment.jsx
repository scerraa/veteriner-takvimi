import React, { useContext, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { VetContext } from '../context/VetContext'
import { FaCalendarCheck, FaCalendarPlus } from 'react-icons/fa'

const MakeAppointment = () => {
  const { vetId } = useParams()
  const { vets, appointments, addAppointment } = useContext(VetContext)
  const vet = vets.find(v => v.id === vetId)
  const [userName, setUserName] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [time, setTime] = useState('')
  const navigate = useNavigate()

  if (!vet) return <p>Vet not found.</p>

  const availability = vet.availability || {}
  const slotsForDate = availability[selectedDate] || []
  const bookedSlots = appointments
    .filter(a => a.vetId === vetId && a.date.startsWith(selectedDate))
    .map(a => a.date.slice(11, 16))
  const freeSlots = slotsForDate.filter(s => !bookedSlots.includes(s))

  const handleSubmit = e => {
    e.preventDefault()
    if (!time) return
    addAppointment({ vetId, userName, date: `${selectedDate}T${time}` })
    navigate('/')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-md space-y-4 rounded bg-white p-6 shadow"
    >
      <h2 className="flex items-center text-2xl font-bold">
        <FaCalendarCheck className="mr-2" /> Book Appointment with {vet.name} {vet.lastName || ''}
      </h2>
      <input
        className="w-full rounded border p-2"
        placeholder="Your Name"
        value={userName}
        onChange={e => setUserName(e.target.value)}
      />
      <input
        className="w-full rounded border p-2"
        type="date"
        value={selectedDate}
        onChange={e => {
          setSelectedDate(e.target.value)
          setTime('')
        }}
      />
      {selectedDate && (
        <select
          className="w-full rounded border p-2"
          value={time}
          onChange={e => setTime(e.target.value)}
        >
          <option value="">Select Time</option>
          {freeSlots.map(slot => (
            <option key={slot} value={slot}>
              {slot}
            </option>
          ))}
        </select>
      )}
      <button
        className="flex items-center gap-2 rounded bg-blue-600 px-4 py-2 text-white"
        type="submit"
      >
        <FaCalendarPlus /> Book
      </button>
    </form>
  )
}

export default MakeAppointment

