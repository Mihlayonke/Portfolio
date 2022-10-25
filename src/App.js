import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Layout from './Components/Layout';
//import Layout from './components/Layout'
//import Portfolio from './components/Portfolio' 
//import Dashboard from './components/Dashboard'
import './App.scss'

function App() {
  return (
    <>
        <Layout />
        <Routes>  
            <Route index element={<Home/>}/>
            <Route path ='/about' element={<About />} />
            <Route path ="/contact" element={<Contact />}/>
        </Routes>
    </>
  )
}

export default App
