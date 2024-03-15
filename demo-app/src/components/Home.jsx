
import carouselImageOne from '../assets/carousel_image_one.jpg';
import carouselImageTwo from '../assets/carousel_image_two.jpg';
import carouselImageThree from '../assets/carousel_image_three.jpg';

export default function Home() {

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={carouselImageOne} className="d-block w-100" style={{ maxHeight: '90vh' }} alt="slideOne" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>CK CLOTHES</h5>
                  <p>Most Famous Brand In Srilanka</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={carouselImageTwo} className="d-block w-100" alt="slideTwo" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>CK CLOTHES</h5>
                  <p>Most Famous Brand In Srilanka</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={carouselImageThree} className="d-block w-100" alt="slideThree" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>CK CLOTHES</h5>
                  <p>Most Famous Brand In Srilanka</p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="col-sm" style={{ marginTop: '20px' }}>
          One of three columns
        </div>
        <div className="col-sm" style={{ marginTop: '20px' }}>
          One of three columns
        </div>
      </div>
    </div>

  )

}