import { useQuizzStore } from "../../store/QuizzStore";
import Button from "../Button/Button";

export default function QuizScore() {
    const localScore = useQuizzStore((state) => state.score);
    const resetQuestionCount = useQuizzStore(
        (state) => state.resetQuestionCount
    );
    const generateQuestion = useQuizzStore((state) => state.generateQuestion);
    const resetScore = useQuizzStore((state) => state.resetScore);
    const progress = useQuizzStore((state) => state.progress);
    const totalProgress = useQuizzStore((state) => state.totalProgress);
    const resetProgress = useQuizzStore((state) => state.resetProgress);
    const type = useQuizzStore((state) => state.type);

    // Set the color of the progress bar
    const setColor = () => {
        if (progress < 30) {
            return "red";
        } else if (progress < 50) {
            return "orange";
        } else if (progress < 70) {
            return "yellow";
        } else {
            return "green";
        }
    };

    const handleReset = () => {
        resetQuestionCount();
        resetScore();
        resetProgress();
        generateQuestion(type);
    };

    return (
        <div className="w-full grid grid-rows-[20%_20%_60%]">
            <div className="flex justify-center items-center">
                <h3>Ta progression</h3>
            </div>
            <div className="w-3/6 mx-auto my-0">
                <div className="h-7 w-full bg-neutral-200 rounded-lg mb-2">
                    <div
                        className="h-full rounded-lg bg-green-500 transition-all duration-500 ease-in-out"
                        style={{
                            width: `${progress}%`,
                            backgroundColor: setColor(),
                        }}
                    ></div>
                </div>
                <div className="mt-2 text-2xl font-bold text-center">{progress}%</div>
            </div>
            <div className="w-5/6 mx-auto my-0 grid grid-cols-1">
                <div className="w-full flex justify-center items-start text-xl">
                    <p className="mr-2">Score :</p>
                    <p>{localScore}/10</p>
                </div>
                <div className="w-full flex justify-center items-start">
                    {progress === (totalProgress / 10) ? (
                        <Button
                            title="Recommencer"
                            onClick={() => handleReset()}
                        />
                    ) : null}
                </div>
            </div>
        </div>
    );
}
