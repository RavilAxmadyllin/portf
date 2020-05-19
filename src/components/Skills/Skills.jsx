import React from "react";
import styles from './Skills.module.css'
import Title from "../Block/Title";
import { faCode, faLaptopCode, faCogs} from '@fortawesome/free-solid-svg-icons'
import {faReact } from '@fortawesome/free-brands-svg-icons'
import SkillsBlock from "../Block/SkillsBlock";

function Skills() {
    return(
        <div>
            <div className={'container'}>
                <Title title={'My Skills'}/>
                <div className={styles.skillsWrap}>
                    <div className={styles.skillCol}>
                        <SkillsBlock title={'HTML & CSS'} icon={faCode}/>
                    </div>
                    <div className={styles.skillCol}>
                        <SkillsBlock title={'Javascript'} icon={faLaptopCode}/>
                    </div>
                    <div className={styles.skillCol}>
                        <SkillsBlock title={'React'} icon={faReact}/>
                    </div>
                    <div className={styles.skillCol}>
                        <SkillsBlock title={'Redux'} icon={faCogs}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills