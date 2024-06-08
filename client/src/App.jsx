import { Route, Routes } from 'react-router-dom'
import './App.css'
import DashboardPage from './pages/DashboardPage'
import FormsPage from './pages/FormsPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<DashboardPage />} />
          <Route path='/forms/:id' element={<FormsPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
