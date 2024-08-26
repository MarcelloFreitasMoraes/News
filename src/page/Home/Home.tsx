import DEFAULT from "../../../public/default.png";
import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { truncateText } from "../../ui/utils/limitCharacters";
import useCnnBrasil from "../../hooks/useBusinessData";
import { addIdToArticles } from "../../ui/utils/useIds";
import { CardComponent, Container, Loading } from "../../ui/components";

function Home() {
  const { CnnBrasilQuery } = useCnnBrasil();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const redirectNavigate = (id: number | undefined) =>
    navigate(`/news?id=${id}`);
  const articlesWithId = addIdToArticles(CnnBrasilQuery?.articles);

  return (
    <Container>
      <Typography gutterBottom variant="h3" component="div" mt={2} mb={2}>
        {t("The Wall Street Journal")}
      </Typography>
      <Grid container spacing={5}>
        {CnnBrasilQuery?.articles === undefined || CnnBrasilQuery?.isLoading ? (
   <>
   <Loading />
   </>
        ) : (
          Array.isArray(articlesWithId) &&
          articlesWithId?.map((item) => (
            <Grid item xs={12} sm={4} key={item?.id} position={'relative'} zIndex={10}>
              <CardComponent
                title={truncateText(t(item?.title ?? ""), 75)}
                img={item?.urlToImage ?? DEFAULT}
                alt={item?.author ?? ""}
                action={() => redirectNavigate(item?.id)}
                labelButton={t("Read News")}
              />
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
}

export default Home;
