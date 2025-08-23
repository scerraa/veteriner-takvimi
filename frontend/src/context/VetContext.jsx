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
  const [currentVet, setCurrentVet] = useState(() => load('currentVet', null))

  useEffect(() => {
    localStorage.setItem('vets', JSON.stringify(vets))
  }, [vets])

  useEffect(() => {
    localStorage.setItem('appointments', JSON.stringify(appointments))
  }, [appointments])

  useEffect(() => {
    localStorage.setItem('currentVet', JSON.stringify(currentVet))
  }, [currentVet])

  const registerVet = vet => {
    setVets([...vets, { ...vet, id: Date.now().toString() }])
  }

  const loginVet = (email, password) => {
    const vet = vets.find(v => v.email === email && v.password === password)
    setCurrentVet(vet || null)
    return !!vet
  }

  const logoutVet = () => {
    setCurrentVet(null)
  }

  const updateVet = updated => {
    setVets(vets.map(v => (v.id === updated.id ? updated : v)))
    setCurrentVet(updated)
  }

  const setAvailability = (date, slots) => {
    const updated = {
      ...currentVet,
      availability: {
        ...(currentVet?.availability || {}),
        [date]: slots,
      },
    }
    setVets(vets.map(v => (v.id === currentVet.id ? updated : v)))
    setCurrentVet(updated)
  }

  const addAppointment = appt => {
    setAppointments([...appointments, { ...appt, id: Date.now().toString() }])
  }

  return (
    <VetContext.Provider
      value={{
        vets,
        appointments,
        currentVet,
        registerVet,
        loginVet,
        logoutVet,
        updateVet,
        setAvailability,
        addAppointment,
      }}
    >
      {children}
    </VetContext.Provider>
  )
}

