import { create } from "zustand";

type QuestionState = {
    question: string;
    answer: string;
    isSelected: boolean;
}

type Action = {
    selectAnswer: (question: QuestionState['question'], answer: QuestionState['answer'], isSelected: QuestionState['isSelected']) => void;
}

export const useQuestionStore = create<QuestionState & Action>() ((set) => ({
    question: '',
    answer: '',
    isSelected: false,
    selectAnswer(question, answer, isSelected) {
        set({ question, answer, isSelected });
    }
}))