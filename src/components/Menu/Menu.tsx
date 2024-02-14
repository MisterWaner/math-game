import { useState } from "react";
import { Link } from "react-router-dom";
import { useQuizzStore } from "../../store/QuizzStore";

import Button from "../Button/Button";
import styles from "./Menu.module.css";

export default function ButtonList() {
    const Links: Array<{ title: string; path: string }> = [
        { title: "Addition", path: "/addition" },
        { title: "Soustraction", path: "/soustraction" },
        { title: "Multiplication", path: "/multiplication" },
        { title: "Division", path: "/division" },
    ];

    const [playerName, setPlayerName] = useState<string>("");
    
    const selectQuizz = useQuizzStore((state) => state.selectQuizz);
    const generateQuestion = useQuizzStore((state) => state.generateQuestion);
    const setPlayer = useQuizzStore((state) => state.setPlayer);


    const handleClick = (type: string) => {
        generateQuestion(type);
        console.log(type);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPlayerName(event.target.value);
    };

    const handleSubmit = () => {
        setPlayer(playerName);
        setPlayerName("");
        console.log(playerName);
    };
    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h2>Choisi un quizz</h2>
            </div>
            <div className={styles.nameContainer}>
                <div className={styles.formContainer}>
                    <div className={styles.inputContainer}>
                        <label htmlFor="userName">Choisi ton pseudo :</label>
                        <input type="text" id="userName" onChange={handleInputChange} value={playerName} />
                    </div>
                    <div className={styles.buttonContainer}>
                        <Button title="Valider" onClick={handleSubmit} />
                    </div>
                </div>
            </div>
            <div className={styles.menuContainer}>
                <ul className={styles.menu}>
                    {Links.map((link, index) => (
                        <li key={index}>
                            <Link to={link.path}>
                                <Button
                                    title={link.title}
                                    onClick={() => {
                                        handleClick(link.title.toLowerCase());
                                        selectQuizz(link.title, true);
                                    }}
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
