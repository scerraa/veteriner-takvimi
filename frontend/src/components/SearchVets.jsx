import React, { useContext, useState } from 'react'
import { VetContext } from '../context/VetContext'
import { Link } from 'react-router-dom'

const SearchVets = () => {
  const { vets } = useContext(VetContext)
  const [location, setLocation] = useState('')
  const [category, setCategory] = useState('')

  const filtered = vets.filter(v =>
    (location === '' || v.location.toLowerCase().includes(location.toLowerCase())) &&
    (category === '' || v.categories.toLowerCase().includes(category.toLowerCase()))
  )

  return (
    <div>
      <h2>Search Vets</h2>
      <input
        placeholder="Location"
        value={location}
        onChange={e => setLocation(e.target.value)}
      />
      <input
        placeholder="Expertise"
        value={category}
        onChange={e => setCategory(e.target.value)}
      />
      <ul>
        {filtered.map(v => (
          <li key={v.id}>
            {v.name} ({v.location}) - {v.categories}{' '}
            <Link to={`/appointment/${v.id}`}>Make Appointment</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SearchVets
