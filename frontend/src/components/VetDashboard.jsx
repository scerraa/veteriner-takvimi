import React, { useContext } from 'react'
import { VetContext } from '../context/VetContext'

const VetDashboard = () => {
  const { currentVet, appointments } = useContext(VetContext)

  if (!currentVet) return <p>Please log in as a vet.</p>

  const myAppointments = appointments.filter(a => a.vetId === currentVet.id)

  return (
    <div>
      <h2>{currentVet.name}'s Appointments</h2>
      <ul>
        {myAppointments.map(a => (
          <li key={a.id}>{a.userName} - {a.date}</li>
        ))}
      </ul>
    </div>
  )
}

export default VetDashboard
