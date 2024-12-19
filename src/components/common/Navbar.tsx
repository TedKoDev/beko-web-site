import { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import AnimatedButton from "../Button/AnimatedButton";
import { colors } from "../../styles/colors";
import logo from "../../assets/icon.png";
export default function Navbar() {
  const { isAuthenticated, logout } = useAuthStore();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 스크롤이 50px 이상 되면 배경색 변경
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onClickStart = () => {
    console.log("시작하기");
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: isScrolled ? "white" : "transparent",
        boxShadow: isScrolled ? 1 : "none",
        transition: "background-color 0.3s ease-in-out",
      }}
    >
      <Toolbar>
        {/* Image */}
        <Box sx={{ display: "flex", alignItems: "center", width: "50px", height: "50px", marginLeft: "20vh", marginRight: "1rem" }}>
          <img src={logo} alt="logo" style={{ width: "100%", height: "100%" }} />
        </Box>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: "none",
            color: isScrolled ? "black" : "Black",
          }}
        >
          BeraKorean
        </Typography>
        <Box sx={{ marginRight: "20vh" }}>
          <AnimatedButton text="시작하기" onClick={onClickStart} color={colors.primary} shadowColor={colors.tertiary} />
        </Box>
        <Box>
          {/* <Button color="inherit" component={Link} to="/community" sx={{ color: isScrolled ? "text.primary" : "white" }}>
            커뮤니티
          </Button> */}
          {/* {isAuthenticated ? (
            <>
              <Button color="inherit" component={Link} to="/profile" sx={{ color: isScrolled ? "text.primary" : "white" }}>
                프로필
              </Button>
              <Button color="inherit" onClick={logout} sx={{ color: isScrolled ? "text.primary" : "white" }}>
                로그아웃
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" component={Link} to="/login" sx={{ color: isScrolled ? "text.primary" : "white" }}>
                로그인
              </Button>
              <Button color="inherit" component={Link} to="/signup" sx={{ color: isScrolled ? "text.primary" : "white" }}>
                회원가입
              </Button>
            </>
          )} */}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
