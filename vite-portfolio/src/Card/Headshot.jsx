import headshot_pic from '/Users/tuyishimeg/Desktop/Projects/Portfolio-vite/vite-portfolio/src/assets/Headshot.jpg'
import styles from './Card.module.css'

function Headshot(){
    return(
        <>
        <div className={styles.card}>
            <img className="card-image" src={headshot_pic} alt="Headshot"></img>
            <h2 className="card-title">Godwins Tuyishime</h2>
            <p className="card-text">Data and Information Fellow at Wofford College and Software Engineering Fellow at Headstarter</p>
        </div>
        </>
    );
    
}

export default Headshot