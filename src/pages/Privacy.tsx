import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

export default function Privacy() {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    // S3에서 privacy.html 내용을 가져옴
    fetch("https://beko-privacy.s3.ap-northeast-2.amazonaws.com/%08privacy.html")
      .then((response) => response.text())
      .then((html) => {
        setContent(html);
      })
      .catch((error) => {
        console.error("Privacy policy loading error:", error);
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>개인정보처리방침 - BeraKorean</title>
        <meta name="description" content="BeraKorean의 개인정보처리방침입니다." />
      </Helmet>
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        style={{
          padding: "20px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      />
    </>
  );
}
