import '../Places.css';
import image1 from '../../../images/germany/berlin.jpg';
import image2 from '../../../images/germany/Munich.jpg';
import image3 from '../../../images/germany/Neuschwanstein Castle.jpg';
import image4 from "../../../images/germany/Hamburg.jpg";
import image5 from '../../../images/germany/Cologne.jpg';

const  Paris = () =>{
    return(
  <div className="placeContent">
             
      
                <div className='placeHeading'>
                    <h1>Welcome to Germany!</h1>
                
                <p >
                A Tapestry of History and ModernityDiscover the Allure of GermanyGermany,
                a country steeped in rich history and vibrant culture,
                offers diverse landscapes,historic towns, and cutting-edge cities.
                From fairy-tale castles to bustling urban centers,
                there's something for every traveler.
                </p>
                
                <hr/>
                <h1>Must-Visit Destinations</h1>
                <hr/>
                </div>
                <div className='placeDetial'>
                <div className='box'>
                <h1>Berlin:</h1>
                <img src={image1} alt='' />
                <p>
                The capital city is a hub of history and culture. Explore the Berlin Wall,
                Brandenburg Gate, and Museum Island, along with its vibrant art scene and nightlife.</p>
                </div>
                <div className='box'>
                <h1>Munich:</h1>
                <img src={image2} alt='' />
                <p>
                Famous for Oktoberfest, this Bavarian city is known for its beautiful parks,
                stunning architecture, and delicious cuisine, including pretzels and beer.</p>
                </div>
                <div className='box'>
                <h1>Neuschwanstein Castle:</h1> 
                <img src={image3} alt='' />
                <p>
                Nestled in the Bavarian Alps, this fairy-tale castle inspired
                Disney's Sleeping Beauty Castle and offers breathtaking views.</p>
                </div></div>
                <div className='placeDetial'>
                <div className='box'>
                <h1>Hamburg: </h1> 
                <img src={image4} alt='' />
                <p>
                Discover Germany's second-largest city, known for its historic port,vibrant nightlife,
                and the stunning Elbphilharmonie concert hall.</p>
                </div>
                <div className='box'>
                <h1>Cologne:</h1> 
                <img src={image5} alt='' />
                <p>
                Visit the iconic Cologne Cathedral, a UNESCO World Heritage Site,
                and explore the charming Old Town along the Rhine River.
                </p>
                </div></div>
                <p className='endPlace'>
                Experience the enchanting charm of Germany—where history meets innovation!
                </p>
        </div>
    );
};

export default Paris;