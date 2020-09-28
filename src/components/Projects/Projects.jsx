import React from 'react'
import styles from './Projects.module.css'
import Title from '../Block/Title'
import Work from './Work'
import classes from '../Block/ContainerClass.module.css'
import Bounce from 'react-reveal'
import decks from '../../assets/img/decks.png'
import social from '../../assets/img/social.png'
import todolist from '../../assets/img/todolist.png'

function Project() {
    return (
        <div className={styles.projectsWrap}>
            <Bounce right>
                <div className={classes.container}>
                    <Title title={'My work'}/>
                    <div className={styles.projects}>
                        {project.map(p => {
                            return <Work key={p.id} title={p.title} image={p.image} link={p.href} code={p.code}/>
                        })}
                    </div>

                </div>
            </Bounce>
        </div>
    )
}

export default Project

const project = [
    {
        id: 1, title: 'social-network', image: social,
        href: 'https://ravilaxmadyllin.github.io/social-network',
        code: 'https://github.com/RavilAxmadyllin/social-network'
    },
    {
        id: 2, title: 'todolist', image: todolist,
        href: 'https://ravilaxmadyllin.github.io/todolist/',
        code: 'https://github.com/RavilAxmadyllin/todolist'
    },
    {
        id: 3, title: 'card-decks', image: decks,
        href: 'https://ravilaxmadyllin.github.io/decks',
        code: 'https://github.com/RavilAxmadyllin/decks'
    },
    {
        id: 4, title: 'message', image: '',
        href: '',
        code: ''
    }
]
