import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './Home.css';
import image from '../../images/bg.jpg';
import image1 from '../../images/homeimg/delhi.jpg';
import image2 from '../../images/homeimg/kerala.jpg';
import image3 from '../../images/homeimg/france.jpg';
import image4 from '../../images/homeimg/switzerland.jpg';
import image5 from '../../images/homeimg/germany.jpg';



const imgstyle = {width:`100%`,height:`-20%`};

const fadeImages = [
  { url: image2 , caption: 'Place : Kerala' },
  { url: image1, caption: 'Place: Delhi' },
  { url: image3, caption: 'Place : France' },
  { url: image4, caption: 'Place : Switzerland' },
  { url: image5, caption: 'Place: Germany' },
  
];



const  mystyle = {
    width:`100%`,
    height:`30%`,
    zIndex:`-10`,
};

function navfunc(index){
 if (index === 0) {window.location.href = '/kerala'; };
 if (index === 1) {window.location.href = '/delhi'};
 if (index === 2) {window.location.href = '/france'};
 if (index === 3) {window.location.href = '/switzerland' };
 if (index === 4) {window.location.href = '/germany' };
};


const Home = () => {

    return(
        <div className='homePage'>

              <div className='hameImage'>
                <img src={image} alt='' style={imgstyle}/>
              </div>
              <div className="homeHeading">
                <h1>Places To View</h1>
              </div>  
              <div className='homeContent'>
                <p>
                Discover the hidden gems and breathtaking landscapes 
                that make a must-visit. Whether you're seeking adventure, culture, 
                or relaxation, our vibrant destination offers something for every traveler.Plan Your 
                TripBrowse our comprehensive guides to find the best accommodations, dining options, 
                and activities tailored to your interests. Whether you're traveling solo, with family, 
                or on a romantic getaway, we've got you covered.
                </p>
              </div>
              <div className='homeSlide'>
              <Fade className="fade">
                {fadeImages.map((image, index) => (
                  <div key={index} onClick={(event)=>navfunc(index)}className="each-fade">
                    <div className="image-container">
                      <img src={image.url} alt={image.caption} style={ mystyle }/>
                    </div>
                    <h2>{image.caption}</h2>
                  </div>
                ))}
              </Fade>
              </div>

        </div>
    );
};

export default Home;