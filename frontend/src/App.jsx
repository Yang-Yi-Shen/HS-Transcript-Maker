import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/create" element={<Create />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
