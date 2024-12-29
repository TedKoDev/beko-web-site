import { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Button, Box, Menu, MenuItem } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import AnimatedButton from "../Button/AnimatedButton";
import { colors } from "../../styles/colors";
import logo from "../../assets/icon.png";
import LanguageIcon from "@mui/icons-material/Language";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { useLanguageStore } from "../../store/languageStore";

export default function Navbar() {
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { setLanguage } = useLanguageStore();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onClickStart = () => {
    // navigate("/terms");
    alert("앱 배포가 진행중 입니다. 조금만 기다려주세요.");
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: isScrolled ? "white" : "white",
        boxShadow: isScrolled ? 1 : "none",
        transition: "background-color 0.3s ease-in-out",
        width: "100%",
        // overflowX: "hidden",
      }}
    >
      <Toolbar
        sx={{
          px: { xs: 1, sm: 2 },
          minHeight: { xs: "56px" },
        }}
      >
        {/* Logo and Title */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginLeft: { xs: 1, sm: 4, md: "20vh" },
            gap: { xs: 1, sm: 2 },
          }}
        >
          <Box
            sx={{
              width: { xs: "35px", sm: "50px" },
              height: { xs: "35px", sm: "50px" },
            }}
          >
            <img src={logo} alt="logo" style={{ width: "100%", height: "100%" }} />
          </Box>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              textDecoration: "none",
              color: "black",
              fontSize: { xs: "1rem", sm: "1.25rem" },
            }}
          >
            BeraKorean
          </Typography>
        </Box>

        {/* Spacer */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Language Selector */}
        <Box sx={{ mr: { xs: 1, sm: 2 } }}>
          <Button
            id="language-button"
            aria-controls={open ? "language-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{
              color: "black",
              textTransform: "none",
              fontSize: "1rem",
              minWidth: { xs: "40px", sm: "auto" }, // 모바일에서 최소 너비 조정
            }}
            startIcon={<LanguageIcon />}
            endIcon={
              <Box component="span" sx={{ display: { xs: "none", sm: "inline-flex" } }}>
                <KeyboardArrowDownIcon />
              </Box>
            }
          >
            <Box sx={{ display: { xs: "none", sm: "block" } }}>Language</Box>
          </Button>
          <Menu
            id="language-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "language-button",
            }}
            disableScrollLock={true}
          >
            <MenuItem
              onClick={() => {
                setLanguage("ko");
                handleClose();
              }}
            >
              한국어
            </MenuItem>
            <MenuItem
              onClick={() => {
                setLanguage("en");
                handleClose();
              }}
            >
              English
            </MenuItem>
            <MenuItem
              onClick={() => {
                setLanguage("jp");
                handleClose();
              }}
            >
              日本語
            </MenuItem>
          </Menu>
        </Box>

        {/* Start Button */}
        <Box
          sx={{
            marginRight: { xs: 1, sm: 4, md: "40vh" },
          }}
        >
          <AnimatedButton text="시작하기" onClick={onClickStart} color={colors.primary} shadowColor={colors.tertiary} width="100px" height="40px" />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
