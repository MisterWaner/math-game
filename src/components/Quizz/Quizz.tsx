import styles from "./Quizz.module.css";
import Card from "../Card/Card";


export default function Quizz() {
    

    return (
        <div className={styles.quizzContainer}>
            <div className={styles.playgroundContainer}>
                <Card />
            </div>
        </div>
    );
}
