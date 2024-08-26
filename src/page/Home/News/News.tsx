import React from "react";
import Container from "../../../ui/components/Container/Container";
import { Grid, Typography, Link, Divider, Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import useCnnBrasil from "../../../hooks/useBusinessData";
import { useTranslation } from "react-i18next";
import { addIdToArticles } from "../../../ui/utils/useIds";
import DEFAULT from "../../../../public/default.png";

const News: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  const { CnnBrasilQuery } = useCnnBrasil();
  const { t } = useTranslation();

  const articlesWithId = Array.isArray(CnnBrasilQuery?.articles)
    ? addIdToArticles(CnnBrasilQuery?.articles)
    : [];
  const filteredArticles = id
    ? articlesWithId?.filter((article) => article.id === Number(id))
    : articlesWithId;

  return (
    <Container>
      <Grid container spacing={0} height={{ xs: "90vh", sm: "auto" }}>
        <Grid item xs={12} mt={3} mb={2}>
          <Typography
            variant="h2"
            component="h2"
            fontWeight={900}
            gutterBottom
            fontSize={{ xs: "1.5rem", sm: "2.375rem" }}
          >
            {t("News")}
          </Typography>
        </Grid>
        {filteredArticles?.map((article) => (
          <Grid item xs={12} key={article.id}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderBottom: "1px solid #ddd",
                padding: 4,
              }}
            >
              <Box mb={2}>
                <Typography
                  gutterBottom
                  variant="h2"
                  component="h2"
                  fontWeight={900}
                  fontSize={{ xs: "1.5rem", sm: "2.375rem" }}
                >
                  {t("Author")}: {t(`${article?.author}`) ?? ""}
                </Typography>
              </Box>
              <Box
                component="img"
                src={article?.urlToImage ?? DEFAULT}
                alt={article?.title}
                sx={{
                  width: "100%",
                  height: "auto",
                  maxHeight: 500,
                  borderRadius: 2,
                }}
              />
              <Box sx={{ paddingTop: 2, textAlign: "center" }}>
                <Typography
                  variant="h2"
                  component="h2"
                  fontWeight={900}
                  gutterBottom
                  fontSize={{ xs: "1.5rem", sm: "2.375rem" }}
                >
                  {t(`${article?.title}`) ?? ""}
                </Typography>
                <Typography variant="h3" color="textSecondary" paragraph>
                  {t(`${article?.description}`) ?? ""}
                </Typography>
                <Divider sx={{ marginY: 2 }} />
                <Link
                  href={article?.url}
                  target="_blank"
                  rel="noopener"
                  color="primary"
                  variant="body1"
                >
                  {t("Read more")}
                </Link>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default News;
