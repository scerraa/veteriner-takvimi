import { Routes, Route, Link } from 'react-router-dom'
import SearchVets from './components/SearchVets'
import VetRegister from './components/VetRegister'
import VetLogin from './components/VetLogin'
import VetDashboard from './components/VetDashboard'
import MakeAppointment from './components/MakeAppointment'

export default function App() {
  return (
    <div className="mx-auto w-full max-w-3xl p-4 sm:p-6">
      <nav className="mb-6 flex flex-col items-center gap-2 rounded bg-blue-600 p-4 text-white sm:flex-row sm:justify-center sm:gap-4">
        <Link className="hover:underline" to="/">Home</Link>
        <Link className="hover:underline" to="/vet/register">Vet Register</Link>
        <Link className="hover:underline" to="/vet/login">Vet Login</Link>
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

