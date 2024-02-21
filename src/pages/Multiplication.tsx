import Card from "../components/Card/Card";
import QuizScore from "../components/QuizScore/QuizScore";
import Score from "../components/Score/Score";

export default function Multiplication() {
    return (
        <>
            <main className="w-full h-full grid grid-cols-1 lg:grid-cols-[1fr_20%]">
                <div className="grid grid-rows-[50px_1fr_1fr]">
                    <div className="flex justify-center items-center">
                        <h2 className="text-xl">Multiplication</h2>
                    </div>
                    <Card />
                    <QuizScore />
                </div>
                <Score />
            </main>
        </>
    );
}
