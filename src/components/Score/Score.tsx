import styles from "./Score.module.css";
import { useQuizzStore } from "../../store/QuizzStore";

export default function Score() {
    const globalScore = useQuizzStore((state) => state.globalScore);
    const globalTotalQuestions = useQuizzStore(
        (state) => state.globalTotalQuestions
    );
    const player = useQuizzStore((state) => state.player);
    const globalPercent = useQuizzStore((state) => state.globalPercent);

    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h2>Score</h2>
            </div>
            <div className={styles.scoreContainer}>
                <div className={styles.pseudoContainer}>
                    <p>{player.length === 0 ? "Pseudo" : player}</p>
                </div>
                <div className={styles.scoreValueContainer}>
                    {globalScore} / {globalTotalQuestions} ={" "}
                    {Math.round(globalPercent)}%
                </div>
            </div>
        </div>
    );
}
