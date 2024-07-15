import reactImage from '/Users/tuyishimeg/Desktop/Projects/Portfolio-vite/vite-portfolio/src/assets/react.svg'
import styles from './Card.module.css'

function Card(){
    return(
        <>
        <div className={styles.card}>
            <img className="card-image" src={reactImage} alt="Headshot"></img>
            <h2 className="card-title">Projects</h2>
            <p className="card-text">Check out what I've done and let me know what you think</p>
        </div>
        </>
    );
    
}

export default Card