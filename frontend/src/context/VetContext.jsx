import React, { createContext, useState, useEffect } from 'react'

export const VetContext = createContext()

const load = (key, fallback) => {
  try {
    const stored = localStorage.getItem(key)
    return stored ? JSON.parse(stored) : fallback
  } catch {
    return fallback
  }
}

export const VetProvider = ({ children }) => {
  const [vets, setVets] = useState(() => load('vets', []))
  const [appointments, setAppointments] = useState(() => load('appointments', []))
  const [currentVet, setCurrentVet] = useState(null)

  useEffect(() => {
    localStorage.setItem('vets', JSON.stringify(vets))
  }, [vets])

  useEffect(() => {
    localStorage.setItem('appointments', JSON.stringify(appointments))
  }, [appointments])

  const registerVet = vet => {
    setVets([...vets, { ...vet, id: Date.now().toString() }])
  }

  const loginVet = (email, password) => {
    const vet = vets.find(v => v.email === email && v.password === password)
    setCurrentVet(vet || null)
    return !!vet
  }

  const addAppointment = appt => {
    setAppointments([...appointments, { ...appt, id: Date.now().toString() }])
  }

  return (
    <VetContext.Provider value={{ vets, appointments, currentVet, registerVet, loginVet, addAppointment }}>
      {children}
    </VetContext.Provider>
  )
}