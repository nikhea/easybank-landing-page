import type { NextPage } from 'next';
import Image from 'next/image';
import Articles from '../components/Articles';
import Features from '../components/features/features';
import HeroSection from '../components/Hero/HeroSection';

const HomePage: NextPage = () => {
  return (
    <>
      <HeroSection />
      <Features />
      <Articles />
    </>
  );
};

export default HomePage;
