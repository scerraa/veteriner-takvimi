import React, { useContext } from 'react'
import { VetContext } from '../context/VetContext'
import { FaCalendarAlt } from 'react-icons/fa'

const VetDashboard = () => {
  const { currentVet, appointments } = useContext(VetContext)

  if (!currentVet) return <p>Please log in as a vet.</p>

  const myAppointments = appointments.filter(a => a.vetId === currentVet.id)

  return (
    <div className="mx-auto max-w-md rounded bg-white p-6 shadow">
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
  )
}

export default VetDashboard

