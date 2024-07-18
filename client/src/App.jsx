import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Masterclasses from './pages/Masterclasses'
import Speakers from './pages/Speakers'
import Partners from './pages/Partners'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
             <Route path='/' element={<Home />} />
             <Route path="/the-event" element={<About />} />
             <Route path="/masterclasses" element={<Masterclasses />} />
             <Route path='/speakers' element={<Speakers />} />
             <Route path='/partners' element={<Partners />} />
             <Route path='/contact' element={<Contact />} />
    </Routes>
  )
}

export default App
