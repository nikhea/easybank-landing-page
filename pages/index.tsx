import type { NextPage } from 'next';
import Image from 'next/image';
import Articles from '../components/Articles';
import HeroSection from '../components/Hero/HeroSection';

const HomePage: NextPage = () => {
  return (
    <>
      <HeroSection />
      <Articles />
    </>
  );
};

export default HomePage;
