
import './App.css'
import reactLogo from './assets/react.svg'
import Home from './components/Home'
import AOS from 'aos'
import 'aos/dist/aos.js'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


function App() {

  useEffect(()=>{
    AOS.init({
      duration:3000
    })
  },[])


  return (

    <div className='container-fluid'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <img src={reactLogo}></img>
          <a className="navbar-brand" href="#"></a>
          <span>ICET Engineering</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

     <Home></Home>
    </div>



  )
}

export default App
