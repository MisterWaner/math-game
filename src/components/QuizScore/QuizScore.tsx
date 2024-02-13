import Button from "../Button/Button";
import styles from "./QuizScore.module.css";

export default function QuizScore() {
    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h3>Ta progression</h3>
            </div>
            <div className={styles.progressbarContainer}>
                <div className={styles.progressBar}>
                    <div className={styles.progressBarFill}></div>
                </div>
                <div className={styles.progressBarLabel}>50%</div>
            </div>
            <div className={styles.scoreContainer}>
                <div className={styles.score}>
                    <p>Score :</p>
                    <p>5/10</p>
                </div>
                <div className={styles.buttonContainer}>
                    <Button title="Recommencer" onClick={() => {}} />
                </div>
            </div>
        </div>
    );
}
