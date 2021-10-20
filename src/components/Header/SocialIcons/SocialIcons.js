import { FaLinkedin, FaGithub, FaMailBulk, FaPhone } from 'react-icons/fa'

import './socialIcons.css'

const SocialIcons = () => {
    return (
        <div className='socialIcons'>

            <a href='tel:972502820405' title='Phone'>
                <FaPhone />
            </a>
            <a href='mailto:asafalmog119@gmail.com' title='Email'>
                <FaMailBulk />
            </a>

            <a href='https://www.linkedin.com/in/asaf-almog-b94904117/' title='Linkedin' target='_blank' rel="noreferrer">
                <FaLinkedin />
            </a>

            <a href='https://github.com/asaf6024' title='GitHub' target='_blank' rel="noreferrer">
                <FaGithub />
            </a>

        </div>
    )
}
export default SocialIcons