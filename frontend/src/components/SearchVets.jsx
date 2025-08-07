import React, { useContext, useState } from 'react'
import { VetContext } from '../context/VetContext'
import { Link } from 'react-router-dom'
import { FaSearch, FaCalendarPlus } from 'react-icons/fa'

const SearchVets = () => {
  const { vets } = useContext(VetContext)
  const [location, setLocation] = useState('')
  const [category, setCategory] = useState('')

  const filtered = vets.filter(
    v =>
      (location === '' || v.location.toLowerCase().includes(location.toLowerCase())) &&
      (category === '' || v.categories.toLowerCase().includes(category.toLowerCase()))
  )

  return (
    <div className="rounded bg-white p-6 shadow">
      <h2 className="mb-4 flex items-center text-2xl font-bold">
        <FaSearch className="mr-2" /> Search Vets
      </h2>
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:gap-2">
        <input
          className="flex-1 rounded border p-2"
          placeholder="Location"
          value={location}
          onChange={e => setLocation(e.target.value)}
        />
        <input
          className="flex-1 rounded border p-2"
          placeholder="Expertise"
          value={category}
          onChange={e => setCategory(e.target.value)}
        />
      </div>
      <ul className="space-y-2">
        {filtered.map(v => (
          <li className="rounded border p-2" key={v.id}>
            {v.name} ({v.location}) - {v.categories}{' '}
            <Link
              className="inline-flex items-center text-blue-600 hover:underline"
              to={`/appointment/${v.id}`}
            >
              <FaCalendarPlus className="mr-1" /> Make Appointment
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SearchVets

