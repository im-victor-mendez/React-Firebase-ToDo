import './Header.scss'
import React from 'react'
import { useAuthContext } from '../../context/authContext';

import ICON_SUN from "../../assets/images/icon-sun.svg";
import ICON_MOON from "../../assets/images/icon-moon.svg";

import UseTheme from '../../hooks/UseTheme';

function Header() {
    const { user, logout } = useAuthContext()
    const [theme, changeTheme] = UseTheme()

    function onClickLogout() {
        logout()
        window.location.reload()
    }
    
    return (
        <section id='header'>
            <div id='header-top'>
                <h1>TODO</h1>
                <div>
                    <img src={!theme ? ICON_MOON : ICON_SUN} alt=""
                    onClick={changeTheme}
                    />
                    { user && <button id='logout' onClick={onClickLogout}>LogOut</button> }
                </div>
            </div>
        </section>
    )
}

export default Header