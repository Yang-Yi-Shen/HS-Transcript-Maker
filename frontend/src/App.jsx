import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'

import Home from './pages/Home'
import About from './pages/About'
import Create from './pages/Create'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div><Header /><Home /></div>} />
        <Route path="/about" element={<div><Header /><About /></div>} />
        <Route path="/create" element={<div><Header /><Create /></div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
