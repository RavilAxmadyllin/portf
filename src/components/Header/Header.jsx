import React from "react";
import './Header.css'
import Nav from "./Nav/Nav";
import Toggle from "../Block/Toggle";


function Header(props) {
    return(
        <div className={'header'}>
            <Toggle/>
            <div className="header-inner">
                <div className={'header-image'} >
                    <a href="">
                        <img src="https://placekitten.com/340/360" alt="photo"/>
                    </a>
                </div>
                <Nav />
            </div>

        </div>
    )
}
export default Header