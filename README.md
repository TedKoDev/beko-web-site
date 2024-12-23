# beko-web-site

## 프로젝트 생성 날짜

- **2024-12-19**

## 개요

`beko-web-site`는 React, Vite, MUI(Material-UI), Framer Motion, Zustand, React Query를 사용하여 구축하는 랜딩 페이지 프로젝트입니다. 이후 웹 서비스로 확장될 예정입니다.

---

package.js 에 우선. typscript 체크 하는거 지움
// "build": "tsc -b && vite build",

## 1. 프로젝트 생성

```bash
npm create vite@latest beko-web-site --template react
cd beko-web-site
npm install
```

---

## 2. 의존성 설치

### 필수 라이브러리

```bash
# MUI Core와 Emotion (MUI는 Emotion을 사용하여 스타일링)
npm install @mui/material @emotion/react @emotion/styled

# Framer Motion
npm install framer-motion

# Zustand (상태 관리)
npm install zustand

# React Query (데이터 페칭 및 캐싱)
npm install @tanstack/react-query

# React Query DevTools (개발용 도구, 선택 사항)
npm install @tanstack/react-query-devtools


npm install axios
```

### 추가 고려 사항 (의존성)

```bash
# React Router (페이지 라우팅)
npm install react-router-dom

# ESLint (코드 품질 검사)
npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin

# Prettier (코드 포맷팅)
npm install prettier eslint-config-prettier eslint-plugin-prettier

# PWA 플러그인 (옵션)
npm install vite-plugin-pwa
```

---

## 3. 프로젝트 구조

```
src/
├── components/      # 재사용 가능한 컴포넌트
├── hooks/           # React Query와 Zustand 훅
├── pages/           # 페이지 구성
├── styles/          # 전역 스타일 (예: MUI 테마)
└── App.tsx          # 메인 컴포넌트
```

---

## 4. React Query 설정

`src/main.tsx`에서 React Query Client를 설정합니다.

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
```

---

## 5. MUI 테마 설정

`src/styles/theme.ts` 파일을 생성하고 테마를 설정합니다.

```tsx
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
  typography: {
    fontFamily: `'Roboto', 'Arial', sans-serif`,
  },
});

export default theme;
```

`src/main.tsx`에서 테마를 적용합니다.

```tsx
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
```

---

## 6. Zustand 스토어 설정

`src/hooks/useStore.ts` 파일을 생성하여 Zustand 스토어를 설정합니다.

```tsx
import create from "zustand";

interface AppState {
  count: number;
  increase: () => void;
  decrease: () => void;
}

export const useStore = create<AppState>((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
}));
```

---

## 7. Framer Motion 예제

`src/components/AnimatedButton.tsx` 파일을 생성합니다.

```tsx
import { motion } from "framer-motion";
import { Button } from "@mui/material";

const AnimatedButton = () => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <Button variant="contained" color="primary">
        Click Me
      </Button>
    </motion.div>
  );
};

export default AnimatedButton;
```

---

## 8. React Query 데이터 페칭 예제

`src/components/DataComponent.tsx` 파일을 생성합니다.

```tsx
import { useQuery } from "@tanstack/react-query";

const fetchData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
};

const DataComponent = () => {
  const { data, error, isLoading } = useQuery(["posts"], fetchData);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred</div>;

  return (
    <div>
      {data.map((post: any) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default DataComponent;
```

---

## 9. 개발 서버 실행

```bash
npm run dev
```

---

## 추가적으로 고려할 점

- **React Router**: 페이지 간 이동을 설정하려면 React Router를 설치하고 설정.
- **ESLint 및 Prettier**: 코드 품질과 포맷팅을 유지하기 위해 설정.
- **PWA 지원**: Vite PWA 플러그인을 사용하여 애플리케이션을 PWA로 확장 가능.

---

프로젝트 설정과 관련하여 질문이 있다면 언제든지 문의하세요! 🚀
