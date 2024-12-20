import { Box, Container, Typography, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import KoreanConsonants from "../components/deco";
import AnimatedButton from "../components/Button/AnimatedButton";
import { colors } from "../styles/colors";

export default function Home() {
  return (
    <Box>
      {/* Hero Section with Background Image */}
      <Box
        sx={{
          height: "100vh",
          backgroundImage: 'url("/path/to/your/image.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            // bgcolor: "rgba(0, 0, 0, 0.3)",
          }}
        />

        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              zIndex: 2,
            }}
          >
            <Typography
              variant="h1"
              color="black"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "2.5rem", md: "4rem" },
              }}
            >
              BeraKorean
            </Typography>
            <Typography variant="h4" color="black">
              함께 성장하는 커뮤니티
            </Typography>
            <Box sx={{ mt: 10 }}>
              <AnimatedButton text="시작하기" onClick={() => {}} color={colors.primary} shadowColor={colors.tertiary} width="350px" height="50px" />
            </Box>
          </Box>
        </Container>

        <KoreanConsonants />
      </Box>
      {/* Second Section - Features */}
      <Box sx={{ py: 15, backgroundColor: "white", borderTop: "1px solid #e0e0e0" }}>
        <Container maxWidth="lg">
          <Typography variant="h3" textAlign="center" gutterBottom>
            주요 기능
          </Typography>

          {/* 첫 번째 줄 */}
          <Box display="flex" alignItems="center" sx={{ mb: 4 }}>
            <Box component="img" src="/assets/icon1.png" alt="Feature 1" sx={{ width: "50%", height: "auto", mr: 3 }} />
            <Box sx={{ width: "50%", textAlign: "left" }}>
              <Typography variant="h5" gutterBottom sx={{ color: "green" }}>
                재밌고 효과적인 무료 언어 학습
              </Typography>
              <Typography>
                듀오링고와 함께하는 학습은 재미있을 뿐 아니라, 그 효과도 입증되었어요! 짧막한 레슨으로 포인트를 획득하고 새로운 레벨을 잠금 해제하며 실생활 회화 능력을 키워보세요.
              </Typography>
            </Box>
          </Box>

          {/* 두 번째 줄 */}
          <Box display="flex" alignItems="center">
            <Box sx={{ width: "50%", textAlign: "left" }}>
              <Typography variant="h5" gutterBottom sx={{ color: "green" }}>
                과학에 기반한 학습
              </Typography>
              <Typography>듀오링고는 연구를 통해 인증된 교수법과 재미있는 콘텐츠를 결합하여 읽기, 쓰기, 듣기, 말하기 능력을 효과적으로 가르치는 과정을 만들었습니다!</Typography>
            </Box>
            <Box component="img" src="/assets/icon.png" alt="Feature 2" sx={{ width: "50%", height: "auto", ml: 3 }} />
          </Box>
        </Container>
      </Box>

      {/* Second Section - Features */}
      <Box sx={{ py: 15, backgroundColor: "white", borderTop: "1px solid #e0e0e0" }}>
        <Container maxWidth="lg" sx={{ backgroundColor: "red" }}>
          <Typography variant="h3" textAlign="center" gutterBottom>
            주요 기능
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {[1, 2, 3].map((item) => (
              <Grid item xs={12} md={4} key={item}>
                <Box textAlign="center">
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      backgroundColor: "primary.main",
                      borderRadius: "50%",
                      margin: "0 auto",
                      mb: 2,
                    }}
                  />
                  <Typography variant="h5" gutterBottom>
                    Feature {item}
                  </Typography>
                  <Typography color="text.secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Third Section - How it works */}
      <Box sx={{ py: 15, backgroundColor: "grey.100" }}>
        <Container maxWidth="lg">
          <Typography variant="h3" textAlign="center" gutterBottom>
            이용 방법
          </Typography>
          <Grid container spacing={4} alignItems="center" sx={{ mt: 4 }}>
            <Grid item xs={12} md={6}>
              <Box sx={{ p: 2 }}>
                <Typography variant="h5" gutterBottom>
                  간단한 3단계
                </Typography>
                {[1, 2, 3].map((step) => (
                  <Box key={step} sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        backgroundColor: "primary.main",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mr: 2,
                      }}
                    >
                      {step}
                    </Box>
                    <Typography>Step {step} description goes here</Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  width: "100%",
                  height: 400,
                  backgroundColor: "grey.300",
                  borderRadius: 2,
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Fourth Section - CTA */}
      <Box
        sx={{
          py: 15,
          backgroundColor: "primary.main",
          color: "white",
        }}
      >
        <Container maxWidth="lg">
          <Box textAlign="center">
            <Typography variant="h3" gutterBottom>
              지금 시작하세요
            </Typography>
            <Typography variant="h6" sx={{ mb: 4 }}>
              BeraKorean과 함께 성장하는 여정을 시작해보세요
            </Typography>
            <Button
              variant="contained"
              size="large"
              component={Link}
              to="/signup"
              sx={{
                backgroundColor: "white",
                color: "primary.main",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                },
              }}
            >
              무료로 시작하기
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
