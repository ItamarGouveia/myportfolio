"use client"

import {Link as ScrollLink } from 'react-scroll'


const links = [
    {name:"home",link:"home"},
    {name:"sobre",link:"about"},
    {name:"experiência",link:"journey"},
    {name:"trabalhos",link:"work"},
    {name:"contato",link:"contact"},
]


export const Nav = ({containerStyles, listStyles, linkStyles,spy}) => {
  return (
    <nav className={containerStyles}>
        <ul className={listStyles}>
            {links.map((link, index) =>{
                return (
                <ScrollLink spy={spy} key={index} activeClass='active' to={link.link} smooth className={linkStyles}>
                    {link.name}
                </ScrollLink>
                )
            })}
        </ul>
    </nav>
  )
}
