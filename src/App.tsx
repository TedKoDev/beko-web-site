import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import Community from "./pages/Community";
import PostDetail from "./pages/PostDetail";
import CreatePost from "./pages/CreatePost";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./components/common/Footer";
import Terms from "./pages/terms/Terms";
import Term from "./pages/terms/components/term";
import Privacy from "./pages/terms/components/privacy";
import Marketing from "./pages/terms/components/marketing";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<Terms />}>
            <Route path="term" element={<Term />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="marketing" element={<Marketing />} />
          </Route>
          <Route path="/community" element={<Community />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
