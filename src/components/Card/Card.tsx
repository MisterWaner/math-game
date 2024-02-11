import React, { useState } from "react";
import { createPortal } from "react-dom";

import styles from "./Card.module.css";
import Button from "../Button/Button";
import { useQuizzStore } from "../../store/QuizzStore";
import Modal from "../Modal/Modal";

export default function Card() {
    const [userAnswer, setUserAnswer] = useState<string>("");
    const [text, setText] = useState<string>("");
    const [textStyle, setTextStyle] = useState<object>({
        color: "",
    });
    const [showModal, setShowModal] = useState<boolean>(false);

    const question = useQuizzStore((state) => state.question);
    const type = useQuizzStore((state) => state.type);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserAnswer(event.target.value);
    };

    const checkAnswer = (userAnswer: string) => {
        if (question) {
            if (Number(userAnswer) === question.answer) {
                setText(
                    "Bravo ! Tu as trouvé la bonne réponse, continue comme ça !"
                );
                setTextStyle({ color: "#74b816" });
            } else if (Number(userAnswer) !== question.answer) {
                setText(`Dommage, la bonne réponse était ${question.answer}`);
                setTextStyle({ color: "red" });
            } else {
                setText("");
            }
        }
    };

    const handleClick = () => {
        checkAnswer(userAnswer);
        setShowModal(true);
        setUserAnswer("");
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.questionContainer}>
                    <p className={styles.questionHeader}>Question</p>
                    <div className={styles.questionContent}>
                        <p>{question?.questionText}</p>
                        <div className={styles.answerContainer}>
                            <label htmlFor="answer">Ta réponse</label>
                            <input
                                onChange={handleInputChange}
                                value={userAnswer}
                                type="text"
                                id="answer"
                            />
                        </div>
                    </div>
                    <div className={styles.questionButton}>
                        <Button
                            title={"Valider"}
                            onClick={() => handleClick()}
                        />
                    </div>
                </div>
            </div>
            {showModal &&
                createPortal(
                    <Modal
                        text={text}
                        onClose={() => setShowModal(false)}
                        textStyle={textStyle}
                        type={type}
                    />,
                    document.body
                )
            }
        </>
    );
}
