import { Box, Divider, Link, Typography, useTheme } from "@mui/material";
import React from "react";

type Props = {
  author: string;
  urlToImage: string;
  title: string;
  imageTitle: string;
  description: string;
  link: string;
  textLink: string;
};

const NewsComponent: React.FC<Props> = ({
  author,
  urlToImage,
  imageTitle,
  title,
  description,
  link,
  textLink,
}) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderBottom: `1px solid ${theme.palette.secondary.light}`,
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
          {author}
          {/* {t("Author")}: {t(`${article?.author}`) ?? ""} */}
        </Typography>
      </Box>
      <Box
        component="img"
        src={urlToImage}
        alt={imageTitle}
        //   src={article?.urlToImage ?? DEFAULT}
        //   alt={article?.title}
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
          {title}
          {/* {t(`${article?.title}`) ?? ""} */}
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          {description}
          {/* {t(`${article?.description}`) ?? ""} */}
        </Typography>
        <Divider sx={{ marginY: 2 }} />
        <Link
          href={link}
          // href={article?.url}
          target="_blank"
          rel="noopener"
          color="primary.dark"
          variant="body1"
        >
          {textLink}
          {/* {t("Read more")} */}
        </Link>
      </Box>
    </Box>
  );
};

export default NewsComponent;
