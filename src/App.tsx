import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import Community from "./pages/Community";
import PostDetail from "./pages/PostDetail";
import CreatePost from "./pages/CreatePost";
import Profile from "./pages/Profile";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Footer from "./components/common/Footer";
// import Terms from "./pages/terms/Terms";
import Term from "./pages/terms/components/Term"; // 대문자 'T'
// import Privacy from "./pages/terms/components/Privacy";
import Marketing from "./pages/terms/components/Marketing";
import Privacy from "./pages/Privacy";
import { useEffect } from "react";
import "./i18n";
import { useTranslation } from "react-i18next";
import { useAuthStore } from "./store/authStore";
import Main from "./pages/main/Main";
import Terms from "./pages/terms/Terms";
import Chatbot from "./pages/chatbot/Chatbot";

const queryClient = new QueryClient();

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // 초기 언어 설정이 필요한 경우에만 실행
    const savedLanguage = localStorage.getItem("i18nextLng");
    if (savedLanguage && i18n.language !== savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const { isAuthenticated } = useAuthStore();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={isAuthenticated ? <Navigate to="/main" replace /> : <Home />} />
          <Route path="/main" element={<Main />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/community" element={<Community />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/terms/term" element={<Term />} />
          <Route path="/terms/marketing" element={<Marketing />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
