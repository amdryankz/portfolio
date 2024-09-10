import { TbBrandKotlin } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { SiAndroidstudio } from "react-icons/si";
import { SiLaragon } from "react-icons/si";
import { SiXampp } from "react-icons/si";
import { FaGit } from "react-icons/fa6";

import '../styles/About.css';

function About() {
    return (
        <section id='about'>
            <div className='wrapper'>
                <h3>About</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, quos!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, praesentium mollitia distinctio quis doloremque ducimus numquam debitis vel, rerum libero hic quibusdam illo odio animi quo earum natus voluptatum dolor.</p>
                <h4>Programming Language & Tools</h4>
                <div className='skills'>
                    <TbBrandKotlin /><FaHtml5 /><FaCss3 /><FaReact /><FaPhp /><FaLaravel /><DiMysql /><SiJavascript /><VscVscode /><SiAndroidstudio /><SiLaragon />
                    <SiXampp /><FaGit /><FaBootstrap />
                </div>
            </div>
        </section>
    )
}

export default About