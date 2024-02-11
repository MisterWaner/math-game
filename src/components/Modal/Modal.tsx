import styles from "./Modal.module.css";
import { useQuizzStore } from "../../store/QuizzStore";
import Button from "../Button/Button";



export default function Modal({ text, onClose, textStyle, type}: { text: string; onClose: () => void; textStyle: object; type: string;}) {

    const generateQuestion = useQuizzStore((state) => state.generateQuestion);

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
                    <Button title="Question Suivante" onClick={() => {
                        generateQuestion(type);
                        onClose();
                    }} />
                </div>
            </div>
        </div>
    );
}
