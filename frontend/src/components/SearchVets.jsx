import React, { useContext, useState } from 'react'
import { VetContext } from '../context/VetContext'
import { Link } from 'react-router-dom'
import { FaSearch, FaCalendarPlus } from 'react-icons/fa'
import { ISTANBUL_COUNTIES, VET_EXPERTISE } from '../constants'

const SearchVets = () => {
  const { vets } = useContext(VetContext)
  const [location, setLocation] = useState('')
  const [category, setCategory] = useState('')

  const filtered = vets.filter(
    v =>
      (location === '' || v.location === location) &&
      (category === '' || v.categories === category)
  )

  return (
    <div className="rounded bg-white p-6 shadow">
      <h2 className="mb-4 flex items-center text-2xl font-bold">
        <FaSearch className="mr-2" /> Search Vets
      </h2>
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:gap-2">
        <select
          className="flex-1 rounded border p-2"
          value={location}
          onChange={e => setLocation(e.target.value)}
        >
          <option value="">All Locations</option>
          {ISTANBUL_COUNTIES.map(county => (
            <option key={county} value={county}>
              {county}
            </option>
          ))}
        </select>
        <select
          className="flex-1 rounded border p-2"
          value={category}
          onChange={e => setCategory(e.target.value)}
        >
          <option value="">All Expertise</option>
          {VET_EXPERTISE.map(cat => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
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

