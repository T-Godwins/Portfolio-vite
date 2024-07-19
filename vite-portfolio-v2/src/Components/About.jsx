import './About.css'
import headshot from '../assets/Headshot.jpg'

function About(){
    return(
        <div className="about">
            <img className="card-image" src={headshot} alt="Headshot"></img>
            <h2 className="card-title">Learn More About Me</h2>
            <p className="card-text">I am currently a Data and Information Fellow at Wofford College's Career Center, where I focus on automating and improving data management processes. With a solid foundation in Python and a growing expertise in Tableau, I leverage AI to streamline tasks and enhance data-driven insights. I am also a
            Software Engineering Fellow at Headstarter where I am embarking on building 5 AI projects in 5 weeks.
            </p>

        </div>
    );
}

export default About