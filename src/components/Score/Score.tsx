import styles from "./Score.module.css";

export default function Score() {
    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h2>Score</h2>
            </div>
            <div className={styles.scoreContainer}>
                <div className={styles.pseudoContainer}>
                    <p>Pseudo</p>
                </div>
                <div className={styles.scoreValueContainer}>0</div>
            </div>
        </div>
    );
}
