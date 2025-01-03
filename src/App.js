import React, { useState } from "react";
import Register from "./Component/Register";
import Login from "./Component/Login";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import "./Styles/forms.css";

function App() {
    const [showRegister, setShowRegister] = useState(true);

    return (
        <div>
            <Header />
            <div className="form-toggle">
                <button onClick={() => setShowRegister(true)} className={showRegister ? "active" : ""}>
                    Register
                </button>
                <button onClick={() => setShowRegister(false)} className={!showRegister ? "active" : ""}>
                    Login
                </button>
            </div>
            <div className="form-container">
                {showRegister ? <Register /> : <Login />}
            </div>
            <Footer />
        </div>
    );
}

export default App;


