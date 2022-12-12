import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home/home';
import About from './Components/About/about';
import Contact from './Components/Contact/contact';
import Layout from './Components/Layout/layout';
import Error from './Components/Error/error';
import Portfolio from './Components/Project/project';
import './App.scss'

function App() {
  return (
    <> 
      <Routes>  
          <Route path='/' element={<Layout />} >
            <Route index element={<Home/>}/>
            <Route path ='/about' element={<About />} />
            <Route path ="/contact" element={<Contact />}/>
            <Route path ="/project" element={<Portfolio />} />
            <Route path ='*' element={<Error />} />
          </Route>
      </Routes>
    </>
  )
}

export default App
