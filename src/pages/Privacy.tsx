import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

export default function Privacy() {
  useEffect(() => {
    // S3 버킷의 URL로 리다이렉트
    window.location.href = "https://beko-privacy.s3.ap-northeast-2.amazonaws.com/%08privacy.html";
  }, []);

  return (
    <Helmet>
      <title>개인정보처리방침 - BeraKorean</title>
      <meta name="description" content="BeraKorean의 개인정보처리방침입니다." />
    </Helmet>
  );
}
