import { motion } from "framer-motion";
import { Button, Box } from "@mui/material";
import { colors } from "../../styles/colors";

interface AnimatedButtonWithIconProps {
  text: string;
  onClick: () => void;
  color?: string;
  shadowColor?: string;
  width?: string | object;
  height?: string;
  startIcon?: React.ReactNode;
}

const AnimatedButtonWithIcon = ({ text, onClick, color = colors.primary, shadowColor = colors.tertiary, width = "200px", height = "50px", startIcon }: AnimatedButtonWithIconProps) => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-block",
        width: width,
        height: height,
        "&::before": {
          content: '""',
          position: "absolute",
          top: "4px",
          left: "0",
          right: "0",
          bottom: "-4px",
          backgroundColor: shadowColor,
          borderRadius: "12px",
          zIndex: -1,
        },
      }}
    >
      <Button
        component={motion.button}
        variants={{
          hover: {
            y: -2,
          },
          tap: {
            y: 2,
          },
        }}
        onClick={onClick}
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: color,
          color: "white",
          fontWeight: "bold",
          textTransform: "none",
          borderRadius: "12px",
          boxShadow: "none",
          display: "flex",
          alignItems: "center",
          gap: 1,
          "&:hover": {
            backgroundColor: color,
            opacity: 0.9,
            boxShadow: "none",
          },
        }}
        whileHover="hover"
        whileTap="tap"
        variant="contained"
        startIcon={startIcon}
      >
        {text}
      </Button>
    </Box>
  );
};

export default AnimatedButtonWithIcon;
