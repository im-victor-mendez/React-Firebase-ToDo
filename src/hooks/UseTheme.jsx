import React, { useEffect, useState } from 'react'

import BG_DESKTOP_DARK from "../assets/images/bg-desktop-dark.jpg";
import BG_DESKTOP_LIGHT from "../assets/images/bg-desktop-light.jpg";
import BG_MOBILE_DARK from "../assets/images/bg-mobile-dark.jpg";
import BG_MOBILE_LIGHT from "../assets/images/bg-mobile-light.jpg";

/**
 * @constant theme | true = Dark theme, false = Light theme
 * @returns theme,
 */
function UseTheme() {
    const [theme, setTheme] = useState(null)

    const currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
    const currentWidth = window.matchMedia('(min-width: 720px)').matches

    useEffect(() => {
      if (currentTheme) setTheme(true); else setTheme(false);
    }, [])
    

    function changeTheme() {
        const appElement = document.getElementById('App')

        appElement.style.backgroundColor = (`var(${!theme ? '--very-dark-blue' : '--very-light-gray'})`)
        appElement.style.backgroundImage = (`url(${!theme ?
            (currentWidth ? BG_DESKTOP_DARK : BG_MOBILE_DARK) :
            (currentWidth ? BG_DESKTOP_LIGHT : BG_MOBILE_LIGHT)})`)
        
        setTheme(!theme)
    }

    return [theme, changeTheme]
}

export default UseTheme