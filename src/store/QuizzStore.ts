import { create } from "zustand";

type QuizzState = {
    title: string;
    isSelected: boolean;
    type: string;
    question: { questionText: string | null; answer: number | null } | null;
    generateQuestion: (type: string) => void;
};

type Action = {
    selectQuizz: (
        title: QuizzState["title"],
        isSelected: QuizzState["isSelected"]
    ) => void;
    
};

export const useQuizzStore = create<QuizzState & Action>()((set) => ({
    type: "",
    title: "",
    userAnswer: "",
    isSelected: false,
    selectQuizz(title, isSelected) {
        set({ title, isSelected });
    },
    question: null,

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
    }
}));
