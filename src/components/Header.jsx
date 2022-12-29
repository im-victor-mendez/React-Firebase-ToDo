import './Header.scss'
import React from 'react'

import ICON_SUN from "../assets/images/icon-sun.svg";
import ICON_MOON from "../assets/images/icon-moon.svg";

import BD_DESKTOP_DARK from "../assets/images/bg-desktop-dark.jpg";
import BD_DESKTOP_LIGHT from "../assets/images/bg-desktop-light.jpg";
import BD_MOBILE_DARK from "../assets/images/bg-mobile-dark.jpg";
import BD_MOBILE_LIGHT from "../assets/images/bg-mobile-light.jpg";

function Header({ theme, setDarkTheme, currentWidth }) {
    function changeTheme() {
        const appElement = document.getElementById('App')

        appElement.style.backgroundColor = (`var(${!theme ? '--very-dark-blue' : '--very-light-gray'})`)
        appElement.style.backgroundImage = (`url(${!theme ?
            (currentWidth ? BD_DESKTOP_DARK : BD_MOBILE_DARK) :
            (currentWidth ? BD_DESKTOP_LIGHT : BD_MOBILE_LIGHT)})`)

        setDarkTheme(!theme)
    }
    
    return (
        <section id='header'>
            <div id='header-top'>
                <h1>TODO</h1>
                <img src={!theme ? ICON_MOON : ICON_SUN} alt=""
                onClick={changeTheme}
                />
            </div>
        </section>
    )
}

export default Header