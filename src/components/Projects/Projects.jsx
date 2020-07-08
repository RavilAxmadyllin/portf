import React from 'react'
import styles from'./Projects.module.css'
import Title from '../Block/Title'
import Work from './Work'
import classes from '../Block/ContainerClass.module.css'
function Project() {
   return(
       <div className={styles.projectsWrap}>
           <div className={classes.container}>
               <Title title={'My work'}/>
               <div className={styles.projects}>
                       <Work title={'social-network'} discription={'React Redux'}/>
                       <Work title={'TodoList'} discription={'React Redux'}/>
                       <Work title={'Simple counter'} discription={'React Redux'}/>
                       <Work title={'social-network'} discription={'React Redux'}/>

               </div>

           </div>


       </div>
   )
}
export default Project