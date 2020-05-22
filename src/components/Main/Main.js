import React from "react";
import styles from './Main.module.css'
import { faVk, faTelegramPlane, faGithub, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import Social from "../Block/Social";
import classes from '../Block/ContainerClass.module.css'

function Main() {
    return(
        <div className={styles.main}>
            <div className={classes.container}>
                    <h1>Front-end developer</h1>
                    <div className={styles.text}>
                        I'm Axmadyllin Ravil
                    </div>
                <div className={styles.social}>
                    <Social icon={faVk}/>
                    <Social icon={faTelegramPlane}/>
                    <Social icon={faGithub}/>
                    <Social icon={faWhatsapp}/>
                </div>
            </div>
        </div>
    )
}
export default Main