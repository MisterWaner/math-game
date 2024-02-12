import styles from "./Quizz.module.css";
import Card from "../Card/Card";
import { useQuizzStore } from "../../store/QuizzStore";
import Button from "../Button/Button";

export default function Quizz() {
    const title = useQuizzStore((state) => state.title);

    return (
        <div className={styles.quizzContainer}>
            <div className={styles.quizzHeader}>
                <div className={styles.titleContainer}>
                    <h2 className={styles.h2}>{title}</h2>
                </div>
                <div className={styles.buttonContainer}>
                    <Button title="Aide" onClick={() => {}} />
                </div>
            </div>
            <div className={styles.playgroundContainer}>
                <Card />
            </div>
        </div>
    );
}
