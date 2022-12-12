import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home/home';
import About from './Components/About/about';
import Contact from './Components/Contact/contact';
import Layout from './Components/Layout/layout';
import Error from './Components/Error/error';
import Project from './Components/Project/project';
import Achievement from './Components/Achievement/achievement';
import './App.scss'

function App() {
  return (
    <> 
      <Routes>  
          <Route path='/' element={<Layout />} >
            <Route index element={<Home/>}/>
            <Route path ='/about' element={<About />} />
            <Route path ="/contact" element={<Contact />}/>
            <Route path ="/project" element={<Project />} />
            <Route path ="/achievement" element={<Achievement />} />
            <Route path ='*' element={<Error />} />
          </Route>
      </Routes>
    </>
  )
}

export default App
