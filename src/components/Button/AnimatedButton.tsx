import { motion } from "framer-motion";
import { Button, Box } from "@mui/material";
import { colors } from "../../styles/colors";
interface AnimatedButtonProps {
  text: string;
  onClick: () => void;
  color?: string;
  shadowColor?: string;
  width?: string;
  height?: string;
}

const AnimatedButton = ({
  text,
  onClick,
  color = colors.primary, // 버튼 배경색
  shadowColor = colors.tertiary, // 그림자 색상
  width = "200px",
  height = "50px",
}: AnimatedButtonProps) => {
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
          top: "4px", // 버튼 아래로 살짝 이동
          left: "0",
          right: "0",
          bottom: "-4px", // 그림자가 버튼 아래로 나오는 위치
          backgroundColor: shadowColor,
          borderRadius: "12px", // 그림자 모서리
          zIndex: -1,
        },
      }}
    >
      <Button
        component={motion.button}
        variants={{
          hover: {
            y: -2, // 버튼이 위로 살짝 떠오름
          },
          tap: {
            y: 2, // 버튼이 눌림
          },
        }}
        onClick={onClick}
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: color,
          color: "white",
          fontWeight: "bold",
          textTransform: "uppercase",
          borderRadius: "12px",
          boxShadow: "none", // 기본 그림자 제거
          "&:hover": {
            backgroundColor: color,
            opacity: 0.9,
            boxShadow: "none",
          },
        }}
        whileHover="hover"
        whileTap="tap"
        variant="contained"
      >
        {text}
      </Button>
    </Box>
  );
};

export default AnimatedButton;
