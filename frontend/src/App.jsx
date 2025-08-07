import { Routes, Route, Link } from 'react-router-dom'
import SearchVets from './components/SearchVets'
import VetRegister from './components/VetRegister'
import VetLogin from './components/VetLogin'
import VetDashboard from './components/VetDashboard'
import MakeAppointment from './components/MakeAppointment'

export default function App() {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <nav className="mb-6 flex space-x-4 rounded bg-blue-600 p-4 text-white">
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