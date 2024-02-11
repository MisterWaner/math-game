import { create } from "zustand";

type QuizzState = {
    title: string;
    isSelected: boolean;
    isShown: boolean;
    type: string | null;
    question: {questionText: string; answer: number} | null;
    generateQuestion: (type: string) => void;
    
};

type Action = {
    selectQuizz: (
        title: QuizzState["title"],
        isSelected: QuizzState["isSelected"],
    ) => void;
    show: (isShown: boolean) => void;
};


export const useQuizzStore = create<QuizzState & Action>()((set) => ({
    type: null,
    title: "",
    isSelected: false,
    isShown: false,
    selectQuizz(title, isSelected) {
        set({ title, isSelected });
    },
    question: null,
    generateQuestion: (type) => {
        let question;
        if (type === "addition") {
            const number1 = Math.floor(Math.random() * 100);
            const number2 = Math.floor(Math.random() * 100);
            question = {
                questionText: `Quelle est la somme de ${number1} + ${number2} ?`,
                answer: number1 + number2,
            }
        } else if (type === "soustraction") {
            const number1 = Math.floor(Math.random() * 100);
            const number2 = Math.floor(Math.random() * 100);
            question = {
                questionText: `Quelle est la différence de ${number1} - ${number2} ?`,
                answer: number1 - number2,
            }
        } else if (type === "multiplication") {
            const number1 = Math.floor(Math.random() * 10);
            const number2 = Math.floor(Math.random() * 10);
            question = {
                questionText: `Quelle est le produit de ${number1} x ${number2} ?`,
                answer: number1 * number2,
            }
        } else if (type === "division") {
            const number1 = Math.floor(Math.random() * 100);
            const number2 = Math.floor(Math.random() * 10);
            question = {
                questionText: `Quelle est le quotient de ${number1} / ${number2} ?`,
                answer: number1 / number2,
            }
        } else {
            question = null;
        }
        set({ question, type});
    },
    show(isShown: boolean) {
        set({ isShown });
    },
}));
