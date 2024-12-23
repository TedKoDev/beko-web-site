import { Box, Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import KoreanConsonants from "../components/deco";
import AnimatedButton from "../components/Button/AnimatedButton";
import { colors } from "../styles/colors";
import AnimatedButtonWithIcon from "../components/Button/AnimatedButtonWithIcon";
// import icon from "../assets/icon.png";
// import schoolLogo from "../assets/schoollogo.jpg";
// import teacherProfile from "../assets/teacher_profile.png";
// import students from "../assets/students.png";
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
import { useState } from "react";
import { useLanguageStore } from "../store/languageStore";
import ComingSoonDialog from "../components/common/ComingSoonDialog";

export default function Home() {
  const [dialogOpen, setDialogOpen] = useState(false);

  const clickHandler = () => {
    if (dialogOpen) {
      setDialogOpen(false); // 다이얼로그 닫기
    } else {
      setDialogOpen(true); // 다이얼로그 열기
    }
  };
  const { language } = useLanguageStore();

  const links = {
    ko: {
      cafetalk: "카페톡에서 수업 신청하기",
      youtube: "유튜브 채널 구경하기",
      cta: "1:1 상담 신청하기",
    },
    en: {
      cafetalk: "Book Lessons on Cafetalk",
      youtube: "Visit YouTube Channel",
      cta: "Ask 1:1 Consultation",
    },
    jp: {
      cafetalk: "Cafetalkでレッスンを予約",
      youtube: "YouTubeチャンネルを見る",
      cta: "1:1 相談を申し込む",
    },
  };

  const content = {
    ko: {
      hero: {
        title: "BeraKorean",
        subtitle: "함께 성장하는 커뮤니티",
        cta: "시작하기",
      },
      features: {
        title: "주요 기능",
        community: {
          title: "한국어 커뮤니티",
          description: "다양한 한국 및 한국어 관련 정보를 나누고 얻을 수 있습니다. 커뮤니티 멤버들과 함께 정보를 공유하고 소통하세요.",
        },
        consulting: {
          title: "Bera 선생님 컨설팅",
          description: "베라 선생님에게 1:1로 공부 관련 문의를 할 수 있습니다. 개인 맞춤형 학습 상담을 받아보세요.",
        },
        games: {
          title: "한국어 공부 게임",
          description: "그림보고 단어 맞추기 등 한국어를 공부할 수 있는 다양한 게임을 통해 재미있게 학습하세요.",
        },
        info: {
          title: "한국 관련 정보",
          description: "지속적인 한국 유학 및 일자리 정보 등 다양한 에이전시 정보들이 업데이트됩니다. 최신 정보를 확인하세요.",
        },
      },
      howToUse: {
        title: "이용 방법",
        appDownload: {
          title: "앱 다운로드",
          description: "구글 플레이 스토어와 애플 앱스토어에서 BeraKorean 앱을 다운로드할 수 있습니다.",
          note: "* 웹사이트 버전은 현재 준비중입니다.",
          appStore: "App Store에서 다운로드",
          playStore: "Google Play에서 다운로드",
        },
        startNow: {
          title: "지금 시작하세요",
          subtitle: "BeraKorean과 함께 성장하는 여정을 시작해보세요",
          cta: "무료로 시작하기",
        },
      },
      title: "강사 소개",
      greeting: "안녕하세요, BeraKorean입니다!",
      name: "베라 선생님",
      intro: {
        content: "한국어를 재미있고 효과적으로 가르치는 것을 좋아합니다.",
        closing: "함께 즐겁게 한국어를 배워보아요!",
      },
      recommended: {
        title: "이런 분들께 추천드려요",
        items: ["한국어를 처음 배우시는 분", "체계적으로 한국어를 배우고 싶으신 분", "한국 문화에 관심이 있으신 분"],
      },
      background: {
        title: "학력 및 경력",
        items: ["한국어교육 전공", "한국어교원 자격증 보유", "5년 이상의 한국어 교육 경력"],
      },
      youtube: {
        title: "유튜브 채널",
        description: "BeraKorean 유튜브 채널에서 다양한 한국어 관련 컨텐츠들을 시청할 수 있습니다.",
      },
      cafetalk: {
        title: "카페톡 수업 신청",
        description: "카페톡에서 1:1 한국어 수업을 신청하실 수 있습니다.",
      },
    },
    en: {
      hero: {
        title: "BeraKorean",
        subtitle: "Growing Together Community",
        cta: "Get Started",
      },
      features: {
        title: "Main Features",
        community: {
          title: "Korean Community",
          description: "Share and get various information about Korea and Korean language. Connect and communicate with community members.",
        },
        consulting: {
          title: "Consulting with Teacher Bera",
          description: "Get 1:1 study consultation with Teacher Bera. Receive personalized learning guidance.",
        },
        games: {
          title: "Korean Study Games",
          description: "Learn Korean through various games like picture word matching. Make learning fun and engaging.",
        },
        info: {
          title: "Korea Information",
          description: "Get updated information about studying and working in Korea from various agencies. Stay informed with the latest updates.",
        },
      },
      howToUse: {
        title: "How to Use",
        appDownload: {
          title: "App Download",
          description: "Download the BeraKorean app from Google Play Store and Apple App Store.",
          note: "* Website version is coming soon.",
          appStore: "Download on App Store",
          playStore: "Get it on Google Play",
        },
        startNow: {
          title: "Start Now",
          subtitle: "Begin your journey of growth with BeraKorean",
          cta: "Start Free",
        },
      },
      title: "About the Teacher",
      greeting: "Hello, I'm BeraKorean!",
      name: "Teacher Bera",
      intro: {
        content: "I love teaching Korean in a fun and effective way.",
        closing: "Let's learn Korean together!",
      },
      recommended: {
        title: "Recommended For",
        items: ["Beginners in Korean", "Those who want to learn Korean systematically", "Those interested in Korean culture"],
      },
      background: {
        title: "Education & Experience",
        items: ["Major in Korean Language Education", "Certified Korean Language Teacher", "Over 5 years of teaching experience"],
      },
      youtube: {
        title: "YouTube Channel",
        description: "Watch various Korean language content on the BeraKorean YouTube channel.",
      },
      cafetalk: {
        title: "Book Cafetalk Lessons",
        description: "You can book 1:1 Korean lessons on Cafetalk.",
      },
    },
    jp: {
      hero: {
        title: "BeraKorean",
        subtitle: "共に成長するコミュニティ",
        cta: "始める",
      },
      features: {
        title: "主な機能",
        community: {
          title: "韓国語コミュニティ",
          description: "韓国や韓国語に関する様々な情報を共有できます。コミュニティメンバーと情報を交換し、交流しましょう。",
        },
        consulting: {
          title: "Bera先生の相談",
          description: "Bera先生に1:1で学習相談ができます。個別カスタマイズされた学習アドバイスを受けられます。",
        },
        games: {
          title: "韓国語学習ゲーム",
          description: "絵を見て単語を当てるなど、様々なゲームを通じて楽しく韓国語を学習できます。",
        },
        info: {
          title: "韓国関連情報",
          description: "韓国留学や就職情報など、様々なエージェンシー情報が更新されます。最新情報をチェックしましょう。",
        },
      },
      howToUse: {
        title: "利用方法",
        appDownload: {
          title: "アプリダウンロード",
          description: "Google Play StoreとApple App StoreでBeraKoreanアプリをダウンロードできます。",
          note: "* ウェブサイト版は現在準備中です。",
          appStore: "App Storeでダウンロード",
          playStore: "Google Playで入手",
        },
        startNow: {
          title: "今すぐ始めましょう",
          subtitle: "BeraKoreanと共に成長の旅を始めましょう",
          cta: "無料で始める",
        },
      },
      title: "講師紹介",
      greeting: "こんにちは、BeraKoreanです！",
      name: "ベラ先生",
      intro: {
        content: "楽しく効果的に韓国語を教えることが大好きです。",
        closing: "一緒に楽しく韓国語を学びましょう！",
      },
      recommended: {
        title: "こんな方におすすめ",
        items: ["韓国語を初めて学ぶ方", "体系的に韓国語を学びたい方", "韓国文化に興味がある方"],
      },
      background: {
        title: "学歴・経歴",
        items: ["韓国語教育専攻", "韓国語教員資格保有", "5年以上の韓国語教育経験"],
      },
      youtube: {
        title: "YouTubeチャンネル",
        description: "BeraKorean YouTubeチャンネルで様々な韓国語コンテンツをご覧いただけます。",
      },
      cafetalk: {
        title: "Cafetalkレッスン予約",
        description: "Cafetalkで1:1韓国語レッスンを予約することができます。",
      },
    },
  };

  // const clickHandler = () => {
  //   console.log("click");
  // };

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
                {content[language].hero.title}
              </Typography>
              <Typography variant="h4" color="black">
                {content[language].hero.subtitle}
              </Typography>
              <Box sx={{ mt: 10, display: "flex", justifyContent: "center", marginTop: { xs: "0px", sm: "50px" } }}>
                <AnimatedButton
                  text={content[language].hero.cta}
                  onClick={() => {
                    clickHandler();
                  }}
                  color={colors.primary}
                  shadowColor={colors.tertiary}
                  width="350px"
                  height="50px"
                />
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
            {content[language].features.title}
          </Typography>

          {/* 첫 번째 기능 */}
          <Box display="flex" flexDirection={{ xs: "column", md: "row" }} alignItems="center" sx={{ mb: 8 }}>
            <Box sx={{ display: "flex", width: { xs: "100%", md: "50%" }, mb: { xs: 2, md: 0 } }}>
              <Box component="img" src={bannercomm1} alt="커뮤니티" sx={{ width: "50%", height: "auto", mr: 1 }} />
              <Box component="img" src={bannercomm2} alt="커뮤니티" sx={{ width: "50%", height: "auto" }} />
            </Box>
            <Box sx={{ width: { xs: "100%", md: "50%" }, textAlign: "left", pl: { xs: 0, md: 3 } }}>
              <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: "purple", fontSize: { xs: "1.5rem", md: "2rem" } }}>
                {content[language].features.community.title}
              </Typography>
              <Typography>{content[language].features.community.description}</Typography>
            </Box>
          </Box>

          {/* 두 번째 기능 */}
          <Box display="flex" flexDirection={{ xs: "column", md: "row" }} alignItems="center" sx={{ mb: 8 }}>
            <Box sx={{ width: { xs: "100%", md: "50%" }, textAlign: "left", mb: { xs: 2, md: 0 } }}>
              <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: "purple", fontSize: { xs: "1.5rem", md: "2rem" } }}>
                {content[language].features.consulting.title}
              </Typography>
              <Typography>{content[language].features.consulting.description}</Typography>
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
                {content[language].features.games.title}
              </Typography>
              <Typography>{content[language].features.games.description}</Typography>
            </Box>
          </Box>

          {/* 네 번째 기능 */}
          <Box display="flex" flexDirection={{ xs: "column", md: "row" }} alignItems="center">
            <Box sx={{ width: { xs: "100%", md: "50%" }, textAlign: "left", mb: { xs: 2, md: 0 } }}>
              <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: "purple", fontSize: { xs: "1.5rem", md: "2rem" } }}>
                {content[language].features.info.title}
              </Typography>
              <Typography>{content[language].features.info.description}</Typography>
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
            {content[language].title}
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
                {content[language].greeting}
              </Typography>
              <Typography variant="h5" gutterBottom>
                {content[language].name}
              </Typography>
              <Typography>{content[language].intro.content}</Typography>
              <Typography sx={{ mt: 2, fontWeight: "bold" }}>{content[language].intro.closing}</Typography>
            </Box>
          </Box>

          {/* 추천 대상 */}
          <Box display="flex" flexDirection={{ xs: "column", md: "row" }} alignItems="center" sx={{ mb: 8 }}>
            <Box sx={{ width: { xs: "100%", md: "50%" }, textAlign: "left", mb: { xs: 2, md: 0 } }}>
              <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: "purple", fontSize: { xs: "1.5rem", md: "2rem" } }}>
                {content[language].recommended.title}
              </Typography>
              {content[language].recommended.items.map((item, index) => (
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
                {content[language].background.title}
              </Typography>
              {content[language].background.items.map((item, index) => (
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
        <Container maxWidth="lg">
          <Typography variant="h3" marginBottom="40px" textAlign="center" gutterBottom sx={{ fontSize: { xs: "2rem", md: "3rem" } }}>
            {content[language].howToUse.title}
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
                {content[language].howToUse.appDownload.title}
              </Typography>
              <Typography sx={{ mb: 2 }}>{content[language].howToUse.appDownload.description}</Typography>
              <Typography color="text.secondary" sx={{ mb: 2 }}>
                {content[language].howToUse.appDownload.note}
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
                    text={content[language].howToUse.appDownload.appStore}
                    onClick={() => {
                      clickHandler();
                    }}
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
                    text={content[language].howToUse.appDownload.playStore}
                    onClick={() => {
                      clickHandler();
                    }}
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
                {content[language].youtube.title}
              </Typography>
              <Typography sx={{ mb: 3 }}>{content[language].youtube.description}</Typography>
              <Box
                sx={{
                  position: "relative",
                  zIndex: 1,
                  width: { xs: "100%", sm: "300px" },
                }}
              >
                <AnimatedButtonWithIcon
                  text={links[language].youtube}
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
                {content[language].cafetalk.title}
              </Typography>
              <Typography sx={{ mb: 3 }}>{content[language].cafetalk.description}</Typography>

              <Box
                sx={{
                  position: "relative",
                  zIndex: 1,
                  width: { xs: "100%", sm: "300px" },
                }}
              >
                <AnimatedButtonWithIcon
                  text={links[language].cafetalk}
                  onClick={() => window.open("https://cafetalk.com/tutor/profile/?c=eJzLrwp09s7R9tNPCSqrTM7KdkwuSE1Kt7UFAGnjCHY.&lang=en", "_blank")}
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
              {content[language].howToUse.startNow.title}
            </Typography>
            <Typography variant="h6" sx={{ mb: 4 }}>
              {content[language].howToUse.startNow.subtitle}
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
              <AnimatedButton
                text={content[language].hero.cta}
                onClick={() => {
                  clickHandler();
                }}
                color="white"
                textColor="primary.main"
                shadowColor="rgba(255, 255, 255, 0.3)"
                width="350px"
                height="50px"
              />
            </Box>
          </Box>
        </Container>
      </Box>
      <ComingSoonDialog open={dialogOpen} onClose={clickHandler} />
      <Box sx={{ position: "absolute", top: 20, right: 20, display: "flex", gap: 1 }}>
        <Button onClick={() => setLanguage("ko")}>한국어</Button>
        <Button onClick={() => setLanguage("en")}>English</Button>
        <Button onClick={() => setLanguage("jp")}>日本語</Button>
      </Box>
    </Box>
  );
}
