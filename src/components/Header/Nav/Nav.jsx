import React from 'react'
import './Nav.css'
import {NavLink} from 'react-router-dom'

function Nav(props) {
    return(
        <div className={'nav-menu'} >
            <li onClick={props.changePage}><NavLink to='/home' >home</NavLink></li>
            <li onClick={props.changePage}><NavLink to='/project'>project</NavLink></li>
            <li onClick={props.changePage}><NavLink to='/skills'>skills</NavLink></li>
            <li onClick={props.changePage}><NavLink to='/contacts'>contacts</NavLink></li>
        </div>
    )
}
export default Nav