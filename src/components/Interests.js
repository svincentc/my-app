import React from 'react'
import AboutStyles from './About.module.css'

export default function MyInterests(){
    return(
        <div className={AboutStyles.aboutMe}>
            <h1> My Interests!</h1>
            <ul className={AboutStyles.listItems}>
                <li>Cooking</li>
                <li>Coffee</li>
                <li>Coding!</li>
            </ul>
        </div>
    )
}