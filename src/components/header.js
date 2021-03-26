import React, { useEffect } from 'react';
import './header.css';
import '../index.css';
import Moon from './assets/moon.png';
import Sun from './assets/sun.png';
import Search from './Search';
import App from '../App';


export default function Header() {

    useEffect((event) => {
        console.log(Sun)
        window.color = false
        let colorMode = document.querySelector('.colormode')
        const listener = () => {
            if (window.color == false) 
            {
            colorMode.src = Moon
            window.color = true
            document.documentElement.setAttribute('data-theme', 'default')
           
            }
            else if (window.color == true) 
            {
            colorMode.src = Sun
            window.color = false
            
            document.documentElement.setAttribute('data-theme', 'light')
            }
        };
        colorMode.addEventListener('click', listener)
        return () => {
            document.removeEventListener('click', listener)
        }
    })
    

    return (
    <div className="header">
        <a href="../App.js">
            <svg className="logo" xmlns="http://www.w3.org/2000/svg" width="122" height="44.6" viewBox="0 0 122 44.6">
                <g id="Groupe_18" data-name="Groupe 18" transform="translate(-811.509 -676.964)">
                    <path id="Tracé_27" data-name="Tracé 27" d="M822.106,688.643V697.8h10.536v8.8H822.106V721.75h-10.6V679.843h25.923v8.8Z" transform="translate(0 -0.485)" fill="#5927ff"/>
                    <path id="Tracé_28" data-name="Tracé 28" d="M857.6,676.964v44.3h-10.6v-44.3Z" transform="translate(-5.984)" fill="#5927ff"/>
                    <path id="Tracé_29" data-name="Tracé 29" d="M876.1,694.245v29.933h-10.6V694.245Z" transform="translate(-9.104 -2.913)" fill="#5927ff"/>
                    <path id="Tracé_30" data-name="Tracé 30" d="M910.794,712.683v.6c0,9.04-7.6,11.135-13.65,11.135s-13.709-2.1-13.709-11.135V705.02c0-9.04,7.663-11.135,13.709-11.135s13.65,2.1,13.65,11.135v.479l-10.6,1.2v-1.857c0-2.275-.838-3.352-3.054-3.352s-3.113,1.078-3.113,3.352v8.621c0,2.275.9,3.353,3.113,3.353s3.054-1.078,3.054-3.353v-1.976Z" transform="translate(-12.126 -2.853)" fill="#5927ff"/>
                    <path id="Tracé_31" data-name="Tracé 31" d="M942.032,706.3l9.878,14.966H940.416L933.95,710.13h-2.695v11.135h-10.6v-44.3h10.6v25.563h2.695l6.466-11.2H951.91Z" transform="translate(-18.401)" fill="#5927ff"/>
                    <path id="Tracé_32" data-name="Tracé 32" d="M865.652,682.653c0-3.174,2.394-4.609,5.329-4.609s5.268,1.436,5.268,4.609-2.335,4.61-5.268,4.61S865.652,685.826,865.652,682.653Z" transform="translate(-9.128 -0.182)" fill="#5927ff"/>
                </g>
            </svg>
        </a>
        <div className="navbar_right">
            <div className="navbar">
                <img className="colormode" src={Moon}/>
            </div>
        </div>
    </div>
  )

}








