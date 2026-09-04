export type FAQ = {
  question: string;
  /** May contain inline HTML — rendered with set:html in FAQ.astro. */
  answer: string;
};

export const faqs: FAQ[] = [
  {
    question: "What's included in a typical reception package?",
    answer:
      'Our base package includes live audio mixing, wireless handheld mics, and audio support. If your venue doesn\'t have speakers already, we can also bring two large speakers and tune them to the space. Either way, we\'ll play your music and make sure all the event audio is running smoothly. Tech details: <a href="/gear">see our gear</a>.',
  },
  {
    question: "What about ceremonies?",
    answer:
      "We can support ceremonies in addition to the reception. Outdoor ceremonies, in particular, benefit from speakers and a lapel mic for the officiant. Mention it when you reach out so we know how best to help you.",
  },
	{
		question: "Do you do events that aren't wedding receptions?",
		answer: "Of course! If you are in need of someone to run audio for a small event or gathering, I'll gladly help out."
	},
  {
    question: "Are you a full DJ service?",
    answer:
      "Not quite. Rather than putting on a performance, light show, or working a dancefloor, our goal is to provide high-quality audio equipment and support that meets your needs. We'll work with you on a playlist and music schedule ahead of time so everything sounds the way you want.",
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
    question: "What's the deposit and cancellation policy?",
    answer:
      "We'll ask for a small non-refundable deposit at booking to hold your date. The remainder is due before the event.",
  },
  {
    question: "Do you travel outside Utah and Salt Lake counties?",
    answer:
      'Our base rates cover Utah and Salt Lake counties, but we\'re open to travel a bit further for an additional fee. <a href="#contact">Contact us</a> for travel rates.',
  },
];
