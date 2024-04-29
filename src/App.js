import React from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route
                    path="/entertainment"
                    element={<News key="entertainment" pageSize={9} category="entertainment" />}
                />
                <Route
                    path="/business"
                    element={<News key="business" pageSize={9} category="business" />}
                />
                <Route
                    path="/health"
                    element={<News key="health" pageSize={9} category="health" />}
                />
                <Route
                    path="/science"
                    element={<News key="science" pageSize={9} category="science" />}
                />
                <Route
                    path="/sports"
                    element={<News key="sports" pageSize={9} category="sports" />}
                />
                <Route
                    path="/technology"
                    element={<News key="technology" pageSize={9} category="technology" />}
                />
            </Routes>
        </Router>
    );
}