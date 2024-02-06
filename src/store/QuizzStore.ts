import { create } from "zustand";

type QuizzState = {
    title: string;
    isSelected: boolean;
    isShown: boolean;
}

type Action = {
    selectQuizz: (title: QuizzState['title'], isSelected: QuizzState['isSelected']) => void;
}

export const useQuizzStore = create<QuizzState & Action>() ((set) => ({
    title: '',
    isSelected: false,
    isShown: false,
    selectQuizz(title, isSelected) {
        set({ title, isSelected });
    },
    show(isShown: boolean) {
        set({ isShown });
    }
}));


