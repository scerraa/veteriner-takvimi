import { Routes, Route, Link } from 'react-router-dom'
import { FaHome, FaUserPlus, FaSignInAlt } from 'react-icons/fa'
import SearchVets from './components/SearchVets'
import VetRegister from './components/VetRegister'
import VetLogin from './components/VetLogin'
import VetDashboard from './components/VetDashboard'
import MakeAppointment from './components/MakeAppointment'

export default function App() {
  return (
    <div className="mx-auto w-full max-w-3xl p-4 sm:p-6">
      <nav className="mb-6 flex flex-col items-center gap-2 rounded bg-blue-600 p-4 text-white sm:flex-row sm:justify-center sm:gap-4">
        <Link className="flex items-center gap-1 hover:underline" to="/">
          <FaHome /> Home
        </Link>
        <Link className="flex items-center gap-1 hover:underline" to="/vet/register">
          <FaUserPlus /> Vet Register
        </Link>
        <Link className="flex items-center gap-1 hover:underline" to="/vet/login">
          <FaSignInAlt /> Vet Login
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<SearchVets />} />
        <Route path="/vet/register" element={<VetRegister />} />
        <Route path="/vet/login" element={<VetLogin />} />
        <Route path="/vet/dashboard" element={<VetDashboard />} />
        <Route path="/appointment/:vetId" element={<MakeAppointment />} />
      </Routes>
    </div>
  )
}

