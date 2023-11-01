import React from "react";

const Header = ()=>{
    return(
        <header className="header">
            <div className="logo">
            <h1>NETFLIX</h1>
            </div>
            <nav className="navi">
                <button className="button">Login</button>
                <button className="button">Signup</button>
                <button className="button">Language</button>
            </nav>
        </header>
    )
}

export default Header;