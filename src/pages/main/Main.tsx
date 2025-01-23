import { Box, Container, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useAuthStore } from "../../store/authStore";
import { useNavigate } from "react-router-dom";

import ComingSoonDialog from "../../components/common/ComingSoonDialog";

import AnimatedButton from "../../components/Button/AnimatedButton";
import { colors } from "../../styles/colors";

interface Column {
  id: "title" | "date" | "link";
  label: string;
  minWidth?: number;
  align?: "left" | "center" | "right";
}

const columns: Column[] = [
  { id: "title", label: "제목", minWidth: 170, align: "left" },
  { id: "date", label: "등록일", minWidth: 100, align: "center" },
  { id: "link", label: "다운로드", minWidth: 100, align: "center" },
];

interface Data {
  title: string;
  date: string;
  link: string;
}

const rows: Data[] = [
  {
    title: "한국어 드라마 50문장(Korean Drama 50 Sentences)",
    date: "2025-01-20",
    link: "https://drive.google.com/file/d/1IJmQlB1bg56Fm_jTyuzGCSSkcOEzkZpB/view",
  },
  {
    title: "토픽 기초 한국어 50문장(Topik Basic voca 50 Sentences)",
    date: "2025-01-21",
    link: "https://drive.google.com/file/d/1UkyzEkzvv7Z6-2l5VMsBYvRcJjqWSsy9/view?usp=drive_link",
  },
];

export default function Main() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthStore();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const { t } = useTranslation("main");

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const clickHandler = () => {
    setDialogOpen(!dialogOpen);
  };

  const handleDownload = (link: string) => {
    if (!isAuthenticated) {
      // 로그인 페이지로 리다이렉트
      navigate("/login");
      return;
    }
    // 인증된 사용자는 링크 열기
    window.open(link, "_blank");
  };

  return (
    <Box>
      <Box>
        {/* Second Section - Features */}
        <Box sx={{ py: 15, backgroundColor: "white", borderTop: "1px solid #e0e0e0" }}>
          <Container maxWidth="lg">
            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 2 }}>
              <Typography variant="h3" sx={{ marginBottom: "40px", fontWeight: "bold", fontSize: { xs: "2rem", md: "3rem" } }} textAlign="center" gutterBottom>
                {/* {t("features.title")} */}
                {/* 유투브 스크립트 다운받기 */}
                {t("main.title")}
              </Typography>
              {/* Second Button - CTA */}
            </Box>
            {/* <Box
              sx={{
                display: "flex",
                justifyContent: "right",
                mb: 2,
                position: "relative",
                zIndex: 1,
              }}
            >
              <AnimatedButton text="글쓰기" onClick={clickHandler} color={colors.primary} shadowColor={colors.tertiary} width="100px" height="40px" />
            </Box> */}

            {/* Table Section */}
            <Paper sx={{ width: "100%", mb: 8 }}>
              <TableContainer sx={{ maxHeight: 640 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      {columns.map((column) => (
                        <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                          {column.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                      <TableRow hover role="checkbox" tabIndex={-1} key={row.title}>
                        <TableCell align="left">{row.title}</TableCell>

                        <TableCell align="center" sx={{ display: { xs: "none", sm: "table-cell" } }}>
                          {row.date}
                        </TableCell>
                        <TableCell align="center">
                          <AnimatedButton
                            text={isAuthenticated ? t("main.download") : t("main.loginRequired")}
                            onClick={() => handleDownload(row.link)}
                            color={isAuthenticated ? colors.primary : "grey"}
                            shadowColor={colors.tertiary}
                            width="100px"
                            height="50px"
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          </Container>
        </Box>

        <ComingSoonDialog open={dialogOpen} onClose={clickHandler} />
      </Box>
    </Box>
  );
}
