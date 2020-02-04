import React from "react";
import './header.css';
import logo from '../../assets/logo/diandika_logo.jpg';

class Header extends React.Component{
    render() {
        return(
            <div className="headerContainer">
                <img className="imageLogo" src={logo} alt="logo"/>
            </div>
        )
    }
}

export default Header;