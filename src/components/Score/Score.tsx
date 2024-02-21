import { useQuizzStore } from "../../store/QuizzStore";

export default function Score() {
    const globalScore = useQuizzStore((state) => state.globalScore);
    const globalTotalQuestions = useQuizzStore(
        (state) => state.globalTotalQuestions
    );
    const player = useQuizzStore((state) => state.player);
    const globalPercent = useQuizzStore((state) => state.globalPercent);

    return (
        <div className="flex flex-col h-full justify-start">
            <div>
                <h2 className="text-lg md:text-xl font-semibold text-center">Score</h2>
            </div>
            <div className="grid grid-cols-2 py-2 text-sm md:text-base">
                <div className="flex justify-center items-center">
                    <p>{player.length === 0 ? "Pseudo" : player}</p>
                </div>
                <div className="flex justify-center items-center">
                    {globalScore} / {globalTotalQuestions} ={" "}
                    {Math.round(globalPercent)}%
                </div>
            </div>
        </div>
    );
}
