import { useQuizzStore } from "../../store/QuizzStore";
import Button from "../Button/Button";
import styles from "./QuizScore.module.css";

export default function QuizScore() {
    const localScore = useQuizzStore((state) => state.score);
    const resetQuestionCount = useQuizzStore(
        (state) => state.resetQuestionCount
    );
    const generateQuestion = useQuizzStore((state) => state.generateQuestion);
    const resetScore = useQuizzStore((state) => state.resetScore);
    const progress = useQuizzStore((state) => state.progress);
    const totalProgress = useQuizzStore((state) => state.totalProgress);
    const resetProgress = useQuizzStore((state) => state.resetProgress);
    const type = useQuizzStore((state) => state.type);

    const getColor = () => {
        if (progress < 30) {
            return "red";
        } else if (progress < 50) {
            return "orange";
        } else if (progress < 70) {
            return "yellow";
        } else {
            return "green";
        }
    };

    const handleReset = () => {
        resetQuestionCount();
        resetScore();
        resetProgress();
        generateQuestion(type);
    };

    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h3>Ta progression</h3>
            </div>
            <div className={styles.progressbarContainer}>
                <div className={styles.progressBar}>
                    <div
                        className={styles.progressBarFill}
                        style={{
                            width: `${progress}%`,
                            backgroundColor: getColor(),
                        }}
                    ></div>
                </div>
                <div className={styles.progressBarLabel}>{progress}%</div>
            </div>
            <div className={styles.scoreContainer}>
                <div className={styles.score}>
                    <p>Score :</p>
                    <p>{localScore}/10</p>
                </div>
                <div className={styles.buttonContainer}>
                    {progress > (totalProgress / 2) ? (
                        <Button
                            title="Recommencer"
                            onClick={() => handleReset()}
                        />
                    ) : null}
                </div>
            </div>
        </div>
    );
}
