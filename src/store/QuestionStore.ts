import { create } from "zustand";
import { generateMultiplication, multiplicationAnswer } from "../utils/generateMultiplication";
import { generateAddition, additionAnswer } from "../utils/generateAddition";
import { generateSoustraction, soustractionAnswer } from "../utils/generateSoustraction";

type QuestionState = {
    type: string;
    question: string;
    answer: number;
}

type Action = {
    selectQuestion: (
        type: QuestionState["type"],
        question: QuestionState["question"],
        answer: QuestionState["answer"]
    ) => void;

}

export const useQuestionStore = create<QuestionState & Action>() ((set) => ({
    type: "",
    question: generateMultiplication() || generateAddition() || generateSoustraction(),
    answer: multiplicationAnswer || additionAnswer || soustractionAnswer(),
    selectQuestion(type, question, answer) {
        set({ type, question, answer });
    }
}))