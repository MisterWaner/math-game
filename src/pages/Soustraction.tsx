import QuizScore from "../components/QuizScore/QuizScore";
import Quizz from "../components/Quizz/Quizz";
import Score from "../components/Score/Score";

export default function Soustraction() {
    return (
        <>
            <main>
                <div className="pageContainer">
                    <div className="pageTitle">
                        <h2>Addition</h2>
                    </div>
                    <Quizz />
                    <QuizScore />
                </div>
                <Score />
            </main>
        </>
    );
}
