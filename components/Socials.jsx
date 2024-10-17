import React from 'react'
import {RiInstagramFill} from 'react-icons/ri'
import {FaFacebook, FaLinkedin, FaGithub} from 'react-icons/fa'
import  Link  from 'next/link'
const socials = [
    {
        icon:<RiInstagramFill/>,
        path:"https://www.instagram.com/itamarbgouveia/"
    },
    {
        icon:<FaFacebook/>,
        path:"https://www.facebook.com/itamar.batista.de.gouveia/?locale=pt_BR"
    },
    {
        icon:<FaGithub/>,
        path:"https://github.com/ItamarGouveia"
    },
    {
        icon:<FaLinkedin/>,
        path:"https://www.linkedin.com/in/itamargouveia/"
    },
]

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return(
            <Link href={item.path} key={index} className={iconStyles} target='_blank'>
                <span>{item.icon}</span>
            </Link>
            
        )
      })}
    </div>
  )
}

export default Socials
