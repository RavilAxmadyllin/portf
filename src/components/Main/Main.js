import React from "react";
import styles from './Main.module.css'
import { faVk, faTelegramPlane, faGithub} from '@fortawesome/free-brands-svg-icons'
import Social from "../Block/Social";


function Main() {
    return(
        <div className={styles.main}>
            <div className="container">
                    <div><h1>Front-end developer</h1></div>
                    <div>
                        I'm Axmadyllin Ravil
                    </div>
                    <div><h2>contacts</h2></div>
                    <div className={styles.social}>
                        <Social icon={faVk}/>
                        <Social icon={faTelegramPlane}/>
                        <Social icon={faGithub}/>
                </div>
            </div>
        </div>
    )
}
export default Main