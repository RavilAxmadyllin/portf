import React from "react";
import styles from './Footer.module.css'
import { faVk, faTelegramPlane, faWhatsapp, faGithub} from '@fortawesome/free-brands-svg-icons'
import Social from "../Block/Social";
function Footer() {
    return(
        <footer>
            <div className="container">
                <div className={styles.inner}>
                        <div className={styles.social}>
                            <Social icon={faVk}/>
                            <Social icon={faTelegramPlane}/>
                            <Social icon={faWhatsapp}/>
                            <Social icon={faGithub}/>
                        </div>


                </div>
            </div>
        </footer>
    )
}

export default Footer