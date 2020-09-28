import React from 'react'
import styles from './Main.module.css'
import {faGithub, faTelegramPlane, faVk, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import Social from '../Block/Social'
import classes from '../Block/ContainerClass.module.css'
import Particles from 'react-particles-js'

function Main() {
    const particlesOption = {
        'particles': {
            'number': {
                'value': 260,
                'density': {
                    'enable': false
                }
            },
            'size': {
                'value': 3,
                'random': true,
                'anim': {
                    'speed': 4,
                    'size_min': 0.4
                }
            },
            'line_linked': {
                'enable': false
            },
            'move': {
                'random': true,
                'speed': 1,
                'direction': 'top',
                'out_mode': 'out'
            }
        },
        'interactivity': {
            'events': {
                'onhover': {
                    'enable': true,
                    'mode': 'bubble'
                },
                'onclick': {
                    'enable': true,
                    'mode': 'repulse'
                }
            },
            'modes': {
                'bubble': {
                    'distance': 250,
                    'duration': 2,
                    'size': 0,
                    'opacity': 0
                },
                'repulse': {
                    'distance': 400,
                    'duration': 4
                }
            }
        }
    }
    return (
        <>
            <Particles className={'particles'} params={particlesOption}/>
            <div className={styles.main}>
                <div className={classes.container}>
                    <span>Hi there</span>
                    <span className={styles.titleBlock}>I am <span >Ravil Axmadyllin</span></span>
                    <h2 className={styles.text}>
                        Frontend developer.
                    </h2>
                    <div className={styles.social}>
                        <Social icon={faVk}/>
                        <Social icon={faTelegramPlane} path={'https://t.me/miksway'}/>
                        <Social icon={faGithub} path={'https://github.com/RavilAxmadyllin/'}/>
                        <Social icon={faWhatsapp}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main
