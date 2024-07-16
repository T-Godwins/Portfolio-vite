import styles from './Header.module.css'
import Headeshot from '../Card/About'
import Headshot from '../Card/About';
import Navigation from '../Navigation/Navigation';
function Header(){
    
    return(
        <header className={styles.Header}>
            <h3>Hello, I am</h3>
            <h1>Godwins Tuyishime</h1>
            <div className='sticky'>
            </div>
        </header>
    );
}

export default Header