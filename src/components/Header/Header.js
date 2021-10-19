import React from "react";

//css
import './header.css'
import SocialIcons from "./SocialIcons/SocialIcons";

const Header = () => {

    return <div className='header'>
        <div className='icons'>
            <SocialIcons />
        </div>
        <h1 className='text-center font-weight-bold'>Find My ATM - Asaf Almog</h1>

        <br />
    </div>

}
export default Header