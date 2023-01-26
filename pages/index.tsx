import type { NextPage } from 'next';
import Image from 'next/image';

import {
  Container,
  Main,
  Title,
  TitleLink,
  Description,
  DescriptionCodeHighlight,
  Cards,
  Card,
  CardTitle,
  Footer,
  FooterCopyRight,
  Button,
  ButtonGroup,
  Section,
  SubTitle,
} from '../styles/Home.style';

const HomePage: NextPage = () => {
  return (
    <Container>
      <Main>
        <Title>
          Welcome to <TitleLink href="https://nextjs.org">Next.js!</TitleLink>
        </Title>

        <Description>
          Get started by editing{' '}
          <DescriptionCodeHighlight>pages/index.tsx</DescriptionCodeHighlight>
        </Description>

        <Cards>
          <Card href="https://nextjs.org/docs">
            <CardTitle>Documentation &rarr;</CardTitle>
            <p>Find in-depth information about Next.js features and API.</p>
          </Card>
          <Card href="https://nextjs.org/learn">
            <CardTitle>Learn &rarr;</CardTitle>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </Card>

          <Card href="https://github.com/vercel/next.js/tree/canary/examples">
            <CardTitle>Examples &rarr;</CardTitle>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </Card>

          <Card
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </Card>
        </Cards>
        <Section>
          <SubTitle>Conditional Button</SubTitle>
          <ButtonGroup>
            <Button>Primary</Button>
            <Button outline>Primary Outline</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button disabled>Primary Disabled</Button>
            <Button outline disabled>
              Primary Outline Disabled
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button danger>Danger</Button>
            <Button danger outline>
              Danger Outline
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button danger disabled>
              Danger Disabled
            </Button>
            <Button danger outline disabled>
              Danger Outline Disabled
            </Button>
          </ButtonGroup>
        </Section>
      </Main>

      <Footer>
        <FooterCopyRight
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </FooterCopyRight>
      </Footer>
    </Container>
  );
};

export default HomePage;
