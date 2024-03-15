
import './App.css'
import './index.css'
import Home from './components/Home'
import AOS from 'aos'
import 'aos/dist/aos.js'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Nevigationbar from './components/Navigationbar'


function App() {

  useEffect(() => {
    AOS.init({
      duration: 3000
    })
  }, [])


  return (

    <div>
      <Nevigationbar></Nevigationbar>

      <Home></Home>
    </div>





  )
}

export default App
