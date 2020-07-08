import React from 'react'
import styles from './Skills.module.css'
import Title from '../Block/Title'
import classes from '../Block/ContainerClass.module.css'
import { faCode, faLaptopCode, faCogs} from '@fortawesome/free-solid-svg-icons'
import {faReact } from '@fortawesome/free-brands-svg-icons'
import SkillsBlock from '../Block/SkillsBlock'
import Fade from 'react-reveal'

function Skills() {
    return(
        <div className={styles.skills}>
            <Fade top>
                <div className={classes.container}>
                    <Title title={'My Skills'}/>
                    <div className={styles.skillsWrap}>
                        <SkillsBlock title={'HTML & CSS'} icon={faCode}/>
                        <SkillsBlock title={'Javascript'} icon={faLaptopCode}/>
                        <SkillsBlock title={'React'} icon={faReact}/>
                        <SkillsBlock title={'Redux'} icon={faCogs}/>
                        <SkillsBlock title={'Typescript'} icon={faCogs}/>
                    </div>
                </div>
            </Fade >
        </div>
    )
}

export default Skills