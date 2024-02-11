import styles from "./Quizz.module.css";
import Card from "../Card/Card";
import { useQuizzStore } from "../../store/QuizzStore";


export default function Quizz() {

    const title = useQuizzStore(state => state.title);

    return (
        <div className={styles.quizzContainer}>
            <h2 className={styles.h2}>{title}</h2>
            <Card/>
        </div>
    );
}
