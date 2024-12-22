import { create } from "zustand";

type Language = "ko" | "en" | "jp";

interface LanguageState {
  language: Language;
  setLanguage: (language: Language) => void;
}

export const useLanguageStore = create<LanguageState>((set) => ({
  language: "ko",
  setLanguage: (language) => set({ language }),
}));
