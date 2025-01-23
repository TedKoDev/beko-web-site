import { create } from "zustand";
import i18n from "../i18n";

interface LanguageState {
  language: string;
  setLanguage: (lang: string) => void;
}

export const useLanguageStore = create<LanguageState>((set) => ({
  language: i18n.language || "ko",
  setLanguage: (lang: string) => {
    // 현재 언어와 같으면 변경하지 않음
    if (i18n.language === lang) return;

    i18n.changeLanguage(lang);
    set({ language: lang });
  },
}));

// i18n 언어 변경 이벤트를 감지하여 store 상태 업데이트
i18n.on("languageChanged", (lng) => {
  useLanguageStore.getState().setLanguage(lng);
});
