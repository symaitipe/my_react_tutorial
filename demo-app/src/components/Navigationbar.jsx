
import companyLogo from '../assets/company_Logo.jpg'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";


export default function Navigationbar() {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="outerContainer">

      <div className='container-fluid navBarContainer' >

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid innerNavBarContainer">

            {/* company logo image for search bar */}
            <img
              src={companyLogo}
              className='companyLogoClass'
              style={{
                border: '2px solid green',
                borderRadius: '20%',
                boxShadow: '3px 3px',
                filter: isHovered ? 'brightness(70%)' : 'none'
              }}

              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
            </img>

            {/* Codes for creating a search space and fontawesome image */}
            <a className="navbar-brand" href="#"></a>
            <div className="searchArea collapse navbar-collapse" id="navbarNav">
              <div className="col-auto">

                <div className="input-group mb-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <FontAwesomeIcon icon={faSearch} style={{ height: '30px' }} />
                    </div>
                  </div>
                  <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Username" />
                </div>
              </div>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Listed items in the nav bar */}
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

      </div>
    </div>
  )
}