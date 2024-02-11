import Button from "../Button/Button";
import styles from "./ButtonList.module.css";

import { useQuizzStore } from "../../store/QuizzStore";

export default function ButtonList() {
    const selectQuizz = useQuizzStore((state) => state.selectQuizz);
    const generateQuestion = useQuizzStore((state) => state.generateQuestion);
    //const title = useQuizzStore((state) => state.title);
    //const isSelected = useQuizzStore((state) => state.isSelected);

    const handleClick = (type: string) => {
        generateQuestion(type);
    };
    return (
        <div className={styles.container}>
            <h2>Choisi un quizz</h2>
            <ul className={styles.menu}>
                <li>
                    <Button
                        title={"Addition"}
                        onClick={() => {
                            handleClick("addition"),
                            selectQuizz("Addition", true);
                        }}
                    />
                </li>
                <li>
                    <Button
                        title={"Soustraction"}
                        onClick={() => {
                            handleClick("soustraction"),
                            selectQuizz("Soustraction", true);
                        }}
                    />
                </li>
                <li>
                    <Button
                        title={"Multiplication"}
                        onClick={() => {
                            handleClick("multiplication"),
                            selectQuizz("Multiplication", true);
                        }}
                    />
                </li>
                <li>
                    <Button
                        title={"Division"}
                        onClick={() => {
                            handleClick("division"),
                            selectQuizz("Division", true);
                        }}
                    />
                </li>
            </ul>
        </div>
    );
}
