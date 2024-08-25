interface Article {
    source: {
        id: string | null;
        name: string;
    };
    author: string | null;
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string | null;
    id?: number;
}

export const addIdToArticles = (articles: Article[]): Article[] => {
    return articles?.map((article, index) => ({
        ...article,
        id: index + 1
    }));
}