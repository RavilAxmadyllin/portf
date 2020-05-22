import React from "react";
import './Header.css'
import Nav from "./Nav/Nav";
import Toggle from "../Block/Toggle";
import me from '../../assets/img/foto.jpg'


function Header(props) {
    return(
        <div className={'header'}>
            <Toggle/>
            <div className="header-inner">
                <div className={'header-image'} >
                    <a href="">
                        <img src={me} alt="photo"/>
                    </a>
                </div>
                <Nav />
                <p>© 2020 Copyright</p>
            </div>

        </div>
    )
}
export default Header