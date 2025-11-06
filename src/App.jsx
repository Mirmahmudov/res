
import { BrowserRouter, Routes } from 'react-router'
import './App.css'
import Navbar from './navbar/Navbar'
import { Route } from 'react-router'
import Home from './home/Home'

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
