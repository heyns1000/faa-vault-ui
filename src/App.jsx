import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Index from './pages/Index'
import Meta from './pages/Meta'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index" element={<Index />} />
        <Route path="/meta" element={<Meta />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

