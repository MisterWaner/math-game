import React, { useState } from "react";
import styles from "./Card.module.css";
import Button from "../Button/Button";
import { useQuizzStore } from "../../store/QuizzStore";

export default function Card() {
    const [userAnswer, setUserAnswer] = useState<string>("");
    const [text, setText] = useState<string>("");

    const question = useQuizzStore((state) => state.question);

    const handleUserAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserAnswer(event.target.value);
    };

    const checkAnswer = (userAnswer: string) => {
        if (question) {
            if (Number(userAnswer) === question.answer) {
                setText("Bravo !");
            } else if (Number(userAnswer) !== question.answer) {
                setText("Essaie encore !");
            } else {
                setText("");
            }
        }
    };

    const handleClick = () => {
        checkAnswer(userAnswer);
    };

    return (
        <div className={styles.container}>
            <div className={styles.questionContainer}>
                <p className={styles.questionHeader}>Question</p>
                <div className={styles.questionContent}>
                    <p>{question?.questionText}</p>
                    <div className={styles.answerContainer}>
                        <label htmlFor="answer">Ta réponse</label>
                        <input
                            onChange={handleUserAnswer}
                            type="text"
                            id="answer"
                        />
                    </div>
                </div>
                <div className={styles.questionButton}>
                    <Button title={"Valider"} onClick={() => handleClick()} />
                </div>
            </div>
        </div>
    );
}
