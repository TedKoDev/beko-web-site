import { Box, Container, TextField, IconButton, Paper, Typography, CircularProgress } from "@mui/material";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import SendIcon from "@mui/icons-material/Send";
import { colors } from "../../styles/colors";
import { io, Socket } from "socket.io-client";
import { useLocation } from "react-router-dom";

interface ChatMessage {
  content: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatResponse {
  answer: string;
  relevantDocuments?: string[];
}

export default function Chatbot() {
  const location = useLocation();
  const isApp = new URLSearchParams(location.search).get("platform") === "app";
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const initialMessage: ChatMessage = {
      content: "한국어학당 정보 챗봇을 준비중입니다.We are preparing the information chatbot for the Korean Language School.韓国語学堂の情報チャットボットを準備中です。",
      isUser: false,
      timestamp: new Date(),
    };
    setMessages([initialMessage]);
  }, []);

  useEffect(() => {
    const newSocket = io("https://api.berakorean.com/chatbot");
    // const newSocket = io("http://localhost:3000/chatbot");

    newSocket.on("connect", () => {
      console.log("Connected to chatbot server");
    });

    newSocket.on("responseStart", () => {
      console.log("AI is generating response...");
      setIsLoading(true);
    });

    newSocket.on("response", (response: ChatResponse) => {
      setIsLoading(false);
      const botResponse: ChatMessage = {
        content: response.answer,
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    });

    newSocket.on("error", (error) => {
      setIsLoading(false);
      console.error("Chatbot error:", error);
      const errorMessage: ChatMessage = {
        content: "죄송합니다. 오류가 발생했습니다. 다시 시도해주세요.",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    });

    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
  }, []);

  const handleSendMessage = () => {
    if (inputMessage.trim() === "" || !socket) return;

    const newUserMessage: ChatMessage = {
      content: inputMessage,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newUserMessage]);

    socket.emit("ask", inputMessage);

    setInputMessage("");
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  // 텍스트에서 줄바꿈을 JSX로 변환하는 함수
  const formatMessage = (text: string) => {
    return text.split("\n").map((line, i) => (
      <span key={i}>
        {line}
        {i !== text.split("\n").length - 1 && <br />}
      </span>
    ));
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        mt: isApp ? 0 : "96px",
        position: "relative",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          p: { xs: 1, sm: 2, md: 4 },
          height: isApp ? "100vh" : "calc(100vh - 96px)",
          position: "relative",
        }}
      >
        <Paper
          sx={{
            flex: 1,
            mb: { xs: "70px", sm: 2 },
            p: { xs: 1, sm: 2 },
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            backgroundColor: "#f8f9fa",
          }}
        >
          {messages.map((message, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: message.isUser ? "flex-end" : "flex-start",
                mb: 1,
              }}
            >
              <Paper
                sx={{
                  p: { xs: 1.5, sm: 2 },
                  maxWidth: { xs: "85%", sm: "70%" },
                  backgroundColor: message.isUser ? colors.primary : "white",
                  color: message.isUser ? "white" : "black",
                  borderRadius: 2,
                  boxShadow: 2,
                  wordBreak: "break-word",
                }}
              >
                <Typography sx={{ whiteSpace: "pre-wrap", lineHeight: 1.5 }}>{formatMessage(message.content)}</Typography>
              </Paper>
            </Box>
          ))}
          {isLoading && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, p: 2 }}>
              <CircularProgress size={20} />
              <Typography color="text.secondary">답변을 생성하고 있습니다...</Typography>
            </Box>
          )}
        </Paper>

        {/* 입력 영역을 화면 하단에 고정 */}
        <Box
          sx={{
            position: { xs: "fixed", sm: "fixed" },
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "white",
            p: { xs: 2, sm: 0 },
            borderTop: { xs: "1px solid #e0e0e0", sm: "none" },
            zIndex: 1000,
            mx: { xs: 0, sm: "auto" },
            width: "100%",
            maxWidth: (theme) => ({
              xs: "90%",
              sm: theme.breakpoints.values.lg,
            }),
          }}
        >
          <Box sx={{ display: "flex", gap: 1, width: "100%" }}>
            <TextField
              fullWidth
              multiline
              maxRows={3}
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="메시지를 입력하세요... / Enter your message... / メッセージを入力してください..."
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  backgroundColor: "white",
                },
              }}
            />
            <IconButton
              onClick={handleSendMessage}
              sx={{
                backgroundColor: colors.primary,
                color: "white",
                height: 56,
                width: 56,
                flexShrink: 0,
                "&:hover": {
                  backgroundColor: colors.secondary,
                },
              }}
            >
              <SendIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
