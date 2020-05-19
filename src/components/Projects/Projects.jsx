import React from "react";
import styles from'./Projects.module.css';
import Title from "../Block/Title";
import Work from "./Work";

function Project() {
   return(
       <div>
           <div className="container">
               <Title title={'My work'}/>
               <div className={styles.projects}>
                   <div className={styles.col}>
                       <Work title={'social-network'} discription={'React Redux'}/>
                   </div>
                   <div className={styles.col}>
                       <Work title={'TodoList'} discription={'React Redux'}/>
                   </div>
                   <div className={styles.col}>
                       <Work title={'Simple counter'} discription={'React Redux'}/>
                   </div>
                   <div className={styles.col}>
                       <Work title={'social-network'} discription={'React Redux'}/>
                   </div>
               </div>

           </div>


       </div>
   )
}
export default Project