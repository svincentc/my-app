import React from 'react'
import Simon from '../guide-simon.jpg'
import MyInfoCSS from './MyInfo.module.css'
import LinkedIn from '../linkedIn.svg'
import Email from '../email.svg'

export default function MyInfo(){
    return(
        <div className={MyInfoCSS.myInfoContainer}>
            <img src={Simon} className={MyInfoCSS.img} alt='Simon the Labradoodle.'></img>
            <div>
                <h1 className={MyInfoCSS.whiteTxt}>Sean Cerneskie</h1> 
                <p className={MyInfoCSS.jobTitle }> Frontend Dev</p>
            </div>
            <div className={MyInfoCSS.btnContainer}>
                <button className={MyInfoCSS.contactMe}><img className={MyInfoCSS.LinkedIn} src={Email} ></img>Email</button>
                <button className={MyInfoCSS.linkedInBtn}> <img className={MyInfoCSS.LinkedIn} src={LinkedIn} ></img>LinkedIn</button>
            </div>
        </div>
    )
}
