import { FaLinkedin, FaFacebook, FaGithub, FaMailBulk, FaPhone } from 'react-icons/fa'

import './socialIcons.css'

const SocialIcons = () => {
    return (
        <div className='socialIcons'>


            <a href='tel:972502820405' title='Phone'>
                <FaPhone />
            </a>
            <li>
                <a href='mailto:asafalmog119@gmail.com' title='Email'>
                    <FaMailBulk />
                </a>
            </li>
            <li>
                <a href='https://www.linkedin.com/in/asaf-almog-b94904117/' title='Linkedin' target='_blank'>
                    <FaLinkedin />
                </a>
            </li>
            <li>
                <a href='https://github.com/asaf6024' title='GitHub' target='_blank'>
                    <FaGithub />
                </a>
            </li>
        </div>
    )
}
export default SocialIcons