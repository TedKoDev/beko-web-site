import { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Button, Box, Menu, MenuItem, IconButton, Drawer, List, ListItem, ListItemText, ListItemButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

import AnimatedButton from "../Button/AnimatedButton";
import { colors } from "../../styles/colors";
import logo from "../../assets/icon.png";
import LanguageIcon from "@mui/icons-material/Language";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { useLanguageStore } from "../../store/languageStore";
import { useAuthStore } from "../../store/authStore";

export default function Navbar() {
  const navigate = useNavigate();
  const { logout } = useAuthStore();
  const [mobileOpen, setMobileOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { setLanguage } = useLanguageStore();

  const { isAuthenticated, user } = useAuthStore();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuItemClick = (path: string) => {
    navigate(path);
    setMobileOpen(false);
  };

  console.log(isAuthenticated);
  console.log(user);
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
    navigate("/login");
    // alert("앱 배포가 진행중 입니다. 조금만 기다려주세요.");
  };

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    handleClose();
  };

  const drawer = (
    <List>
      <ListItem onClick={() => handleMenuItemClick("/main")}>
        <ListItemButton>
          <ListItemText primary="Main" />
        </ListItemButton>
      </ListItem>
      <ListItem onClick={() => handleMenuItemClick("/download")}>
        <ListItemButton>
          <ListItemText primary="Download" />
        </ListItemButton>
      </ListItem>
      {isAuthenticated && (
        <ListItem onClick={logout}>
          <ListItemButton>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      )}
    </List>
  );

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: isScrolled ? "white" : "white",
        boxShadow: isScrolled ? 1 : "none",
        transition: "background-color 0.3s ease-in-out",
        width: "100%",
        padding: "10px",
        paddingLeft: { xs: "3vw", sm: "10vw" },
        paddingRight: { xs: "3vw", sm: "10vw" },
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Toolbar
        sx={{
          px: { xs: 1, sm: 2 },
          minHeight: { xs: "56px" },
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* Left Section */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* Mobile Menu Icon */}
          <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: "none" }, color: "black" }}>
            <MenuIcon />
          </IconButton>

          {/* Logo and Title */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
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

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, ml: 4 }}>
            <Button color="inherit" onClick={() => navigate("/main")} sx={{ color: "black" }}>
              Main
            </Button>
            {/* <Button color="inherit" onClick={() => navigate("/download")} sx={{ color: "black" }}>
              Download
            </Button> */}
          </Box>
        </Box>

        {/* Right Section */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {/* Language Selector */}
          <Box>
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
                minWidth: { xs: "40px", sm: "auto" },
              }}
              startIcon={<LanguageIcon />}
              endIcon={<KeyboardArrowDownIcon />}
            />
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
              <MenuItem onClick={() => handleLanguageChange("ko")}>한국어</MenuItem>
              <MenuItem onClick={() => handleLanguageChange("en")}>English</MenuItem>
              <MenuItem onClick={() => handleLanguageChange("jp")}>日本語</MenuItem>
            </Menu>
          </Box>

          {/* Start Button or Auth Section */}
          {isAuthenticated ? (
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Typography variant="body1" color="black">
                Welcome, {user?.username}!
              </Typography>
              <Button variant="contained" color="error" onClick={logout} sx={{ display: { xs: "none", sm: "block" } }}>
                Logout
              </Button>
            </Box>
          ) : (
            <AnimatedButton text="START" onClick={onClickStart} color={colors.primary} shadowColor={colors.tertiary} width="100px" height="40px" />
          )}
        </Box>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}
