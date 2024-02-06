import styles from "./Playground.module.css";
import Quizz from "../Quizz/Quizz";

import { useQuizzStore } from "../../store/QuizzStore";

export default function Playground() {
    const isShown = useQuizzStore((state) => !state.isShown);
    const isSelected = useQuizzStore((state) => state.isSelected);

    return (
        <div className={styles.container}>
            {isSelected ? isShown ? <Quizz /> : "" : <h2>Choisi un quizz</h2>}
        </div>
    );
}
