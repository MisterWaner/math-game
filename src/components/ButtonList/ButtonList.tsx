import Button from "../Button/Button";
import styles from "./ButtonList.module.css";

export default function ButtonList() {
    return (
        <div className={styles.container}>
            <h2>Choisi un quizz</h2>
            <ul className={styles.menu}>
                <li>
                    <Button
                        title={"Addition"}
                        onClick={() => console.log("Addition")}
                    />
                </li>
                <li>
                    <Button
                        title={"Soustraction"}
                        onClick={() => console.log("Soustraction")}
                    />
                </li>
                <li>
                    <Button
                        title={"Multiplication"}
                        onClick={() => console.log("Multiplication")}
                    />
                </li>
                <li>
                    <Button
                        title={"Division"}
                        onClick={() => console.log("Division")}
                    />
                </li>
            </ul>
        </div>
    );
}
