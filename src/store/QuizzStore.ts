import { create } from "zustand";

type QuizzState = {
    title: string;
    isSelected: boolean;
    type: string;
    question: { questionText: string | null; answer: number | null } | null;
    generateQuestion: (type: string) => void;
    score: number;
    globalScore: number;
    player: string;
    globalPercent: number;
    incrementScore: () => void;
    incrementQuestionCount: () => void;
    resetQuestionCount: () => void;
    resetScore: () => void;
    setPlayer: (player: string) => void;
    userAnswer: string;
    questionCount: number;
    totalQuestions: number;
    progress: number;
    totalProgress: number;
    incrementProgress: () => void;
    resetProgress: () => void;
    setGlobalPercent: () => void;
    setGlobalScore: () => void;
    globalTotalQuestions: number;
    setGlobalTotalQuestions: () => void;
};

type Action = {
    selectQuizz: (
        title: QuizzState["title"],
        isSelected: QuizzState["isSelected"]
    ) => void;
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
    setPlayer: (player) => {
        set({ player });
    },
    incrementScore: () => {
        set((state) => ({ score: state.score + 1 }));
    },
    incrementQuestionCount: () => {
        const { questionCount, totalQuestions } = get();

        for (let i = 0; i < totalQuestions; i++) {
            set({ questionCount: questionCount + 1 });
        }
    },
    resetQuestionCount: () => {
        set({ questionCount: 0 });
    },
    resetScore: () => {
        set({ score: 0 });
    },
    incrementProgress: () => {
        const { progress, totalProgress } = get();
        for (let i = 0; i < totalProgress; i++) {
            set({ progress: progress + 10 });
        }
    },
    resetProgress: () => {
        set({ progress: 0 });
    },
    setGlobalPercent: () => {
        const { globalScore, totalQuestions } = get();
        const percent = (globalScore / totalQuestions) * 100;
        set({ globalPercent: percent });
        
    },
    setGlobalScore: () => {
        const { score } = get();
        set((state) => ({ globalScore: state.globalScore + score }));
    },
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
