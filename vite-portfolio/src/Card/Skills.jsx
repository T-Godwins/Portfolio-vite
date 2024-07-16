import styles from './Card.module.css'

function Skills(){
    return(
        <div className={styles.Card}>
            <ul>
                <l1>Programming Languages: Python, R, C++ </l1>
                <l1>Data Analysis Tools: SQL, Tableau, Microsoft Excel </l1>
                <l1>Other Tools: Microsoft PowerPoint, Adobe Photoshop</l1>
                <l1>Certifications: Currently pursuing AWS Cloud Practitioner certification</l1>
            </ul>
        </div>
    );
}

export default Skills
