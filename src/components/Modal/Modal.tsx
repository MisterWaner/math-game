import { useNavigate } from "react-router-dom";

import styles from "./Modal.module.css";
import { useQuizzStore } from "../../store/QuizzStore";
import Button from "../Button/Button";

export default function Modal({
    text,
    onClose,
    textStyle,
    type,
}: {
    text: string;
    onClose: () => void;
    textStyle: object;
    type: string;
}) {
    const generateQuestion = useQuizzStore((state) => state.generateQuestion);
    const incrementQuestionCount = useQuizzStore(
        (state) => state.incrementQuestionCount
    );
    const incrementProgress = useQuizzStore((state) => state.incrementProgress);
    const setGlobalPercent = useQuizzStore((state) => state.setGlobalPercent);
    const resetQuestionCount = useQuizzStore((state) => state.resetQuestionCount);
    const resetScore = useQuizzStore((state) => state.resetScore);
    const resetProgress = useQuizzStore((state) => state.resetProgress);
    const progress = useQuizzStore((state) => state.progress);
    const totalProgress = useQuizzStore((state) => state.totalProgress);

    const navigate = useNavigate();

    const goOn = () => {
        generateQuestion(type);
        incrementQuestionCount();
        incrementProgress();
        onClose();
    };

    const handleClose = () => {
        onClose();
        setGlobalPercent();
        resetQuestionCount();
        resetScore();
        resetProgress();
        generateQuestion(type);
        navigate("/");
    };

    return (
        <div className={styles.container}>
            <div className={styles.modal}>
                <div className={styles.modalHeader}>
                    <button onClick={onClose}>X</button>
                </div>
                <div className={styles.modalContent}>
                    <p style={textStyle}>{text}</p>
                </div>
                <div className={styles.modalFooter}>
                    <Button
                        title={
                            progress === totalProgress
                                ? "Fermer"
                                : "Question suivante"
                        }
                        onClick={() => {
                            progress === totalProgress ? handleClose() : goOn();
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
