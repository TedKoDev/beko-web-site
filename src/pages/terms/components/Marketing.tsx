import { Button, Typography, Paper } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export default function Marketing() {
  return (
    <Paper sx={{ p: 4, maxWidth: "800px", margin: "64px auto" }}>
      <Typography variant="h5" gutterBottom>
        마케팅 동의 / Marketing Consent
      </Typography>

      <Typography variant="body1" sx={{ mb: 3 }}>
        아래 버튼을 클릭하여 마케팅 동의 전문을 확인하실 수 있습니다. / Click the button below to view the full marketing consent.
      </Typography>

      <Button
        variant="contained"
        startIcon={<OpenInNewIcon />}
        href="https://flame-mascara-204.notion.site/Marketing-Consent-Policy-15da507c1a6280f4b1c4d12181f1fbdb"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          mt: 2,
          backgroundColor: "primary.main",
          "&:hover": {
            backgroundColor: "primary.dark",
          },
        }}
      >
        View Marketing Consent
      </Button>

      <Typography variant="body2" sx={{ mt: 4, color: "text.secondary" }}>
        * Opened in a new window
      </Typography>

      <Typography variant="body1" sx={{ mb: 3 }}>
        --- ## **Bera Korea Marketing Consent Policy (English Version)** ### **Article 1 (Purpose)** This consent agreement aims to obtain the user's consent for Bera Korea (hereinafter referred to as
        the "Company") to provide marketing-related information, including events, promotions, and new service updates. ### **Article 2 (Content of Marketing Information)** The Company may provide the
        following types of marketing information to users: 1. **Events and Promotions**: Special discounts, prize events, etc. 2. **New Services and Features**: Information about new learning
        materials, feature updates, etc. 3. **Personalized Advertising**: Customized content and advertisements based on the user's learning patterns. ### **Article 3 (Opt-In and Opt-Out)** 1.
        **Opt-In Method**: Users can consent to receive marketing information during the registration process or through the settings menu within the service. 2. **Opt-Out Method**: Users can withdraw
        their consent to receive marketing information at any time through the settings menu within the service. Upon withdrawal, marketing information will no longer be sent. ### **Article 4 (Use and
        Protection of Personal Information)** 1. **Purpose of Use**: Collected personal information will be used solely for the purpose of providing marketing information. 2. **Protection Measures**:
        The Company implements technical and administrative measures to securely protect users' personal information in accordance with relevant laws. ### **Article 5 (Provision of Personal
        Information to Third Parties)** The Company will not provide users' personal information to third parties for marketing purposes without the user's consent. However, exceptions are made when
        required by law. ### **Article 6 (Miscellaneous)** 1. This consent agreement is interpreted in accordance with relevant laws and the Company's Privacy Policy. 2. The content of this consent
        agreement may be amended according to the Company's policy changes, and such changes will be notified through announcements within the service. ### **Supplementary Provisions** This Marketing
        Consent Policy is effective from December 15, 2024. --- ## **베라코리아 마케팅 정보 수신 동의 (한글 버전)** ### **제1조 (목적)** 본 동의서는 베라코리아(이하 "회사"라 함)가 이용자에게 이벤트,
        프로모션, 신규 서비스 정보 등 마케팅 관련 정보를 제공하기 위해 이용자의 동의를 얻는 것을 목적으로 합니다. ### **제2조 (마케팅 정보의 내용)** 회사는 다음과 같은 마케팅 정보를 이용자에게 제공할
        수 있습니다. 1. **이벤트 및 프로모션**: 특별 할인, 경품 이벤트 등 2. **신규 서비스 및 기능 안내**: 새로운 학습 자료, 기능 업데이트 등 3. **맞춤형 광고**: 이용자의 학습 패턴에 기반한 맞춤형
        콘텐츠 및 광고 ### **제3조 (동의의 선택 및 철회)** 1. **동의 방법**: 이용자는 회원 가입 시 또는 서비스 내 설정 메뉴를 통해 마케팅 정보 수신에 동의할 수 있습니다. 2. **동의 철회 방법**:
        이용자는 언제든지 서비스 내 설정 메뉴에서 마케팅 정보 수신 동의를 철회할 수 있습니다. 동의 철회 시, 이후 마케팅 정보는 더 이상 수신되지 않습니다. ### **제4조 (개인정보의 이용 및 보호)** 1.
        **이용 목적**: 수집된 개인정보는 마케팅 정보 제공 목적으로만 사용됩니다. 2. **보호 조치**: 회사는 이용자의 개인정보를 안전하게 보호하기 위해 관련 법령에 따라 기술적, 관리적 조치를 취합니다.
        ### **제5조 (개인정보의 제3자 제공)** 회사는 이용자의 동의 없이 마케팅 목적을 위해 이용자의 개인정보를 제3자에게 제공하지 않습니다. 다만, 법률에 의해 요구되는 경우에는 예외로 합니다. ###
        **제6조 (기타 사항)** 1. 본 동의서는 관련 법령 및 회사의 개인정보 처리방침에 따라 해석됩니다. 2. 본 동의서의 내용은 회사의 정책 변경에 따라 수정될 수 있으며, 수정 시 서비스 내 공지사항을 통해
        고지합니다. ### **부칙** 이 마케팅 정보 수신 동의서는 2024년 12월 15일부터 시행됩니다. --- ##
      </Typography>
    </Paper>
  );
}
