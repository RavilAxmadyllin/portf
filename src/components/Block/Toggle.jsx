import React from "react";
import './toggle.css'

class Toggle extends React.Component {
    state={
        active:false
    }
    onActive = () => {
        this.setState({active:!this.state.active})
    }
    render() {
   let activeClass =  !this.state.active ? 'menu-icon' : 'menu-icon menu-icon-active'

        return (
            <div className="menu-icon-wrapper">
                <div className={activeClass} onClick={this.onActive}></div>
            </div>
        )
    }
}

export default Toggle