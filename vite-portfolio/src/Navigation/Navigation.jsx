import styles from './Navigation.module.css'

function Navigation() {
    return(
        <nav className = {styles.Navigation}>
            <ul>
            <div className='sticky'>
                <l1 className = {styles.Navigation}><a href='#' alt= 'About Me'>About Me</a></l1>
                <l1 className = {styles.Navigation}><a href='#' alt= 'Experience'>Experience</a></l1>
                <l1 className = {styles.Navigation}><a href='https://drive.google.com/file/d/168XfY4fgx6ERkzLJKtzPMrg_eiRtVfQ6/view?usp=sharing"' alt= 'Resume'>Resume</a></l1>
                <l1 className = {styles.Navigation}><a href='#' alt= 'Contact'>Contact</a></l1>

            </div>
            </ul>
        </nav>
    );
}

export default Navigation