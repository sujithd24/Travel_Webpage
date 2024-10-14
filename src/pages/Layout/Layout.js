import {  Outlet } from 'react-router-dom';
import './Layout.css'




const Layout = () => {
    return(
    <>

                <div className="navContent">
                    <div className='logo'>
                        <h1>FTS</h1>
                    </div>
                    <div className='home'>
                        <a href='/'><h1>Home</h1></a>
                    </div>
                    <div className='places'>
                        <h1>Places</h1>
                        <div className="placeName">
                            <a href='/kerala'>Kerala</a>
                            <a href='/delhi'>Delhi</a>
                            <a href='/france'>France</a>
                            <a href='/switzerland'>Switzerland</a>
                            <a href='/germany'>Germany</a>
                        </div>
                    </div> 
                    <div className='about'>
                        <a href='/about'><h1>Contact</h1></a>
                    </div>               
                </div>
        <Outlet />

    </>
    );
};

export default Layout;