import QuizScore from "../components/QuizScore/QuizScore";
import Quizz from "../components/Quizz/Quizz";
import Score from "../components/Score/Score";

export default function Multiplication() {
    return (
        <>
            <main className="w-full grid grid-cols-1 lg:grid-cols-[1fr_20%] ">
                <div>
                    <div className="pageTitle">
                        <h2>Multiplication</h2>
                    </div>
                    <Quizz />
                    <QuizScore />
                </div>
                <Score />
            </main>
        </>
    );
}
