import React from 'react';
import Container from '../../../ui/components/Container/Container';
import { Grid, Typography, Link, Divider, Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import useCnnBrasil from '../../../hooks/useBusinessData';
import { useTranslation } from 'react-i18next';
import { addIdToArticles } from '../../../ui/utils/useIds';

const News: React.FC = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id');
    
    const { CnnBrasilQuery } = useCnnBrasil();
    const { t } = useTranslation();

    const articlesWithId = Array.isArray(CnnBrasilQuery?.articles) ? addIdToArticles(CnnBrasilQuery.articles) : [];
    const filteredArticles = id 
      ? articlesWithId.filter(article => article.id === Number(id))
      : articlesWithId; 
      
    return (
        <Container>
            <Grid container spacing={0}>
                {filteredArticles?.map(article => (
                    <Grid item xs={12} key={article.id}>
                        <Box 
                            sx={{ 
                                width: '100%', 
                                display: 'flex', 
                                flexDirection: 'column', 
                                alignItems: 'center', 
                                borderBottom: '1px solid #ddd', 
                                padding: 4 
                            }}
                        >
                            <Box 
                                component="img" 
                                src={article.urlToImage as string} 
                                alt={article.title} 
                                sx={{ 
                                    width: '100%', 
                                    height: 'auto', 
                                    maxHeight: 500, 
                                    borderRadius: 2 
                                }} 
                            />
                            <Box sx={{ paddingTop: 2, textAlign: 'center' }}>
                                <Typography variant="h2" component="h2" fontWeight={900} gutterBottom>
                                    {article.title}
                                </Typography>
                                <Typography variant="h3" color="textSecondary" paragraph>
                                    {article.description}
                                </Typography>
                                <Divider sx={{ marginY: 2 }} />
                                <Link href={article.url} target="_blank" rel="noopener" color="primary" variant="body1">
                                    {t('Read more')}
                                </Link>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default News;
