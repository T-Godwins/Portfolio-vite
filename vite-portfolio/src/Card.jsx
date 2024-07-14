import reactImage from './assets/react.svg'

function Card(){
    return(
        <div className="card">
            {/* <img src="https://via.placeholder.com/150" alt="Headshot"></img> */}
            <img className="card-image" src={reactImage} alt="Headshot"></img>
            <h2 className="card-title">Projects</h2>
            <p className="card-text">Check out what I've done and let me know what you think</p>
        </div>
    );
    
}

export default Card