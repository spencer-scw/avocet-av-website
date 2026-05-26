export type FAQ = {
  question: string;
  /** May contain inline HTML — rendered with set:html in FAQ.astro. */
  answer: string;
};

export const faqs: FAQ[] = [
  {
    question: "What's included in a typical reception package?",
    answer:
      'A full PA system: two large speakers, two wireless handheld microphones for your MC and toasts, full service (setup, during, takedown), live audio mixing. We\'ll play your playlists, dance music, and background music. Tech details: <a href="/gear">see our gear</a>.',
  },
  {
    question: "Are you a full DJ service?",
    answer:
      "We sit between a self-serve audio equipment rental and a full DJ service. We handle the gear, the mics, and the music, but we won't take live requests or work a dance floor like a traditional DJ. We also aim to be much cheaper than a DJ booking, and provide what most receptions actually need.",
  },
  {
    question: "How far in advance should we book?",
    answer:
      'As long as we\'re available, we\'re happy to help! :) You can check availability <a href="#availability">here</a>.',
  },
  {
    question: "What information should I have ready when I reach out?",
    answer:
      "Helpful details to have on hand: your event date and time, the venue, an approximate guest count, whether you'd like ceremony coverage in addition to the reception, and any timeline anchors you're planning (toasts, first dance, etc.). None of this is required, so call with whatever you have and we'll figure out the rest together.",
  },
  {
    question: "Do you travel outside Utah and Salt Lake counties?",
    answer:
      'Our base rates cover Utah and Salt Lake counties, but we\'re open to travel a bit further for an additional fee. <a href="#contact">Get in touch</a> for a quote.',
  },
  {
    question: "What about ceremonies?",
    answer:
      "We can support ceremonies in addition to the reception. Outdoor ceremonies, in particular, benefit from speakers and a lapel mic for the officiant. Mention it when you reach out so we know how best to help you.",
  },
  {
    question: "What's the deposit and cancellation policy?",
    answer:
      "We'll ask for a small non-refundable deposit at booking to hold your date. The remainder is due before the event.",
  },
];
