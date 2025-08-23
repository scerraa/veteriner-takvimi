import React, { useContext, useState } from 'react'
import { VetContext } from '../context/VetContext'
import { FaCalendarAlt } from 'react-icons/fa'

const VetDashboard = () => {
  const { currentVet, appointments, setAvailability } = useContext(VetContext)
  const [date, setDate] = useState('')
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')

  if (!currentVet) return <p>Please log in as a vet.</p>

  const myAppointments = appointments.filter(a => a.vetId === currentVet.id)
  const availability = currentVet.availability || {}

  const generateSlots = (s, e) => {
    const slots = []
    let current = new Date(`1970-01-01T${s}`)
    const endDate = new Date(`1970-01-01T${e}`)
    while (current < endDate) {
      slots.push(current.toTimeString().slice(0, 5))
      current = new Date(current.getTime() + 30 * 60000)
    }
    return slots
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!date || !start || !end) return
    const slots = generateSlots(start, end)
    setAvailability(date, slots)
    setDate('')
    setStart('')
    setEnd('')
  }

  return (
    <div className="mx-auto max-w-md rounded bg-white p-6 shadow space-y-4">
      <form onSubmit={handleSubmit} className="space-y-2">
        <h3 className="text-xl font-bold">Set Availability</h3>
        <input
          type="date"
          className="w-full rounded border p-2"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
        <div className="flex gap-2">
          <input
            type="time"
            className="flex-1 rounded border p-2"
            value={start}
            onChange={e => setStart(e.target.value)}
          />
          <input
            type="time"
            className="flex-1 rounded border p-2"
            value={end}
            onChange={e => setEnd(e.target.value)}
          />
        </div>
        <button className="rounded bg-blue-600 px-4 py-2 text-white" type="submit">
          Save
        </button>
      </form>
      {Object.keys(availability).length > 0 && (
        <div>
          <h3 className="mb-2 text-xl font-bold">Current Availability</h3>
          <ul className="space-y-1">
            {Object.entries(availability).map(([d, slots]) => (
              <li key={d} className="rounded border p-2">
                {d}: {slots.join(', ')}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div>
        <h2 className="mb-4 flex items-center text-2xl font-bold">
          <FaCalendarAlt className="mr-2" /> {currentVet.name} {currentVet.lastName || ''}'s Appointments
        </h2>
        <ul className="space-y-2">
          {myAppointments.map(a => (
            <li className="rounded border p-2" key={a.id}>
              {a.userName} - {a.date}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default VetDashboard

