import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <Routes>
             <Route path='/' element={<Home />} />
             <Route path="/the-event" element={<About />} />
    </Routes>
  )
}

export default App
