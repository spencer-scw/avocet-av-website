type PackageData = {
  name: string;
  duration: number;
  description: string;
  featured?: boolean;
};

export type Package = {
  name: string;
  duration: string;
  price: string;
  regularPrice?: string;
  description: string;
  featured?: boolean;
};

const packages_data: PackageData[] = [
  {
    name: "Short Reception",
    duration: 2,
    description:
      "Ideal for shorter receptions and luncheons. Two wireless mics, two large speakers, full setup and takedown.",
  },
  {
    name: "Standard Reception",
    duration: 3,
    description:
      "Our standard option. Background and dancing music, two wireless mics for toasts and MC, two large speakers, full setup and takedown.",
    featured: true,
  },
  {
    name: "Extended Reception",
    duration: 4,
    description:
      "For longer receptions or ceremony-plus-reception coverage. Includes everything in Standard with extended runtime. We're happy to work with your specific needs.",
  },
];


const BASE = 50
const HOURLY = 150

export type Promotion = {
  active: boolean;
  percentOff: number;
  headline: string;
  body: string;
};

export const promotion: Promotion = {
  active: true,
  percentOff: 50,
  headline: "Founding client pricing",
  body: "I'm just getting started in this business! I wanted to offer a discount to the first few events I run. I'll ask if I can use pictures of my setup at your event, and for an honest review.",
};

const applyPromotion = (price: number): number =>
  promotion.active ? Math.round(price * (1 - promotion.percentOff / 100)) : price;

export const packages: Package[] = packages_data.map((p) => {
  const standardPrice = BASE + HOURLY * p.duration;
  return {
    ...p,
    duration: `${p.duration} Hours`,
    price: `$${applyPromotion(standardPrice)}`,
    regularPrice: promotion.active ? `$${standardPrice}` : undefined,
  };
});

export const additionalHourRate = `$${applyPromotion(HOURLY)} / additional hour`;
