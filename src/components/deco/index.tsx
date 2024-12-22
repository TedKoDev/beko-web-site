import { useEffect, useState } from "react";
import { Box } from "@mui/material";

export default function KoreanConsonants() {
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      sx={
        {
          // position: "absolute",
          // top: "50%",
          // right: "30%",
          // transform: "translateY(-50%)",
          // display: "flex",
          // alignItems: "center",
          // justifyContent: "center",
        }
      }
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 3,
          p: 2,
          maxWidth: "500px",
        }}
      >
        {["ㄱ", "ㄴ", "ㄷ", "ㄹ", "ㅁ", "ㅂ", "ㅅ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ"].map((consonant, index) => {
          const dynamicAngle = Math.sin((scrollOffset + index * 50) / 100) * 30; // 스크롤 위치에 따라 각도 계산

          return (
            <Box
              key={index}
              sx={{
                aspectRatio: "1/1",
                width: { xs: "70px", md: "85px" },
                height: { xs: "70px", md: "85px" },
                bgcolor: "white",
                borderRadius: "16px",
                boxShadow: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transform: `rotate(${dynamicAngle}deg)`,
                transition: "box-shadow 0.3s ease",
                "&:hover": {
                  boxShadow: 10,
                },
              }}
            >
              <Box
                component="span"
                sx={{
                  fontSize: { xs: "2.25rem", md: "2.75rem" },
                  fontWeight: 500,
                  color: "text.primary",
                }}
              >
                {consonant}
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
