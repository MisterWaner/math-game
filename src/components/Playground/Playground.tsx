import styles from "./Playground.module.css";
import Quizz from "../Quizz/Quizz";

export default function Playground() {

    return (
        <div className={styles.container}>
            <Quizz />
        </div>
    );
}
