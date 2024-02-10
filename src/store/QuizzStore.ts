import { create } from "zustand";

type QuizzState = {
    title: string;
    isSelected: boolean;
    isShown: boolean;
    type: string;
};

type Action = {
    selectQuizz: (
        title: QuizzState["title"],
        isSelected: QuizzState["isSelected"],
        type: QuizzState["type"]
    ) => void;
};

export const useQuizzStore = create<QuizzState & Action>()((set) => ({
    type: "",
    title: "",
    isSelected: false,
    isShown: false,
    selectQuizz(title, isSelected) {
        set({ title, isSelected });
    },
    show(isShown: boolean) {
        set({ isShown });
    },
}));
