import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Lazy-loaded components
const Home = React.lazy(() => import("./UserState1")); // Dynamically import Home component
const About = React.lazy(() => import("./UserState2")); // Dynamically import About component
const Contact = React.lazy(() => import("./UserState3")); // Dynamically import Contact component

function LazyExampleRouter() {
    return (
        <Router>
            <div>
                {/* Navigation Links */}
                <nav>
                    <ul>
                        <li><Link to="/">UserState1</Link></li>
                        <li><Link to="/about">UserState2</Link></li>
                        <li><Link to="/contact">UserState3</Link></li>
                    </ul>
                </nav>

                {/* Suspense wrapper for lazy-loaded routes */}
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </Suspense>
            </div>
        </Router>
    );
}

export default LazyExampleRouter;
