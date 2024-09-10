import profilePicture from '../assets/profile-picture.png';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import '../styles/Header.css';

function Header() {
    return (
        <header>
            <div className='header-jumbotron'>
                <img src={profilePicture} alt="" />
                <h3>Ahmad Chairiansyah</h3>
                <p>Informatics Student of Syiah Kuala University</p>
                <div className='socialMedia'>
                    <a href=""><FaGithub /></a>
                    <a href=""><FaLinkedin /></a>
                    <a href=""><FaInstagram /></a>
                    <a href=""><FaFacebook /></a>
                </div>
            </div>
        </header>
    )
}

export default Header