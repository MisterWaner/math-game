import Button from "../Button/Button";
import styles from "./ButtonList.module.css";

import { useQuizzStore } from "../../store/QuizzStore";

export default function ButtonList() {

    const selectQuizz = useQuizzStore(state => state.selectQuizz);

    return (
        <div className={styles.container}>
            <h2>Choisi un quizz</h2>
            <ul className={styles.menu}>
                <li>
                    <Button
                        title={"Addition"}
                        onClick={() => selectQuizz("Addition", true, "addition")}
                    />
                </li>
                <li>
                    <Button
                        title={"Soustraction"}
                        onClick={() => selectQuizz("Soustraction", true, "soustraction")}
                    />
                </li>
                <li>
                    <Button
                        title={"Multiplication"}
                        onClick={() => selectQuizz("Multiplication", true, "multiplication")}
                    />
                </li>
                <li>
                    <Button
                        title={"Division"}
                        onClick={() => selectQuizz("Division", true, "division")}
                    />
                </li>
            </ul>
        </div>
    );
}
