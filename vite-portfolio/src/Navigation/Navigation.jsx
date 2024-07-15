import styles from './Navigation.module.css'

function Navigation() {
    return(
        <nav className = {styles.Navigation}>
            <ul>
            <div className='sticky'>
                <l1 className = {styles.Navigation}>About Me</l1>
                <l1 className = {styles.Navigation}>Resume</l1>
                <l1 className = {styles.Navigation}>contact</l1>
            </div>
            </ul>
        </nav>
    );
}

export default Navigation