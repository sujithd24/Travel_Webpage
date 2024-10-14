import '../Places.css';
import image1 from '../../../images/switzerland/zermatt.jpg';
import image2 from '../../../images/switzerland/Lucerne.jpg';
import image3 from '../../../images/switzerland/Interlaken.jpg';
import image4 from "../../../images/switzerland/Geneva.jpg";
import image5 from '../../../images/switzerland/Zurich.jpg';


const Shimla = () =>{
    return(
        <div className="placeContent">
      
        <div className='placeHeading'>
            <h1>Welcome to Switzerland!</h1>
        
        <p >
        The Heart of the AlpsDiscover the Beauty of SwitzerlandSwitzerland,
        renowned for its stunning landscapes, charming villages,
        and vibrant cities, is a paradise for nature lovers and adventure seekers alike.
        From the majestic Alps to serene lakes Switzerland captivates every visitor.
        </p>
        
        <hr/>
        <h1>Must-Visit Destinations</h1>
        <hr/>
        </div>
        <div className='placeDetial'>
        <div className='box'>
        <h1>Zermatt:</h1>
        <img src={image1} alt='' />
        <p>
        Home to the iconic Matterhorn, this car-free village offers world-class skiing,
        hiking and breathtaking mountain views.</p>
        </div>
        <div className='box'>
        <h1>Lucerne:</h1>
        <img src={image2} alt='' />
        <p>
        Explore this picturesque city with its stunning lake, historic Chapel Bridge, and the Swiss Museum of Transport.</p>
        </div>
        <div className='box'>
        <h1>Interlaken:</h1> 
        <img src={image3} alt='' />
        <p>
        Nestled between Lake Thun and Lake Brienz, Interlaken is an adventure
        hub offering activities like paragliding, hiking, and water sports.</p>
        </div></div>
        <div className='placeDetial'>
        <div className='box'>
        <h1>Geneva:</h1> 
        <img src={image4} alt='' />
        <p>
        Known for its Red Cross headquarters and international organizations,
        Geneva boasts beautiful parks, a stunning lakefront, and rich cultural offerings.</p>
        </div>
        <div className='box'>
        <h1>Zurich:</h1> 
        <img src={image5} alt='' />
        <p>
        Switzerland's largest city offers a mix of modernity and history
        with a vibrant arts scene, shopping districts, and the picturesque Old Town.
        </p>
        </div></div>
        <p className='endPlace'>
        Experience the enchanting charm of Switzerland—where every moment is a postcard!
        </p>
        </div>
    );
};

export default Shimla;