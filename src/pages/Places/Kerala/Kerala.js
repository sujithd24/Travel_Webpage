import '../Places.css';
import image1 from '../../../images/kerala/Alleppey.jpg';
import image2 from '../../../images/kerala/Munnar.jpg';
import image3 from '../../../images/kerala/Kochi.jpg';
import image4 from '../../../images/kerala/Thekkady.jpg';
import image5 from '../../../images/kerala/Varkala.jpg';

const Kerala = () =>{
    return(
        <div className="placeContent">
                <div className='placeHeading' >
                    <h1>Welcome to Kerala!</h1>
                
                <p >
                God's Own CountryDiscover the beauty of Kerala,
                a tropical paradise in India known for its lush landscapes, 
                tranquil backwaters, and vibrant culture.
                </p>
                
                <hr/>
                <h1>Must-Visit Destinations</h1>
                <hr/>
                </div>
                <div className='placeDetial'>
                <div className='box'>
                <h1>Alleppey:</h1>
                <img src={image1} alt='' />
                <p>
                Glide through serene backwaters on a traditional houseboat.</p>
                </div>
                <div className='box'>
                <h1>Munnar: </h1>
                <img src={image2} alt='' />
                <p>
                Explore rolling tea plantations and scenic waterfalls.</p>
                </div>
                <div className='box'>
                <h1>Kochi:</h1> 
                <img src={image3} alt='' />
                <p>
                Experience the rich colonial history and vibrant markets.</p>
                </div>
                </div>
                <div className='placeDetial'>
                <div className='box'>
                <h1>Thekkady:</h1> 
                <img src={image4} alt='' />
                <p>
                Spot wildlife in Periyar Wildlife Sanctuary.</p>
                </div>
                <div className='box'>
                <h1>Varkala:</h1> 
                <img src={image5} alt='' />
                <p>
                Relax on stunning beaches with dramatic cliffs.
                </p>
                </div>
                </div>
                <p className='endPlace'>
                Experience the enchanting charm of Kerala—your adventure awaits!
                </p>
        </div>
    );
};

export default Kerala ;