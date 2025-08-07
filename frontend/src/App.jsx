import { Routes, Route, Link } from 'react-router-dom'
import SearchVets from './components/SearchVets'
import VetRegister from './components/VetRegister'
import VetLogin from './components/VetLogin'
import VetDashboard from './components/VetDashboard'
import MakeAppointment from './components/MakeAppointment'

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/vet/register">Vet Register</Link> | <Link to="/vet/login">Vet Login</Link>
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
