import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Layout from './Components/Layout';
import Error from './Components/Error';
import Portfolio from './Components/Portfoilo';
import './App.scss'

function App() {
  return (
    <> 
      <Routes>  
          <Route path='/' element={<Layout />} >
            <Route index element={<Home/>}/>
            <Route path ='/about' element={<About />} />
            <Route path ='/portfolio' element={<Portfolio/>} />
            <Route path ="/contact" element={<Contact />}/>
            <Route path='*' element={<Error />} />
          </Route>
      </Routes>
    </>
  )
}

export default App
