import Button from "../Button/Button";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";

export default function Header() {

    const navigate = useNavigate();

    return (
        <header>
            <h1 className={styles.title}>Math Quiz</h1>
            <div className={styles.buttonContainer}>
                <Button title="Aide" onClick={() => navigate("/help")} />
            </div>
        </header>
    );
}
