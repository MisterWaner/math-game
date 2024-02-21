import { useNavigate } from "react-router-dom";

import { useQuizzStore } from "../../store/QuizzStore";
import Button from "../Button/Button";

export default function Modal({
    text,
    onClose,
    textStyle,
    type,
}: {
    text: string;
    onClose: () => void;
    textStyle: object;
    type: string;
}) {
    const generateQuestion = useQuizzStore((state) => state.generateQuestion);
    const incrementQuestionCount = useQuizzStore(
        (state) => state.incrementQuestionCount
    );
    const incrementProgress = useQuizzStore((state) => state.incrementProgress);
    const setGlobalPercent = useQuizzStore((state) => state.setGlobalPercent);
    const resetQuestionCount = useQuizzStore(
        (state) => state.resetQuestionCount
    );
    const resetScore = useQuizzStore((state) => state.resetScore);
    const resetProgress = useQuizzStore((state) => state.resetProgress);
    const progress = useQuizzStore((state) => state.progress);
    const totalProgress = useQuizzStore((state) => state.totalProgress);

    const navigate = useNavigate();

    const goOn = () => {
        generateQuestion(type);
        incrementQuestionCount();
        incrementProgress();
        onClose();
    };

    const handleClose = () => {
        onClose();
        setGlobalPercent();
        resetQuestionCount();
        resetScore();
        resetProgress();
        generateQuestion(type);
        navigate("/");
    };

    return (
        <div className="fixed top-0 left-0 z-10 w-full h-full bg-black/50 flex justify-center items-center">
            <div className="bg-amber-50 w-5/6 p-5 rounded-lg md:w-3/6 lg:w-2/6">
                <div className="flex flex-col items-center mt-5">
                    <p style={textStyle} className="text-lg font-semibold mb-5">
                        {text}
                    </p>
                </div>
                <div className="flex justify-center ">
                    <Button
                        title={
                            progress === totalProgress
                                ? "Fermer"
                                : "Question suivante"
                        }
                        onClick={() => {
                            progress === totalProgress ? handleClose() : goOn();
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
