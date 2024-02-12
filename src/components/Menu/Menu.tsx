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

    const selectQuizz = useQuizzStore((state) => state.selectQuizz);
    const generateQuestion = useQuizzStore((state) => state.generateQuestion);

    const handleClick = (type: string) => {
        generateQuestion(type);
        console.log(type);
    };
    return (
        <div className={styles.container}>
            <h2>Choisi un quizz</h2>
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
    );
}
