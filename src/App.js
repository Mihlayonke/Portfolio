import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home/home';
import About from './Components/About/about';
import Contact from './Components/Contact/contact';
import Layout from './Components/Layout/layout';
import Error from './Components/Error/error';
import Project from './Components/Project/project';
import Award from './Components/Award/award';
import './App.scss'

function App() {
  return (
    <> 
      <Routes>  
          <Route path='/' element={<Layout />} >
            <Route index element={<Home/>}/>
            <Route path ='/about' element={<About />} />
            <Route path ="/contacts" element={<Contact />}/>
            <Route path ="/projects" element={<Project />} />
            <Route path ="/awards" element={<Award />} />
            <Route path ='*' element={<Error />} />
          </Route>
      </Routes>
    </>
  )
}

export default App
