import styles from "./Quizz.module.css";
import Card from "../Card/Card";

export default function Quizz() {
    return (
        <div className={styles.quizzContainer}>
            <h2 className={styles.h2}>Quizz</h2>
            <Card />
        </div>
    );
}
