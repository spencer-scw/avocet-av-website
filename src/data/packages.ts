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
      "Ideal for shorter receptions and luncheons. Background music, two wireless mics, full setup and breakdown.",
  },
  {
    name: "Standard Reception",
    duration: 3,
    description:
      "Our most-booked option. Background and dancing music, two wireless mics for toasts and MC, full setup and breakdown.",
    featured: true,
  },
  {
    name: "Extended Reception",
    duration: 4,
    description:
      "For longer receptions or ceremony-plus-reception coverage. Includes everything in Standard with extended runtime.",
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
  body: "Prices shown below are our founding-client rate while we book our first few weddings. Clients who reserve at this rate agree to share share event photos and a short review afterward.",
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

export const additionalHourRate = `$${HOURLY} / additional hour`;
