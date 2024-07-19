import './Navbar.css'
import linkedinLogo from '../assets/linkedin.svg'
import gmailLogo from '../assets/envelope.svg'
import gitLogo from '../assets/github.svg'
const linkedin = 'https://linkedin.com/in/godwins-tuyishime'
const github = 'https://github.com/T-Godwins'


function Navbar(){
    return(
        <div className='navbar'>
            <div className='left'>
                <button><a href='#' alt=''>About Me</a></button>
                <button><a href='#' alt='Experience'>Experience</a> </button>
                </div>
            <div className='right'>
                <button><a href={linkedin} alt='linked in'><img src={linkedinLogo} className='linkedin' target="_blank" alt='linkedin'></img></a></button>
                <button><a href='#' alt='gmail'><img src={gmailLogo} className='gmail' alt='gmail'></img></a></button>
                <button><a href={github} alt='github'><img src={gitLogo} className='github' alt='github'></img></a></button>
            </div>
        </div>
    
    );
}

export default Navbar