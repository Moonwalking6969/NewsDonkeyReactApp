import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import { Link } from "react-router-dom";

const Home = () => {
    useEffect(() => {
        document.title = 'NewsDonkey - Get News Free';
    }, []);

    const [activeButtonIndex, setActiveButtonIndex] = useState(0);

    // Function to toggle active button index
    const toggleActiveButton = () => {
        setActiveButtonIndex((prevIndex) => (prevIndex + 1) % 6);
    };

    // Toggle active button index periodically
    useEffect(() => {
        const intervalId = setInterval(toggleActiveButton, 700); // Toggle every second
        return () => clearInterval(intervalId); // Cleanup function
    }, []);

    const getButtonBackgroundColor = (index) => {
        return index === activeButtonIndex ? '#CC0000' : 'black';
    };

    return (
        <>
            <Navbar />
            <div className="container my-5" style={{ padding: '20px' }}>
                <h1>Welcome to NewsDonkey</h1>
                <div style={{ textAlign: 'center' }}>
                    <img src="https://i.ibb.co/cgsnwR4/Untitled.png" alt="Untitled" border="0"
                         style={{ display: 'block', margin: 'auto' }} />
                </div>
                <h4 className="my-2">Stay informed with the latest news from around the globe. NewsDonkey brings you the
                    most important headlines, curated just for you.</h4>
                <h5 className="my-2">Select a Category and indulge in the sea of news</h5>
                <div>
                    <Link to="/business"><button className="btn btn-dark my-2 mx-4" style={{ backgroundColor: getButtonBackgroundColor(0) }}>Business</button></Link>
                    <Link to="/entertainment"><button className="btn btn-dark my-2 mx-4" style={{ backgroundColor: getButtonBackgroundColor(1) }}>Entertainment</button></Link>
                    <Link to="/health"><button className="btn btn-dark my-2 mx-4" style={{ backgroundColor: getButtonBackgroundColor(2) }}>Health</button></Link>
                    <Link to="/science"><button className="btn btn-dark my-2 mx-4" style={{ backgroundColor: getButtonBackgroundColor(3) }}>Science</button></Link>
                    <Link to="/sports"><button className="btn btn-dark my-2 mx-4" style={{ backgroundColor: getButtonBackgroundColor(4) }}>Sports</button></Link>
                    <Link to="/technology"><button className="btn btn-dark my-2 mx-4" style={{ backgroundColor: getButtonBackgroundColor(5) }}>Technology</button></Link>
                </div>
                <h5 className="my-4">Explore different categories to discover news articles covering various topics:</h5>
                <ul className="my-2" style={{ fontSize: '20px' }}>
                    <li>Stay up-to-date with the latest business trends.</li>
                    <li>Enjoy the latest entertainment news, including movies, music, and celebrity gossip.</li>
                    <li>Learn about the latest health discoveries and wellness tips.</li>
                    <li>Discover groundbreaking scientific research and discoveries.</li>
                    <li>Follow your favorite sports teams and athletes.</li>
                    <li>Stay informed about the latest technology innovations and gadgets.</li>
                </ul>
            </div>
        </>
    );
}

export default Home;
