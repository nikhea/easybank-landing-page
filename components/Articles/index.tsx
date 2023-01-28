import React from 'react';
import Image from 'next/image';
import { IArticles, articlesDB } from '../../data/ArticlesData';
import { Container, Grid, GridItems } from '../../styles/Home.style';
import {
  MainTitle,
  ImageArticle,
  ImageContent,
  ArticleTitle,
  ArticleAuthor,
  Articledescription,
} from './index.style';

const Articles = () => {
  const articlesList = articlesDB.map((article: IArticles, index: number) => (
    <GridItems key={index}>
      <ImageContent>
        <ImageArticle
          // width={100}
          // height={100}
          src={article.image}
          alt={article.title}
        />
      </ImageContent>
      <ArticleAuthor>{article.author}</ArticleAuthor>
      <ArticleTitle>{article.title}</ArticleTitle>
      <Articledescription>{article.description}</Articledescription>
    </GridItems>
  ));
  return (
    <Container>
      <MainTitle>Latest Articles</MainTitle>
      <Grid>{articlesList}</Grid>
    </Container>
  );
};

export default Articles;
