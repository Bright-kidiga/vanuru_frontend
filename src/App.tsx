import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Hero from './pages/publicPages/hero/hero.tsx'

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Hero/>} />
          {/* You can add more pages here */}
        </Routes>
      </BrowserRouter>
  )
}

export default App
