export interface BlogSection {
  heading: string;
  body: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  date: string;
  readTime: string;
  category: string;
  location: string;
  image: string;
  imageAlt: string;
  intro: string[];
  sections: BlogSection[];
  takeaway: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'best-breakfast-bondi-beach',
    title: 'Best Breakfast in Bondi Beach: A Local’s Guide',
    description:
      'Looking for the best breakfast in Bondi Beach? A local’s guide to early openings, all-day breakfast, and what to order on Campbell Parade — from smashed avo to eggs benedict.',
    keywords: [
      'best breakfast bondi beach',
      'breakfast bondi',
      'all day breakfast bondi beach',
      'campbell parade breakfast',
      'early breakfast bondi',
    ],
    date: '2026-07-20',
    readTime: '5 min read',
    category: 'Food Guide',
    location: 'Bondi Beach',
    image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790c4f?w=1200&q=80&fit=crop&auto=format',
    imageAlt: 'Eggs benedict breakfast plate at a Bondi Beach cafe',
    intro: [
      'Bondi Beach mornings start early. Surfers are in the water before sunrise, the coastal walk fills up by 6 AM, and by 8 the whole beachfront is buzzing. That rhythm shapes the breakfast culture here — and it’s why breakfast in Bondi is taken more seriously than almost anywhere else in Sydney.',
      'We open at 5 AM, seven days a week, right on Campbell Parade — so we’ve watched thousands of Bondi breakfasts happen. Here’s what locals actually order, when to come, and how to do a Bondi breakfast properly.',
    ],
    sections: [
      {
        heading: 'Why 5 AM matters in Bondi',
        body: [
          'Most Sydney cafes open at 7. In Bondi, that’s late. The first swimmers at Icebergs, the sunrise runners on the Bondi to Bronte walk, and the dawn-patrol surfers all want coffee and food before the rest of the city wakes up.',
          'Coming early has another advantage: between 5 and 7 AM you’ll get a beachfront table without a wait, watch the sun come up over the Pacific, and be done before the weekend crowds arrive.',
        ],
      },
      {
        heading: 'What locals actually order',
        body: [
          'Smashed avo is the Bondi cliché for a reason — ours comes on house-baked sourdough with feta and a poached egg, and it outsells everything else before 9 AM.',
          'Eggs benedict is the weekend favourite, and the acai bowl crowd arrives straight from the beach around mid-morning. If you’re after something lighter, the daily pastries come out of the oven before 5 AM, so a croissant and a flat white is the fastest genuinely fresh breakfast on the strip.',
        ],
      },
      {
        heading: 'All-day breakfast, because Bondi doesn’t do schedules',
        body: [
          'Beach mornings run long. You surf, you swim, you lose track of time — and suddenly it’s 1 PM and you want eggs. That’s why our breakfast menu runs all day, every day. No cut-off, no "sorry, kitchen’s changed over".',
        ],
      },
      {
        heading: 'Getting here',
        body: [
          'You’ll find us at 94 Campbell Parade, right on the beachfront strip — a two-minute walk from the sand. Buses 333, 380 and 381 stop practically outside, and if you’re driving, Hall Street and the side streets have parking that’s easy before 8 AM and tough after 10.',
        ],
      },
    ],
    takeaway:
      'The best breakfast in Bondi Beach is the one you eat with sand still on your feet. Come early, order the smashed avo, and watch the beach wake up from Campbell Parade.',
  },
  {
    slug: 'specialty-coffee-bondi-beach-guide',
    title: 'Specialty Coffee in Bondi Beach: What Makes a Great Flat White',
    description:
      'Where to find specialty coffee in Bondi Beach. Single-origin beans, ethical sourcing, and what separates a great flat white from an average one on Campbell Parade.',
    keywords: [
      'specialty coffee bondi beach',
      'best coffee bondi',
      'flat white bondi beach',
      'single origin coffee sydney',
      'bondi beach cafe coffee',
    ],
    date: '2026-07-20',
    readTime: '4 min read',
    category: 'Coffee',
    location: 'Bondi Beach',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80&fit=crop&auto=format',
    imageAlt: 'Flat white specialty coffee at Bondi Cafe on Campbell Parade',
    intro: [
      'Sydney takes coffee seriously, and Bondi Beach might be its most demanding suburb. The morning crowd here includes people who’ve had flat whites in Melbourne, espresso in Rome, and pour-overs in Tokyo — and they can tell when a shot has been sitting too long.',
      'Here’s what specialty coffee actually means, and what to look for when you’re choosing where to get your morning cup in Bondi.',
    ],
    sections: [
      {
        heading: 'Single origin, and why it matters',
        body: [
          'Commodity coffee blends beans from everywhere into a consistent, forgettable cup. Specialty coffee starts with traceability: knowing the farm, the region, and the harvest.',
          'Our beans come directly from small farms in Ethiopia, Colombia and Guatemala. Each origin tastes different — Ethiopian beans bring bright, floral notes; Colombian beans a caramel sweetness; Guatemalan a deeper chocolate body. We roast fresh weekly, because coffee is produce, not pantry stock.',
        ],
      },
      {
        heading: 'The flat white test',
        body: [
          'A proper flat white is a double ristretto under velvet-textured milk — no foam cap, no latte art for its own sake, just balance. If your flat white tastes like hot milk, the shot was weak. If it’s bitter, the beans were stale or the extraction rushed.',
          'It’s the drink Australians judge a cafe by, and it’s the first thing we train every barista on.',
        ],
      },
      {
        heading: 'Cold brew for beach days',
        body: [
          'Bondi summer changes what people drink. From November to March, cold brew and iced lattes outsell hot coffee by mid-morning. We steep our cold brew for 18 hours, which pulls the sweetness out of the beans without the acidity — the right thing to carry down to the sand.',
        ],
      },
    ],
    takeaway:
      'Great coffee in Bondi comes down to fresh-roasted single-origin beans and a barista who respects the flat white. Try yours at 94 Campbell Parade — open from 5 AM, when the first surfers need it most.',
  },
  {
    slug: 'bondi-to-bronte-walk-coffee-stops',
    title: 'The Bondi to Bronte Coastal Walk: Best Coffee Stops Along the Way',
    description:
      'Doing the Bondi to Bronte coastal walk? Here’s how to plan it — the best time to go, what to see at Icebergs, Tamarama and Bronte, and where to grab coffee before you start.',
    keywords: [
      'bondi to bronte walk',
      'bondi coastal walk cafe',
      'coffee before bondi to bronte',
      'bondi to bronte walk tips',
      'tamarama bronte walk',
    ],
    date: '2026-07-20',
    readTime: '6 min read',
    category: 'Local Guide',
    location: 'Bondi to Bronte',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80&fit=crop&auto=format',
    imageAlt: 'Coastal cliffs on the Bondi to Bronte walk in Sydney',
    intro: [
      'The Bondi to Bronte coastal walk is one of Sydney’s best free experiences — 2.5 kilometres of clifftop path, ocean pools, and three beaches strung together. Locals do it daily; visitors put it at the top of their Sydney list.',
      'Having a cafe at the Bondi end of the walk, we’ve become an unofficial starting line. Here’s how to do the walk properly.',
    ],
    sections: [
      {
        heading: 'Start at Bondi, not Bronte',
        body: [
          'You can walk either direction, but starting at Bondi Beach means the sun is behind you in the morning, the coffee options are better at the start, and you finish at Bronte with a swim and a bus back.',
          'Fuel up on Campbell Parade first — we’re at number 94, and a flat white plus a fresh croissant is the classic pre-walk order. From there it’s five minutes to the start of the path at the southern end of the beach.',
        ],
      },
      {
        heading: 'What you’ll pass',
        body: [
          'First comes Bondi Icebergs, the ocean pool you’ve seen in every Sydney photo — worth stopping for the view even if you don’t swim. Then the clifftop path winds past Mackenzies Bay to Tamarama, the small, dramatic beach locals call "Glamarama".',
          'The final stretch drops into Bronte, where the ocean baths and the park make the perfect finish. Allow 45 minutes at a stroll, or half a day if you swim at every stop — which honestly is the right way to do it.',
        ],
      },
      {
        heading: 'When to go',
        body: [
          'Sunrise is the local hour — cool, quiet, and the light on the cliffs is unbeatable. By 10 AM on a weekend the path is a slow-moving queue. If you’re walking at dawn, we open at 5 AM, which makes us one of the only places to get real coffee before an early start.',
          'In October and November the walk hosts Sculpture by the Sea, when the clifftops fill with open-air artworks — spectacular, but plan for crowds.',
        ],
      },
      {
        heading: 'After the walk',
        body: [
          'Walk back along the same path (it’s just as good in reverse) or catch the 379 bus from Bronte back towards Bondi Junction. Most locals loop back to Bondi for a late breakfast — our all-day breakfast exists precisely for post-walk appetites.',
        ],
      },
    ],
    takeaway:
      'Start at Bondi at sunrise, coffee in hand, swim at Bronte, and come back hungry. The Bondi to Bronte walk is the best morning in Sydney — and it starts on Campbell Parade.',
  },
  {
    slug: 'cafe-near-bondi-icebergs',
    title: 'Where to Eat Near Bondi Icebergs: After-Swim Food That Hits',
    description:
      'Just swum at Bondi Icebergs? Here’s where to refuel nearby — hot coffee, all-day breakfast and hearty lunches a short walk from the ocean pool on Campbell Parade.',
    keywords: [
      'cafe near bondi icebergs',
      'food near bondi icebergs',
      'breakfast near icebergs pool',
      'bondi icebergs swimming',
      'campbell parade cafe',
    ],
    date: '2026-07-20',
    readTime: '4 min read',
    category: 'Local Guide',
    location: 'Bondi Icebergs',
    image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1200&q=80&fit=crop&auto=format',
    imageAlt: 'Cafe table with coffee near Bondi Icebergs ocean pool',
    intro: [
      'There’s a specific kind of hunger that only exists after a swim at Bondi Icebergs. Cold salt water, a few laps against the ocean surge, and suddenly you could eat everything on any menu in Sydney.',
      'The pool sits at the southern end of Bondi Beach, and the walk back along the sand or the promenade brings you straight to Campbell Parade. Here’s how to refuel properly.',
    ],
    sections: [
      {
        heading: 'The Icebergs ritual',
        body: [
          'The Icebergs pool has been Bondi’s cold-water institution since 1929 — an ocean pool where waves break over the lanes and winter swimming is a badge of honour. Entry is a few dollars, the views are priceless, and the post-swim shiver is mandatory from May to September.',
        ],
      },
      {
        heading: 'The five-minute walk to hot food',
        body: [
          'From the pool exit, head north along the promenade or Campbell Parade itself. We’re at number 94 — about five minutes at a post-swim shuffle.',
          'Winter swimmers go straight for the flat white and a hot breakfast; eggs benedict with a double shot is the classic Icebergs recovery order. Summer swimmers lean acai bowls, smoothies and cold brew. Either way, all-day breakfast means it doesn’t matter when you finished your laps.',
        ],
      },
      {
        heading: 'Make a morning of it',
        body: [
          'The full local routine: swim at Icebergs at opening, walk the first section of the coastal path to Mackenzies Point lookout, then loop back along the beach for breakfast. Two hours, no car needed, and you’ll have done Bondi better than most guidebooks manage.',
        ],
      },
    ],
    takeaway:
      'Swim the laps, earn the breakfast. Bondi Cafe is a five-minute walk from Icebergs at 94 Campbell Parade — open from 5 AM with the hot coffee your cold swim deserves.',
  },
  {
    slug: 'brunch-bondi-beach-guide',
    title: 'Brunch in Bondi Beach: When to Come and What to Order',
    description:
      'Your guide to brunch in Bondi Beach — the best times to beat the weekend queue, what to order on Campbell Parade, and why Bondi brunch culture is Sydney’s best.',
    keywords: [
      'brunch bondi beach',
      'best brunch bondi',
      'weekend brunch sydney east',
      'bondi brunch spots',
      'campbell parade brunch',
    ],
    date: '2026-07-20',
    readTime: '5 min read',
    category: 'Food Guide',
    location: 'Bondi Beach',
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=1200&q=80&fit=crop&auto=format',
    imageAlt: 'Smashed avocado brunch plate at a Bondi Beach cafe',
    intro: [
      'Brunch isn’t a meal in Bondi — it’s the main event of the weekend. From about 9 AM on Saturday, Campbell Parade turns into one long queue of activewear, sandy feet and people negotiating over who’s ordering what.',
      'After years of watching it from behind the coffee machine, here’s our honest guide to doing Bondi brunch right.',
    ],
    sections: [
      {
        heading: 'Timing is everything',
        body: [
          'The weekend rush runs 9:30 AM to 1 PM. Come before 9 and you walk straight in, order fast, and get the beachfront view; come at 11 and you’re waiting behind every gym class in the Eastern Suburbs.',
          'The pro move is the late brunch: after 1:30 PM the crowd thins, the kitchen is still running the full menu (ours runs all day), and the afternoon light on the beach is arguably better than the morning’s.',
        ],
      },
      {
        heading: 'The orders that define Bondi brunch',
        body: [
          'Smashed avo with poached eggs and feta on sourdough — the undisputed king. Eggs benedict for the indulgent, acai bowls for the post-beach crowd, and the Bondi burger with chips for anyone who surfed through breakfast and skipped straight to lunch hunger.',
          'On the drinks side: flat whites until noon, then the switch flips to cold brew, fresh smoothies, and — because Bondi — an espresso martini once the afternoon gets going.',
        ],
      },
      {
        heading: 'Bring everyone',
        body: [
          'Bondi brunch is a group sport. Tables of six with two prams and a dog tied to the leg are the standard weekend unit. Delivery exists too — we’re on Uber Eats and DoorDash — but eating brunch at home when you live near the beach is, respectfully, a wasted weekend.',
        ],
      },
    ],
    takeaway:
      'Come before 9 or after 1:30, order the smashed avo, and claim a table facing the water. Brunch at 94 Campbell Parade is how Bondi weekends are supposed to start.',
  },
  {
    slug: 'things-to-do-bondi-beach-morning',
    title: 'A Perfect Morning in Bondi Beach: The Local’s Itinerary',
    description:
      'How to spend a morning in Bondi Beach like a local — sunrise at the beach, a swim at Icebergs, the coastal walk, markets, and where to eat on Campbell Parade.',
    keywords: [
      'things to do bondi beach',
      'bondi beach morning',
      'bondi beach itinerary',
      'what to do in bondi',
      'bondi beach local guide',
    ],
    date: '2026-07-20',
    readTime: '6 min read',
    category: 'Local Guide',
    location: 'Bondi Beach',
    image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=1200&q=80&fit=crop&auto=format',
    imageAlt: 'Sunrise over Bondi Beach with golden light on the water',
    intro: [
      'Most visitors see Bondi at 2 PM on a Saturday, when the beach is packed and parking is a blood sport. Locals know the secret: Bondi belongs to the morning. Between 5:30 and 11 AM, this beach runs through its entire highlight reel.',
      'Here’s the itinerary we’d give a friend visiting for the first time.',
    ],
    sections: [
      {
        heading: '5:45 AM — Sunrise from the sand',
        body: [
          'Sunrise over the Pacific is Bondi’s daily opening ceremony. Grab a coffee first — we open at 5 AM at 94 Campbell Parade, and takeaway flat whites on the sand at dawn is a genuine Bondi tradition — then find a spot on the south end near the Icebergs pool for the best light.',
        ],
      },
      {
        heading: '6:30 AM — Swim or surf',
        body: [
          'Choose your water: the ocean between the flags for bodysurfing, a board at the south end if you surf, or laps at the Icebergs ocean pool if you want the iconic experience. The water is calmest and cleanest first thing.',
        ],
      },
      {
        heading: '8:00 AM — The coastal walk',
        body: [
          'The Bondi to Bronte clifftop walk takes about 45 minutes each way, past Tamarama and some of the best coastal views in Australia. Go now, before the path gets busy — you’ll be back in Bondi before the brunch rush peaks.',
        ],
      },
      {
        heading: '9:30 AM — Breakfast, properly',
        body: [
          'By now you’ve earned it. All-day breakfast means the kitchen doesn’t care that you got distracted swimming — smashed avo, eggs benedict, or an acai bowl, plus your second (third?) coffee, with the beach view you spent the morning in.',
        ],
      },
      {
        heading: '11:00 AM — Markets and the strip',
        body: [
          'On Saturdays, Bondi Farmers Market runs at the public school on Campbell Parade; Sundays it’s the Bondi Markets with local designers and vintage. Browse, then wander the strip before the afternoon crowds take over. You’ve done Bondi — and it’s not even lunchtime.',
        ],
      },
    ],
    takeaway:
      'Sunrise, swim, coastal walk, breakfast, markets — the perfect Bondi morning is five moves long and starts with coffee at 5 AM on Campbell Parade.',
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
