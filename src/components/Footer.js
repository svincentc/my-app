import React from 'react'
import FooterStyles from './Footer.module.css'
import LinkedIn from '../linkedIn.svg'

export default function Footer(){
    return(
        <footer>
            <button><img src={LinkedIn} ></img></button>
            <button><img src={LinkedIn} ></img></button>
            <button><img src={LinkedIn} ></img></button>
            <button><img src={LinkedIn} ></img></button>
        </footer>
    )
}