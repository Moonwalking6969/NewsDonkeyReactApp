import React, {useState} from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import Home from './Home.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

const App=()=> {
    const [progress, setProgress] = useState(0);

    return (
        <Router>
            <Navbar/>
            <LoadingBar color='#f11946' progress={progress}/>
            <Routes>
                <Route path="/" element={<Home key="home"/>}/>
                <Route path="/entertainment" element={<News setProgress={setProgress} key="entertainment" category="entertainment"/>}/>
                <Route path="/business" element={<News setProgress={setProgress} key="business" category="business"/>}/>
                <Route path="/health" element={<News setProgress={setProgress} key="health" category="health"/>}/>
                <Route path="/science" element={<News setProgress={setProgress} key="science" category="science"/>}/>
                <Route path="/sports" element={<News setProgress={setProgress} key="sports" category="sports"/>}/>
                <Route path="/technology" element={<News setProgress={setProgress} key="technology" category="technology"/>}/>
            </Routes>
        </Router>
    )

}
export default App