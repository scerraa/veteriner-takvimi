import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { FaHome, FaUserPlus, FaSignInAlt } from 'react-icons/fa'
import { useContext, useState } from 'react'
import { VetContext } from './context/VetContext'
import SearchVets from './components/SearchVets'
import VetRegister from './components/VetRegister'
import VetLogin from './components/VetLogin'
import VetDashboard from './components/VetDashboard'
import MakeAppointment from './components/MakeAppointment'
import EditProfile from './components/EditProfile'

export default function App() {
  const { currentVet, logoutVet } = useContext(VetContext)
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const handleLogout = () => {
    logoutVet()
    setOpen(false)
    navigate('/vet/login')
  }

  return (
    <div className="mx-auto w-full max-w-3xl p-4 sm:p-6">
      <nav className="mb-6 flex flex-col items-center gap-2 rounded bg-blue-600 p-4 text-white sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2 sm:gap-4">
          <Link className="flex items-center gap-1 hover:underline" to="/">
            <FaHome /> Home
          </Link>
          {!currentVet && (
            <>
              <Link className="flex items-center gap-1 hover:underline" to="/vet/register">
                <FaUserPlus /> Vet Register
              </Link>
              <Link className="flex items-center gap-1 hover:underline" to="/vet/login">
                <FaSignInAlt /> Vet Login
              </Link>
            </>
          )}
        </div>
        {currentVet && (
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-2 focus:outline-none"
            >
              {currentVet.photo && (
                <img
                  src={currentVet.photo}
                  alt="avatar"
                  className="h-8 w-8 rounded-full object-cover"
                />
              )}
              <span>
                {currentVet.name} {currentVet.lastName || ''}
              </span>
            </button>
            {open && (
              <div className="absolute right-0 mt-2 w-40 rounded bg-white text-black shadow">
                <Link
                  to="/vet/profile"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setOpen(false)}
                >
                  Edit Profile
                </Link>
                <button
                  className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<SearchVets />} />
        <Route path="/vet/register" element={<VetRegister />} />
        <Route path="/vet/login" element={<VetLogin />} />
        <Route path="/vet/dashboard" element={<VetDashboard />} />
        <Route path="/vet/profile" element={<EditProfile />} />
        <Route path="/appointment/:vetId" element={<MakeAppointment />} />
      </Routes>
    </div>
  )
}

