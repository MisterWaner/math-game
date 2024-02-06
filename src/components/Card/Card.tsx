import styles from "./Card.module.css";

export default function Card() {
    return (
        <div className={styles.container}>
            <div className={styles.questionContainer}>
                <p className={styles.questionHeader}>Question</p>
                <div className={styles.questionContent}>
                    <p>
                        Combien font 7 x 8 ?
                    </p>
                    <div className={styles.answerContainer}>
                        <p className={styles.answer}>56</p>
                        <p className={styles.answer}>57</p>
                        <p className={styles.answer}>58</p>
                        <p className={styles.answer}>59</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
