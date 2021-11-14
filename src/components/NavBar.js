import React from 'react'
import logo from "../images/logo.png"
import humIcon from "../images/icons/humIcon.png"
import xIcon from "../images/icons/xIcon.svg"
import { useState } from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const[iconClicked , setIconClicked] = useState(false)
    const[showMenu , setShowMenu] = useState(false)
    const[navClicked , setNavClicked] = useState(0)
    
    const showMenuF = ()=>{
        setIconClicked(!iconClicked)
        setShowMenu(!showMenu)
        
    }
    return (
        <header className="flex jc-sb al-c">
            <img src={logo} alt="" className="logo"/>
            <img src={iconClicked ? xIcon :humIcon} className="humIcon" alt="Menu Icon" onClick={()=>showMenuF()} />
                
                <nav className={!showMenu?"hide":""}>
                    <ul>
                        <li onClick={()=>setNavClicked(0)}><Link to="/" className={navClicked == 0 ? "clicked" : ""}>00 HOME</Link></li>
                        <li onClick={()=>setNavClicked(1)}><Link to="/destination" className={navClicked == 1 ? "clicked" : ""}>01 DESTINATION</Link></li>
                        <li onClick={()=>setNavClicked(2)}><Link to="/crew" className={navClicked == 2 ? "clicked" : ""}>03 CREW</Link></li>
                        <li onClick={()=>setNavClicked(3)}><Link to="/technology" className={navClicked == 3 ? "clicked" : ""}>04 TECHNOLOGY</Link></li>
                    </ul>
                </nav>
            
        </header>
    )
}

export default NavBar
