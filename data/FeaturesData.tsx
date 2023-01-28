import IconBudgeting from '../svg/IconBudgeting';
import IconOnline from '../svg/IconOnline';
import IconApi from '../svg/IconApi';
import IconOnboarding from '../svg/IconOnboarding';
export interface IFeatures {
  icon: JSX.Element;
  title: string;
  description: string;
}

export const featuresDB: IFeatures[] = [
  {
    icon: <IconOnline />,
    title: `    Online Banking  `,
    description: ` Our modern web and mobile applications allow you to keep track of your finances 
    wherever you are in the world.`,
  },
  {
    icon: <IconBudgeting />,
    title: `Simple Budgeting`,
    description: `See exactly where your money goes each month. Receive notifications when you’re 
    close to hitting your limits.`,
  },
  {
    icon: <IconOnboarding />,
    title: `  Fast Onboarding`,
    description: `We don’t do branches. Open your account in minutes online and start taking control 
    of your finances right away.`,
  },
  {
    icon: <IconApi />,
    title: `Open API`,
    description: `Manage your savings, investments, pension, and much more from one account. Tracking 
    your money has never been easier.`,
  },
];
