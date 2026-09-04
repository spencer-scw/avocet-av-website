const HOURLY = 75;
const SPEAKER_FEE = 25;
const CEREMONY_FEE = 50;

export type Promotion = {
  active: boolean;
  percentOff: number;
  deadline: string; // ISO date; promo auto-expires after this at build time
  deadlineLabel: string; // human-friendly form for copy
  headline: string;
  body: string;
};

export const promotion: Promotion = {
  active: true,
  percentOff: 33,
  deadline: "2027-01-01",
  deadlineLabel: "January 1",
  headline: "Founding client pricing",
  body: "I'm just getting started, so I'm offering a reduced rate! In exchange, I'll ask to use a few photos from your event and for an honest review.",
};

// Live only if manually enabled AND before the deadline. The daily CI rebuild
// means the promo switches itself off after the deadline with no code change.
export const promotionActive =
  promotion.active && new Date() < new Date(`${promotion.deadline}T00:00:00`);

const effectiveHourly = promotionActive
  ? Math.round(HOURLY * (1 - promotion.percentOff / 100))
  : HOURLY;

export type RateItem = {
  label: string;
  amount: string;
  regularAmount?: string; // struck-through full rate, when the promo is live
  note: string;
};

export const baseRate: RateItem = {
  label: "Hourly rate",
  amount: `$${effectiveHourly} / hour`,
  regularAmount: promotionActive ? `$${HOURLY}` : undefined,
  note: "The starting rate for every booking. Includes two wireless mics, live mixing, and me running sound from start to finish.",
};

export const addOns: RateItem[] = [
  {
    label: "Speakers",
    amount: `+$${SPEAKER_FEE}`,
    note: "For venues without their own sound system. I bring two large speakers and handle the work of hauling, placing, and tuning them to the space.",
  },
  {
    label: "Ceremony sound",
    amount: `+$${CEREMONY_FEE}`,
    note: "For wedding ceremonies. Includes a lapel mic for the officiant and ceremony music. Usually a separate setup from the reception space.",
  },
];
