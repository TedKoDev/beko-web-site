import { Box, Container, Typography } from "@mui/material";

import { useTranslation } from "react-i18next";

import KoreanConsonants from "../components/deco";
import AnimatedButton from "../components/Button/AnimatedButton";
import { colors } from "../styles/colors";
import AnimatedButtonWithIcon from "../components/Button/AnimatedButtonWithIcon";

import {
  schoolLogo,
  teacherProfile,
  students,
  bannercomm1,
  bannercomm2,
  bannercomm3,
  bannerteacher1,
  bannerteacher2,
  bannergame1,
  bannergame2,
  bannerinfo1,
  berayoutube,
  cafetalkpreview,
  cafetalk,
  apple,
  google,
  youtube,
} from "../assets";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
export default function Home() {
  const navigate = useNavigate();
  const { t } = useTranslation("home");
  const { isAuthenticated } = useAuthStore();

  const clickHandler = () => {
    const downloadSection = document.getElementById("download-section");
    if (downloadSection) {
      downloadSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const clickAppStoreHandler = () => {
    window.open("https://apps.apple.com/mx/app/berakorean/id6739745872?l=en-GB", "_blank");
  };

  const clickPlayStoreHandler = () => {
    window.open("https://play.google.com/store/apps/details?id=com.ordihong.beko&pcampaignid=web_share", "_blank");
  };

  return (
    <Box>
      {/* 눈 내리는 효과 */}
      {/* <Snowfall
        color="rgba(0,0, 0,0.5)" // 눈 색상
        // color="rgba(0,81, 255,0.5)" // 눈 색상
        // color="rgba( 255,0,0,0.5)" // 눈 색상
        snowflakeCount={50} // 눈송이 개수
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 3,
          pointerEvents: "none",
        }}
      /> */}

      <Box>
        {/* Hero Section with Background Image */}
        <Box
          sx={{
            height: "100vh",
            // backgroundImage: 'url("")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              // backgroundColor: "rgba(0, 0, 0, 0.3)",
              // bgcolor: "rgba(0, 0, 0, 0.3)",
            }}
          />

          <Container maxWidth="lg">
            <Box sx={{ display: "flex", justifyContent: "center", flexDirection: { xs: "column", sm: "row" }, alignItems: "center" }}>
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
                  {t("hero.title")}
                </Typography>
                <Typography variant="h4" color="black">
                  {t("hero.subtitle")}
                </Typography>
                <Box sx={{ mt: 10, display: "flex", justifyContent: "center", marginTop: { xs: "0px", sm: "50px" } }}>
                  <AnimatedButton text={t("hero.cta")} onClick={clickHandler} color={colors.primary} shadowColor={colors.tertiary} width="350px" height="50px" />
                </Box>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", marginLeft: { xs: "0px", sm: "200px" }, marginTop: { xs: "20px", sm: "0px" } }}>
                <KoreanConsonants />
              </Box>
            </Box>
          </Container>
        </Box>
        {/* Second Section - Features */}
        <Box sx={{ py: 15, backgroundColor: "white", borderTop: "1px solid #e0e0e0" }}>
          <Container maxWidth="lg">
            <Typography variant="h3" sx={{ marginBottom: "40px", fontWeight: "bold", fontSize: { xs: "2rem", md: "3rem" } }} textAlign="center" gutterBottom>
              {t("features.title")}
            </Typography>

            {/* 첫 번째 기능 */}
            <Box display="flex" flexDirection={{ xs: "column", md: "row" }} alignItems="center" sx={{ mb: 8 }}>
              <Box sx={{ display: "flex", width: { xs: "100%", md: "50%" }, mb: { xs: 2, md: 0 } }}>
                <Box component="img" src={bannercomm1} alt="커뮤니티" sx={{ width: "50%", height: "auto", mr: 1 }} />
                <Box component="img" src={bannercomm2} alt="커뮤니티" sx={{ width: "50%", height: "auto" }} />
              </Box>
              <Box sx={{ width: { xs: "100%", md: "50%" }, textAlign: "left", pl: { xs: 0, md: 3 } }}>
                <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: "purple", fontSize: { xs: "1.5rem", md: "2rem" } }}>
                  {t("features.community.title")}
                </Typography>
                <Typography>{t("features.community.description")}</Typography>
              </Box>
            </Box>

            {/* 두 번째 기능 */}
            <Box display="flex" flexDirection={{ xs: "column", md: "row" }} alignItems="center" sx={{ mb: 8 }}>
              <Box sx={{ width: { xs: "100%", md: "50%" }, textAlign: "left", mb: { xs: 2, md: 0 } }}>
                <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: "purple", fontSize: { xs: "1.5rem", md: "2rem" } }}>
                  {t("features.consulting.title")}
                </Typography>
                <Typography>{t("features.consulting.description")}</Typography>
              </Box>
              <Box sx={{ display: "flex", width: { xs: "100%", md: "50%" }, justifyContent: "center", gap: 2 }}>
                <Box component="img" src={bannerteacher1} alt="커뮤니티" sx={{ width: "45%", height: "auto" }} />
                <Box component="img" src={bannerteacher2} alt="커뮤니티" sx={{ width: "45%", height: "auto" }} />
              </Box>
            </Box>

            {/* 세 번째 기능 */}
            <Box display="flex" flexDirection={{ xs: "column-reverse", md: "row" }} alignItems="center" sx={{ mb: 8 }}>
              <Box sx={{ display: "flex", width: { xs: "100%", md: "50%" }, justifyContent: "center", gap: 2, mb: { xs: 0, md: 0 }, mt: { xs: 2, md: 0 } }}>
                <Box component="img" src={bannergame1} alt="커뮤니티" sx={{ width: "45%", height: "auto" }} />
                <Box component="img" src={bannergame2} alt="커뮤니티" sx={{ width: "45%", height: "auto" }} />
              </Box>
              <Box sx={{ width: { xs: "100%", md: "50%" }, textAlign: "left", pl: { xs: 0, md: 3 } }}>
                <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: "purple", fontSize: { xs: "1.5rem", md: "2rem" } }}>
                  {t("features.games.title")}
                </Typography>
                <Typography>{t("features.games.description")}</Typography>
              </Box>
            </Box>

            {/* 네 번째 기능 */}
            <Box display="flex" flexDirection={{ xs: "column", md: "row" }} alignItems="center">
              <Box sx={{ width: { xs: "100%", md: "50%" }, textAlign: "left", mb: { xs: 2, md: 0 } }}>
                <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: "purple", fontSize: { xs: "1.5rem", md: "2rem" } }}>
                  {t("features.info.title")}
                </Typography>
                <Typography>{t("features.info.description")}</Typography>
              </Box>
              <Box sx={{ display: "flex", width: { xs: "100%", md: "50%" }, justifyContent: "center", gap: 2 }}>
                <Box component="img" src={bannerinfo1} alt="커뮤니티" sx={{ width: "45%", height: "auto" }} />
                <Box component="img" src={bannercomm3} alt="커뮤니티" sx={{ width: "45%", height: "auto" }} />
              </Box>
            </Box>
          </Container>
        </Box>
        {/* Teacher Introduction Section */}
        <Box sx={{ py: 15, backgroundColor: "white", borderTop: "1px solid #e0e0e0" }}>
          <Container maxWidth="lg">
            <Typography variant="h3" textAlign="center" gutterBottom sx={{ fontSize: { xs: "2rem", md: "3rem" } }}>
              {t("teacher.title")}
            </Typography>

            {/* 인사말 및 기본 소개 */}
            <Box display="flex" flexDirection={{ xs: "column", md: "row" }} alignItems="center" sx={{ mb: 8 }}>
              <Box
                component="img"
                src={teacherProfile}
                alt="Bera 선생님"
                sx={{
                  width: { xs: "100%", md: "50%" },
                  height: "auto",
                  mb: { xs: 3, md: 0 },
                  mr: { xs: 0, md: 3 },
                }}
              />
              <Box sx={{ width: { xs: "100%", md: "50%" }, textAlign: "left" }}>
                <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: "purple", fontSize: { xs: "1.5rem", md: "2rem" } }}>
                  {t("teacher.greeting")}
                </Typography>
                <Typography variant="h5" gutterBottom>
                  {t("teacher.name")}
                </Typography>
                <Typography>{t("teacher.intro.content")}</Typography>
                <Typography sx={{ mt: 2, fontWeight: "bold" }}>{t("teacher.intro.closing")}</Typography>
              </Box>
            </Box>

            {/* 추천 대상 */}
            <Box display="flex" flexDirection={{ xs: "column", md: "row" }} alignItems="center" sx={{ mb: 8 }}>
              <Box sx={{ width: { xs: "100%", md: "50%" }, textAlign: "left", mb: { xs: 2, md: 0 } }}>
                <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: "purple", fontSize: { xs: "1.5rem", md: "2rem" } }}>
                  {t("teacher.recommended.title")}
                </Typography>
                {t("teacher.recommended.items", { returnObjects: true }).map((item: string, index: number) => (
                  <Typography
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 1,
                      fontSize: { xs: "0.9rem", md: "1rem" },
                    }}
                  >
                    <Box component="span" sx={{ mr: 1, color: "purple" }}>
                      •
                    </Box>
                    {item}
                  </Typography>
                ))}
              </Box>
              <Box sx={{ width: { xs: "100%", md: "50%" }, pl: { xs: 0, md: 3 } }}>
                <Box component="img" src={students} alt="추천 대상" sx={{ width: "100%", height: "auto" }} />
              </Box>
            </Box>

            {/* 학력 및 경력 */}
            <Box display="flex" flexDirection={{ xs: "column-reverse", md: "row" }} alignItems="center">
              <Box sx={{ width: { xs: "100%", md: "50%" }, mt: { xs: 2, md: 0 } }}>
                <Box component="img" src={schoolLogo} alt="학력 및 경력" sx={{ width: "100%", height: "auto" }} />
              </Box>
              <Box sx={{ width: { xs: "100%", md: "50%" }, textAlign: "left", pl: { xs: 0, md: 3 } }}>
                <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: "purple", fontSize: { xs: "1.5rem", md: "2rem" } }}>
                  {t("teacher.background.title")}
                </Typography>
                {t("teacher.background.items", { returnObjects: true }).map((item: string, index: number) => (
                  <Typography
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 1,
                      fontSize: { xs: "0.9rem", md: "1rem" },
                    }}
                  >
                    <Box component="span" sx={{ mr: 1, color: "purple" }}>
                      •
                    </Box>
                    {item}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Container>
        </Box>
        {/* How to Use Section */}
        <Box sx={{ py: { xs: 8, md: 15 }, backgroundColor: "grey.100" }}>
          <section id="download-section">
            <Container maxWidth="lg">
              <Typography variant="h3" marginBottom="40px" textAlign="center" gutterBottom sx={{ fontSize: { xs: "2rem", md: "3rem" } }}>
                {t("howToUse.title")}
              </Typography>

              {/* 앱 다운로드 */}
              <Box display="flex" flexDirection={{ xs: "column", md: "row" }} alignItems="center" sx={{ mb: { xs: 4, md: 8 } }}>
                <Box
                  sx={{
                    width: { xs: "100%", md: "50%" },
                    textAlign: "left",
                    mb: { xs: 3, md: 0 },
                  }}
                >
                  <Typography variant="h5" gutterBottom sx={{ color: "purple" }}>
                    {t("howToUse.appDownload.title")}
                  </Typography>
                  <Typography sx={{ mb: 2 }}>{t("howToUse.appDownload.description")}</Typography>
                  <Typography color="text.secondary" sx={{ mb: 2 }}>
                    {t("howToUse.appDownload.note")}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      flexDirection: { xs: "column", sm: "row" },
                      alignItems: { xs: "stretch", sm: "center" },
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        zIndex: 1,
                        width: { xs: "100%", sm: "300px" },
                      }}
                    >
                      <AnimatedButtonWithIcon
                        text={t("howToUse.appDownload.appStore")}
                        onClick={clickAppStoreHandler}
                        color="black"
                        shadowColor="rgba(0, 0, 0, 0.3)"
                        width={{ xs: "100%", sm: "250px" }}
                        height="60px"
                        startIcon={<Box component="img" src={apple} sx={{ width: 24 }} />}
                      />
                    </Box>
                    <Box
                      sx={{
                        position: "relative",
                        zIndex: 1,
                        width: { xs: "100%", sm: "300px" },
                      }}
                    >
                      <AnimatedButtonWithIcon
                        text={t("howToUse.appDownload.playStore")}
                        onClick={clickPlayStoreHandler}
                        color="#1a73e8"
                        shadowColor="rgba(26, 115, 232, 0.3)"
                        width={{ xs: "100%", sm: "250px" }}
                        height="60px"
                        startIcon={<Box component="img" src={google} sx={{ width: 24 }} />}
                      />
                    </Box>
                  </Box>
                </Box>
                <Box display={{ xs: "none", md: "flex" }} width="50%">
                  <Box
                    component="img"
                    src={bannercomm3}
                    alt="앱 미리보기"
                    sx={{
                      width: { xs: "10%", md: "40%" },
                      height: "auto",
                      ml: { xs: 0, md: 3 },
                      mt: { xs: 3, md: 0 },
                    }}
                  />
                  <Box
                    component="img"
                    src={bannercomm1}
                    alt="앱 미리보기"
                    sx={{
                      width: { xs: "10%", md: "40%" },
                      height: "auto",
                      ml: { xs: 0, md: 3 },
                      mt: { xs: 3, md: 0 },
                    }}
                  />
                </Box>
              </Box>

              {/* 유튜브 채널 */}
              <Box display="flex" flexDirection={{ xs: "column", md: "row" }} alignItems="center" sx={{ mb: { xs: 4, md: 8 } }}>
                <Box
                  component="img"
                  src={berayoutube}
                  alt="유튜브 채널"
                  sx={{
                    width: { xs: "100%", md: "50%" },
                    height: "auto",
                    mr: { xs: 0, md: 3 },
                    mb: { xs: 3, md: 0 },
                    order: { xs: 2, md: 1 },
                  }}
                />
                <Box
                  sx={{
                    width: { xs: "100%", md: "50%" },
                    textAlign: "left",
                    order: { xs: 1, md: 2 },
                  }}
                >
                  <Typography variant="h5" gutterBottom sx={{ color: "purple" }}>
                    {t("youtube.title")}
                  </Typography>
                  <Typography sx={{ mb: 3 }}>{t("youtube.description")}</Typography>
                  <Box
                    sx={{
                      position: "relative",
                      zIndex: 1,
                      width: { xs: "100%", sm: "300px" },
                    }}
                  >
                    <AnimatedButtonWithIcon
                      text={t("links.youtube")}
                      onClick={() => window.open("https://www.youtube.com/@berakorean", "_blank")}
                      color="#FF0000"
                      shadowColor="rgba(255, 0, 0, 0.3)"
                      width={{ xs: "100%", sm: "300px" }}
                      height="60px"
                      startIcon={<Box component="img" src={youtube} sx={{ width: 24 }} />}
                    />
                  </Box>
                </Box>
              </Box>

              {/* 카페톡 수업 */}
              <Box display="flex" flexDirection={{ xs: "column", md: "row" }} alignItems="center">
                <Box
                  sx={{
                    width: { xs: "100%", md: "50%" },
                    textAlign: "left",
                    mb: { xs: 3, md: 0 },
                  }}
                >
                  <Typography variant="h5" gutterBottom sx={{ color: "purple" }}>
                    {t("cafetalk.title")}
                  </Typography>
                  <Typography sx={{ mb: 3 }}>{t("cafetalk.description")}</Typography>

                  <Box
                    sx={{
                      position: "relative",
                      zIndex: 1,
                      width: { xs: "100%", sm: "300px" },
                    }}
                  >
                    <AnimatedButtonWithIcon
                      text={t("links.cafetalk")}
                      onClick={clickHandler}
                      color={colors.primary}
                      shadowColor={colors.tertiary}
                      width={{ xs: "100%", sm: "300px" }}
                      height="60px"
                      startIcon={<Box component="img" src={cafetalk} sx={{ width: 50 }} />}
                    />
                  </Box>
                </Box>
                <Box
                  component="img"
                  src={cafetalkpreview}
                  alt="카페톡 수업"
                  sx={{
                    width: { xs: "100%", md: "50%" },
                    height: "auto",
                    ml: { xs: 0, md: 3 },
                  }}
                />
              </Box>
            </Container>
          </section>
        </Box>

        {/* Fifth Section - CTA */}
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
                {t("howToUse.startNow.title")}
              </Typography>
              <Typography variant="h6" sx={{ mb: 4 }}>
                {t("howToUse.startNow.subtitle")}
              </Typography>

              {/* Second Button - CTA */}
              <Box
                sx={{
                  position: "relative",
                  zIndex: 1,
                  display: "flex",
                  justifyContent: "center",
                  mt: { xs: 2, sm: 4 }, // Adjusted margin top
                }}
              >
                <AnimatedButton text={t("howToUse.startNow.cta")} onClick={clickHandler} color="white" textColor="primary.main" shadowColor="rgba(255, 255, 255, 0.3)" width="350px" height="50px" />
              </Box>
            </Box>
          </Container>
        </Box>
        {/* <ComingSoonDialog open={dialogOpen} onClose={clickHandler} /> */}
        {/* <Box sx={{ position: "absolute", top: 20, right: 20, display: "flex", gap: 1 }}>
          <Button onClick={() => setLanguage("ko")}>한국어</Button>
          <Button onClick={() => setLanguage("en")}>English</Button>
          <Button onClick={() => setLanguage("jp")}>日本語</Button>
        </Box> */}
      </Box>
    </Box>
  );
}
