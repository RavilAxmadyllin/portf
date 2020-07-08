import React from 'react'
import styles from './Main.module.css'
import { faVk, faTelegramPlane, faGithub, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import Social from '../Block/Social'
import classes from '../Block/ContainerClass.module.css'
import Flip from 'react-reveal/Flip'
import Particles from 'react-particles-js';

function Main() {
    const particlesOption = {
        "particles": {
            "number": {
                "value": 260,
                "density": {
                    "enable": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "speed": 4,
                    "size_min": 0.4
                }
            },
            "line_linked": {
                "enable": false
            },
            "move": {
                "random": true,
                "speed": 1,
                "direction": "top",
                "out_mode": "out"
            }
        },
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": true,
                    "mode": "repulse"
                }
            },
            "modes": {
                "bubble": {
                    "distance": 250,
                    "duration": 2,
                    "size": 0,
                    "opacity": 0
                },
                "repulse": {
                    "distance": 400,
                    "duration": 4
                }
            }
        }
    }

    return(
        <>
            <Particles className={'particles'} params={particlesOption}/>
            <div className={styles.main}>
                <Flip top>
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
                </Flip>
            </div>
        </>
    )
}
export default Main