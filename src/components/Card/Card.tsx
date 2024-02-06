import styles from "./Card.module.css";
import Button from "../Button/Button";
import { useQuestionStore } from "../../store/QuestionStore";

export default function Card() {

    const question = useQuestionStore(state => state.question);
    const answer = useQuestionStore(state => state.answer);
    const isSelected = useQuestionStore(state => !state.isSelected);
    const selectAnswer = useQuestionStore(state => state.selectAnswer);

    const handleClick = () => {
        selectAnswer(question, answer, isSelected);
        console.log(question, answer, isSelected);
    }

    return (
        <div className={styles.container}>
            <div className={styles.questionContainer}>
                <p className={styles.questionHeader}>Question</p>
                <div className={styles.questionContent}>
                    <p>
                        Combien font 7 x 8 ?
                    </p>
                    <div className={styles.answerContainer}>
                        <p className={styles.answer}>56</p>
                        <p className={styles.answer}>57</p>
                        <p className={styles.answer}>58</p>
                        <p className={styles.answer}>59</p>
                    </div>
                </div>
                <div className={styles.questionButton}>
                    <Button title={"Valider"} onClick={() => handleClick()} />
                </div>
            </div>
        </div>
    );
}
