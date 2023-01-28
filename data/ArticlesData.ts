import ImageRestaurant from '../svg/images/image-restaurant.jpg';
import ImagePlane from '../svg/images/image-plane.jpg';
import ImageConfetti from '../svg/images/image-confetti.jpg';
import ImageCurrency from '../svg/images/image-currency.jpg';
import { StaticImageData } from 'next/image';

export interface IArticles {
  image: StaticImageData;
  author: string;
  title: string;
  description: string;
}
export const articles: IArticles[] = [
  {
    image: ImageCurrency,
    author: `By Claire Robinson`,
    title: `  Receive money in any currency with no fees    `,
    description: `The world is getting smaller and we’re becoming more mobile. So why should you be 
    forced to only receive money in a single …`,
  },
  {
    image: ImageRestaurant,
    author: `By Wilson Hutton`,
    title: `Treat yourself without worrying about money`,
    description: `Our simple budgeting feature allows you to separate out your spending and set 
    realistic limits each month. That means you …`,
  },
  {
    image: ImagePlane,
    author: `By Wilson Hutton`,
    title: `  Take your Easybank card wherever you go`,
    description: `  We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
    while you’re abroad. We’ll even show you …`,
  },
  {
    image: ImageConfetti,
    author: `By Claire Robinson`,
    title: `   Our invite-only Beta accounts are now live!`,
    description: `  After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
    It’s easy to request an invite through the site ...`,
  },
];
