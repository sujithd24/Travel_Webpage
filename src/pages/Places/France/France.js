import '../Places.css'
import image1 from '../../../images/france/Paris.jpg';
import image2 from '../../../images/france/Provence.jpg';
import image3 from '../../../images/france/French Riviera.jpg';
import image4 from "../../../images/france/Loire Valley.jpg";
import image5 from '../../../images/france/Mont Saint-Michel.jpg';

const France = () =>{
    return(
        <div className="placeContent">
                <div className='placeHeading'>
                    <h1>Welcome to France!</h1>
                
                 
                <p>
                A Timeless JourneyDiscover the Allure of FranceFrance,
                 known for its stunning landscapes, rich history, 
                 and culinary excellence, offers a diverse experience that captivates every traveler.
                </p>
                
                <hr/>
                <h1>Must-Visit Destinations</h1>
                <hr/>
                </div>
                <div className='placeDetial'>
                <div className='box'>
                <h1>Paris:</h1>
                <img src={image1} alt='' />
                <p>
                The City of Light is home to iconic landmarks like the Eiffel Tower, Louvre Museum,and Notre-Dame Cathedral.
                Explore charming neighborhoods like Montmartre and Le Marais.</p>
                </div>
                <div className='box'>
                <h1>Provence:</h1>
                <img src={image2} alt='' />
                <p>
                 Famous for its lavender fields, vineyards, and picturesque villages, Provence is a feast for the senses.</p>
                 </div>
                 <div className='box'>
                <h1>French Riviera:</h1> 
                <img src={image3} alt='' />
                <p>
                Enjoy the glamorous beaches and vibrant nightlife in cities like Nice, Cannes, and Monaco.</p>
                </div></div>
                <div className='placeDetial'>
                <div className='box'>
                <h1>Loire Valley:</h1> 
                <img src={image4} alt='' />
                <p>
                Discover stunning châteaux and lush vineyards in this UNESCO World Heritage region.</p>
                </div>
                <div className='box'>
                <h1>Mont Saint-Michel:</h1> 
                <img src={image5} alt='' />
                <p>
                Visit this breathtaking island commune with its medieval abbey, perched on a rocky  hill.
                </p>
                </div></div>
                <p className='endPlace'>
                Experience the magic of France—where every corner tells a story!
                </p>
        </div>
    );
};

export default France;