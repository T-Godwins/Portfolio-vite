import styles from './Header.module.css'
import Headeshot from './../Card/Headshot'
import Headshot from './../Card/Headshot';
function Header(){
    
    return(
        <header className={styles.Header}>
            <h3>Hello, I am</h3>
            <h1>Godwins Tuyishime</h1>
            <Headshot/>
        </header>
    );
}

export default Header