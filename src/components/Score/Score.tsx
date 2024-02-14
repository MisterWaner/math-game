import styles from "./Score.module.css";
import { useQuizzStore } from "../../store/QuizzStore";

export default function Score() {

    const globalScore = useQuizzStore((state) => state.globalScore);
    const globalTotalQuestions = useQuizzStore((state) => state.globalTotalQuestions);

    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h2>Score</h2>
            </div>
            <div className={styles.scoreContainer}>
                <div className={styles.pseudoContainer}>
                    <p>Pseudo</p>
                </div>
                <div className={styles.scoreValueContainer}>{globalScore} / {globalTotalQuestions} </div>
            </div>
        </div>
    );
}
