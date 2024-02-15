import { create } from "zustand";

type QuizzState = {
    title: string;
    isSelected: boolean;
    type: string;
    question: { questionText: string | null; answer: number | null } | null;
    score: number;
    globalScore: number;
    player: string;
    globalPercent: number;
    userAnswer: string;
    questionCount: number;
    totalQuestions: number;
    progress: number;
    totalProgress: number;
    globalTotalQuestions: number;
};

type Action = {
    selectQuizz: (
        title: QuizzState["title"],
        isSelected: QuizzState["isSelected"]
    ) => void;
    generateQuestion: (type: string) => void;
    incrementScore: () => void;
    incrementQuestionCount: () => void;
    resetQuestionCount: () => void;
    resetScore: () => void;
    setPlayer: (player: string) => void;
    setGlobalTotalQuestions: () => void;
    incrementProgress: () => void;
    resetProgress: () => void;
    setGlobalPercent: () => void;
    setGlobalScore: () => void;
};

export const useQuizzStore = create<QuizzState & Action>()((set, get) => ({
    type: "",
    title: "",
    userAnswer: "",
    isSelected: false,
    selectQuizz(title, isSelected) {
        set({ title, isSelected });
    },
    question: null,
    score: 0,
    globalScore: 0,
    player: "",
    questionCount: 0,
    totalQuestions: 10,
    globalPercent: 0,
    progress: 0,
    totalProgress: 100,
    globalTotalQuestions: 0,
    // Set the player's name
    setPlayer: (player) => {
        set({ player });
    },
    // Increment the score
    incrementScore: () => {
        set((state) => ({ score: state.score + 1 }));
    },
    // Increment the question count
    incrementQuestionCount: () => {
        const { questionCount, totalQuestions } = get();

        for (let i = 0; i < totalQuestions; i++) {
            set({ questionCount: questionCount + 1 });
        }
    },
    // Reset the question count
    resetQuestionCount: () => {
        set({ questionCount: 0 });
    },
    // Reset the score
    resetScore: () => {
        set({ score: 0 });
    },
    // Increment the progress bar
    incrementProgress: () => {
        const { progress, totalProgress } = get();
        for (let i = 0; i < totalProgress; i++) {
            set({ progress: progress + 10 });
        }
    },
    // Reset the progress bar
    resetProgress: () => {
        set({ progress: 0 });
    },
    // Set the global percentage
    setGlobalPercent: () => {
        const { globalScore, globalTotalQuestions } = get();
        const percent = (globalScore / globalTotalQuestions) * 100;
        set({ globalPercent: percent });
    },
    // Increment the global score
    setGlobalScore: () => {
        const { score } = get();
        set((state) => ({ globalScore: state.globalScore + score }));
    },
    // Increment the total number of questions
    setGlobalTotalQuestions: () => {
        const { totalQuestions } = get();
        set((state) => ({
            globalTotalQuestions: state.globalTotalQuestions + totalQuestions,
        }));
    },

    // Generate a question based on the type of quizz
    generateQuestion: (type) => {
        let question;
        if (type === "addition") {
            const number1 = Math.floor(Math.random() * 100);
            const number2 = Math.floor(Math.random() * 100);
            question = {
                questionText: `Quelle est la somme de ${number1} + ${number2} ?`,
                answer: number1 + number2,
            };
        } else if (type === "soustraction") {
            const number1 = Math.floor(Math.random() * 100);
            const number2 = Math.floor(Math.random() * 100);

            if (number1 < number2) {
                question = {
                    questionText: `Quelle est la différence de ${number2} - ${number1} ?`,
                    answer: number2 - number1,
                };
            } else {
                question = {
                    questionText: `Quelle est la différence de ${number1} - ${number2} ?`,
                    answer: number1 - number2,
                };
            }
        } else if (type === "multiplication") {
            const number1 = Math.floor(Math.random() * 10);
            const number2 = Math.floor(Math.random() * 10);
            question = {
                questionText: `Quelle est le produit de ${number1} x ${number2} ?`,
                answer: number1 * number2,
            };
        } else if (type === "division") {
            const number1 = Math.floor(Math.random() * 100);
            const number2 = Math.floor(Math.random() * 10);
            question = {
                questionText: `Quelle est le quotient de ${number1} / ${number2} ?`,
                answer: number1 / number2,
            };
        } else {
            question = null;
        }
        set({ question, type });
    },
}));
