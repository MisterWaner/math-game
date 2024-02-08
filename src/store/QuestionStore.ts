import { create } from "zustand";
import { generateQuestion, answer } from "../utils/generateMultiplication";

type QuestionState = {
    question: string;
    answer: number;
}

export const useQuestionStore = create<QuestionState>() (() => ({
    question: generateQuestion(),
    answer: answer,
}))