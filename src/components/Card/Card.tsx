import React, { useState } from "react";
import styles from "./Card.module.css";
import Button from "../Button/Button";
import { useQuestionStore } from "../../store/QuestionStore";

export default function Card() {
    const [userAnswer, setUserAnswer] = useState<string>("");
    const [text, setText] = useState<string>("");

    const question = useQuestionStore((state) => state.question);
    const answer = useQuestionStore((state) => state.answer);

    const handleUserAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserAnswer(event.target.value);
    };

    const checkAnswer = (userAnswer: string, answer: number) => {
        if (Number(userAnswer) === answer) {
            setText("Bravo !");
        } else if (Number(userAnswer) !== answer){
            setText("Essaie encore !");
        } else {
            setText("");
        }
    };

    const handleClick = () => {
        checkAnswer(userAnswer, answer);
    };

    return (
        <div className={styles.container}>
            <div className={styles.questionContainer}>
                <p className={styles.questionHeader}>Question</p>
                <div className={styles.questionContent}>
                    <p>{question}</p>
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
