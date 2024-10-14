import '../Places.css'
import image1 from '../../../images/delhi/India Gate.jpg';
import image2 from '../../../images/delhi/Red Fort.jpg';
import image3 from '../../../images/delhi/Qutub Minar.jpg';
import image4 from "../../../images/delhi/Humayun's Tomb.jpg";
import image5 from '../../../images/delhi/Lotus Temple.jpg';


const Delhi =  () =>{
    return(
        <div className="placeContent">
                <div className='placeHeading'>
                    <h1>Welcome to Delhi!</h1>
                
                      
                <p >
                The Heart of IndiaDiscover the Vibrancy of DelhiDelhi,India's bustling capital,
                is a vibrant blend of history, culture, and modernity.
                From ancient monuments to contemporary art, this city has something for everyone.
                </p>
                
                <hr/>
                <h1>Must-Visit Destinations</h1>
                <hr/>
                </div>
                <div className='placeDetial'>
                <div className='box'>
                <h1>India Gate:</h1>
                <img src={image1} alt='' />
                <p>
                A tribute to Indian soldiers, this iconic war memorial is perfect for a leisurely stroll.</p>
                </div>
                <div className='box'>
                <h1>Red Fort:</h1>
                <img src={image2} alt='' />
                <p>
                A UNESCO World Heritage Site, this majestic fort showcases Mughal architecture and history.</p>
                </div>
                <div className='box'>
                <h1>Qutub Minar:</h1>
                <img src={image3} alt='' /> 
                <p>
                The tallest brick minaret in the world, surrounded by beautiful gardens.</p>
                </div>
                </div>
                <div className='placeDetial'>
                <div className='box'>
                <h1>Humayun's Tomb:</h1> 
                <img src={image4} alt='' />
                <p>
                An exquisite example of Mughal architecture and a precursor to the Taj Mahal.</p>
                </div>
                <div className='box'>
                <h1>Lotus Temple: </h1> 
                <img src={image5} alt='' />
                <p>
                A serene Bahá'í House of Worship, famous for its flower-like architecture.
                </p>
                </div>
                </div> 

                <p className='endPlace'>
                Experience the captivating charm of Delhi—where history meets modern life!
                </p>
        </div>
    );
};

export default Delhi;