import React from 'react';
import { featuresDB, IFeatures } from '../../data/FeaturesData';
import { Container, Grid } from '../../styles/Home.style';
import {
  MainTitle,
  MainDescription,
  GridItems,
  Title,
  Description,
  Icon,
} from './features.style';

const features = () => {
  const featuresList = featuresDB.map((feature: IFeatures, index: number) => (
    <GridItems key={index}>
      <Icon>{feature.icon}</Icon>
      <Title>{feature.title}</Title>
      <Description>{feature.description}</Description>
    </GridItems>
  ));
  return (
    <Container>
      <MainTitle> Why choose Easybank?</MainTitle>
      <MainDescription>
        We leverage Open Banking to turn your bank account into your financial
        hub. Control your finances like never before.
      </MainDescription>
      <Grid>{featuresList}</Grid>
    </Container>
  );
};

export default features;
