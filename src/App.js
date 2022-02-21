
import './App.css';
import image1 from './image/1.jpeg';
import image2 from './image/2.jpeg';
import image3 from './image/3.jpeg';
import image4 from './image/4.jpeg';
import image5 from './image/5.jpeg';
import image6 from './image/6.jpeg';
import { AiFillStar } from 'react-icons/ai';
function App() {
  return (
    <div className="container-bg">
      <div className="container">
        <div className="center titles">
          <p className="title">
            Search a best place in the world
          </p>
          <p className="center content">
            Whether you’re looking for places for a vacation. We are here to Guide you
            about the details you need to check in and ease your trips in advance 
          </p>
        </div>
        <div className="items">
          <div className="item">
            <div className="image">
              <img className="image-item" src={image1} alt=""/>
            </div>
            <div className="information">
              <p className="name-info">Batu, East Java</p>
              <p className="address-info">86 Destinations</p>
            </div>
          </div>

          <div className="hot-white item ">
            <div className="image">
              <img className="image-item" src={image2} alt=""/>
            </div>
            <div className="information">
              <p className="name-info">Batu, East Java</p>
              <p className="address-info">86 Destinations</p>
            </div>
          </div>

          <div className="item">
            <div className="image">
              <img className="image-item" src={image3} alt=""/>
            </div>
            <div className="information">
              <p className="name-info">Batu, East Java</p>
              <p className="address-info">86 Destinations</p>
            </div>
          </div>

          <div className="item">
            <div className="image">
              <img className="image-item" src={image4} alt=""/>
            </div>
            <div className="information">
              <p className="name-info">Batu, East Java</p>
              <p className="address-info">86 Destinations</p>
            </div>
          </div>

          <div className="item">
            <div className="image">
              <img className="image-item" src={image2} alt=""/>
            </div>
            <div className="information">
              <p className="name-info">Batu, East Java</p>
              <p className="address-info">86 Destinations</p>
            </div>
          </div>

          <div className="item">
            <div className="image">
              <img className="image-item" src={image1} alt=""/>
            </div>
            <div className="information">
              <p className="name-info">Batu, East Java</p>
              <p className="address-info">86 Destinations</p>
            </div>
          </div>

          <div className="item">
            <div className="image">
              <img className="image-item" src={image5} alt=""/>
            </div>
            <div className="information">
              <p className="name-info">Batu, East Java</p>
              <p className="address-info">86 Destinations</p>
            </div>
          </div>

          <div className="item">
            <div className="image">
              <img className="image-item" src={image6} alt=""/>
            </div>
            <div className="information">
              <p className="name-info">Batu, East Java</p>
              <p className="address-info">86 Destinations</p>
            </div>
          </div>

        </div>
      </div>
  {/* /TOP-TOUR */}
      <div className="top-tour">
        <div className="titles">
          <p className="title">
            Top Tour
          </p>
          <p className="content">
            Keep calm & travel on
          </p>
        </div>
        <div className="container-card">
          <div className="card">
            <div className="image-bg">
              <img className="image-card" src={image5} alt=""/>
            </div>
            <div className="position">
                <p className="name-card">Japan</p>
            </div>
            <div className="information-posi">
              <p className="name-card1">Japan</p>
              <p className="nametop">10 Popular Places</p>
            </div>
          </div>
          <div className="card">
            <div className="image-bg">
              <img className="image-card" src={image4} alt=""/>
            </div>
            <div className="position">
                <p className="name-card">Indonesia</p>
            </div>
            <div className="information-posi">
              <p className="name-card1">Bali</p>
              <p className="nametop">10 Popular Places</p>
            </div>
          </div>
          <div className="card">
            <div className="image-bg">
              <img className="image-card" src={image6} alt=""/>
            </div>
            <div className="position">
                <p className="name-card">Barcelona</p>
            </div>
            <div className="information-posi">
              <p className="name-card1">Spain</p>
              <p className="nametop">10 Popular Places</p>
            </div>
          </div>
          
        </div>
 
        
      </div>
 {/* Trending cites */}
      <div className="trending">
        <div className=" center titles">
            <p className=" title">
              Trending cites
            </p>
            <p className="center content-trending">
              The most searched for cities on TripGuide
            </p>
        </div>
        <div className="container-trending">
          <div className="card-trending">
            <div className="card-left">
              <div className="card-image">
                <img className="image-card-trending" src={image5} alt=""/>
              </div>
            </div>
            <div className="card-right">
              <div className="name-right">Manila</div>
              <div className="star-right"><AiFillStar style={{
                size: '14px',
                color: '#FFD166',
                marginTop:'3px',
              }} />4.56<p className="star">(209)</p></div>
              <div className="night-right">$250.00<p className="night">/night</p></div>
              <div className="btn-right">
                <p className="name-btn">Book Now</p>
              </div>
            </div>
          </div>

          <div className="card-trending">
            <div className="card-left">
              <div className="card-image">
                <img className="image-card-trending" src={image1} alt=""/>
              </div>
            </div>
            <div className="card-right">
              <div className="name-right">Manila</div>
              <div className="star-right"><AiFillStar style={{
                size: '14px',
                color: '#FFD166',
                marginTop:'3px',
              }} />4.56<p className="star">(209)</p></div>
              <div className="night-right">$250.00<p className="night">/night</p></div>
              <div className="btn-right">
                <p className="name-btn">Book Now</p>
              </div>
            </div>
          </div>

          <div className="card-trending">
            <div className="card-left">
              <div className="card-image">
                <img className="image-card-trending" src={image2} alt=""/>
              </div>
            </div>
            <div className="card-right">
              <div className="name-right">Manila</div>
              <div className="star-right"><AiFillStar style={{
                size: '14px',
                color: '#FFD166',
                marginTop:'3px',
              }} />4.56<p className="star">(209)</p></div>
              <div className="night-right">$250.00<p className="night">/night</p></div>
              <div className="btn-right">
                <p className="name-btn">Book Now</p>
              </div>
            </div>
          </div>

          <div className="card-trending">
            <div className="card-left">
              <div className="card-image">
                <img className="image-card-trending" src={image3} alt=""/>
              </div>
            </div>
            <div className="card-right">
              <div className="name-right">Manila</div>
              <div className="star-right"><AiFillStar style={{
                size: '14px',
                color: '#FFD166',
                marginTop:'3px',
              }} />4.56<p className="star">(209)</p></div>
              <div className="night-right">$250.00<p className="night">/night</p></div>
              <div className="btn-right">
                <p className="name-btn">Book Now</p>
              </div>
            </div>
          </div>

          <div className="card-trending">
            <div className="card-left">
              <div className="card-image">
                <img className="image-card-trending" src={image4} alt=""/>
              </div>
            </div>
            <div className="card-right">
              <div className="name-right">Manila</div>
              <div className="star-right"><AiFillStar style={{
                size: '14px',
                color: '#FFD166',
                marginTop:'3px',
              }} />4.56<p className="star">(209)</p></div>
              <div className="night-right">$250.00<p className="night">/night</p></div>
              <div className="btn-right">
                <p className="name-btn">Book Now</p>
              </div>
            </div>
          </div>

          <div className="card-trending">
            <div className="card-left">
              <div className="card-image">
                <img className="image-card-trending" src={image5} alt=""/>
              </div>
            </div>
            <div className="card-right">
              <div className="name-right">Manila</div>
              <div className="star-right"><AiFillStar style={{
                size: '14px',
                color: '#FFD166',
                marginTop:'3px',
              }} />4.56<p className="star">(209)</p></div>
              <div className="night-right">$250.00<p className="night">/night</p></div>
              <div className="btn-right">
                <p className="name-btn">Book Now</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
