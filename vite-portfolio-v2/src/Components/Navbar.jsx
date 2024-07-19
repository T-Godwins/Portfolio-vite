import './Navbar.css'
import linkedinLogo from '../assets/linkedin.svg'
import gmailLogo from '../assets/envelope.svg'
import gitLogo from '../assets/github.svg'



function Navbar(){
    return(
        <>
        <div className='navbar'>
                <button><a href='#' alt=''>About Me</a></button>
                <button><a href='#' alt='Experience'>Experience</a> </button>
               
                <button><a href='#' alt='linked in'><img src={linkedinLogo} className='linkedin' alt='linkedin'></img></a></button>
                <button><a href='#' alt='linked in'><img src={gmailLogo} className='gmail' alt='gmail'></img></a></button>
                <button><a href='#' alt='linked in'><img src={gitLogo} className='github' alt='github'></img></a></button>
            
        </div>
        </>
    );
}

export default Navbar