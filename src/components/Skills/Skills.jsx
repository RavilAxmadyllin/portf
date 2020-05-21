import React from "react";
import styles from './Skills.module.css'
import Title from "../Block/Title";
import { faCode, faLaptopCode, faCogs} from '@fortawesome/free-solid-svg-icons'
import {faReact } from '@fortawesome/free-brands-svg-icons'
import SkillsBlock from "../Block/SkillsBlock";

function Skills() {
    return(
        <div className={styles.skills}>
            <div className={'container'}>
                <Title title={'My Skills'}/>
                <div className={styles.skillsWrap}>
                        <SkillsBlock title={'HTML & CSS'} icon={faCode}/>
                        <SkillsBlock title={'Javascript'} icon={faLaptopCode}/>
                        <SkillsBlock title={'React'} icon={faReact}/>
                        <SkillsBlock title={'Redux'} icon={faCogs}/>
                </div>
            </div>
        </div>
    )
}

export default Skills