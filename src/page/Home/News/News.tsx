import React from "react";
import { Grid, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import useCnnBrasil from "../../../hooks/useBusinessData";
import { useTranslation } from "react-i18next";
import { addIdToArticles } from "../../../ui/utils/useIds";
import DEFAULT from "../../../../public/default.png";
import { Container, Loading, NewsComponent } from "../../../ui/components";

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
      <Grid
        container
        spacing={0}
        height={{ xs: "90vh", sm: "auto" }}
        position={"relative"}
        zIndex={10}
      >
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
        {CnnBrasilQuery?.articles === undefined || CnnBrasilQuery?.isLoading ? (
          <Loading />
        ) : (
          filteredArticles?.map((article) => (
            <Grid item xs={12} key={article.id}>
              <NewsComponent
                author={`${t("Author")}: ${t(article?.author ?? "")}`}
                urlToImage={article?.urlToImage ?? DEFAULT}
                title={t(article?.title ?? "")}
                imageTitle={article?.title ?? ""}
                description={t(article?.description ?? "")}
                link={article?.url ?? ""}
                textLink={t("Read more")}
              />
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
};

export default News;
