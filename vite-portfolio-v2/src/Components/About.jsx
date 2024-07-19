import './About.css'
import headshot from '../assets/Headshot.jpg'
const python = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg";
const cplus = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg";

function About(){
    return(
        <>
        <div className="about">
            <img src={headshot} alt="Headshot"></img>
            <h2>Learn More About Me</h2>
            <p>I am currently a Data and Information Fellow at Wofford College's Career Center, where I focus on automating and improving data management processes. With a solid foundation in Python and a growing expertise in Tableau, I leverage AI to streamline tasks and enhance data-driven insights. I am also a
            Software Engineering Fellow at Headstarter where I am embarking on building 5 AI projects in 5 weeks.
            </p>
        </div>
        <div className="skills">
            <ul>
                          
                <li>Programming Languages: Python, R, C++</li>
                <img className="python" src={python} alt="python logo"></img>
                {/* <img className="cplus" src={cplus} alt="C++ logo"></img> */}

                <li>Data Analysis Tools: SQL, Tableau, Microsoft Excel</li>
                <li>Other Tools: Microsoft PowerPoint, Adobe Photoshop</li>
                <li>Certifications: Currently pursuing AWS Cloud Practitioner certification</li>
            </ul>
        </div>
        </>
    );
}

export default About