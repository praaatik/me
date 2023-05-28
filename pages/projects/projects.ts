interface Projects {
  id: number;
  title: string;
  subtitle: string;
  logo: string;
  pageUrl: string;
  github?: string;
  demo?: string;
}

export const projects: Projects[] = [
  {
    id: 1,
    title: "Habituate Me",
    subtitle: "Track your daily habits",
    pageUrl: "/blog/habituate-me",
    logo: "/logos/habituate-me.png",
    github: "https://github.com/praaatik/habits-tracker",
    demo: "https://habituate-me.onrender.com",
  },
  {
    id: 2,
    title: "Photogram",
    pageUrl: "/blog/photogram",
    subtitle: "View your photos",
    github: "https://github.com/praaatik/photogram_v2",
    logo: "/logos/habituate-me.png",
  },
  {
    id: 3,
    title: "Save this for me",
    subtitle: "Save your bookmarks",
    pageUrl: "/blog/save-this-for-me",
    github: "https://github.com/praaatik/savethisforme",
    demo: "https://savethisforme.vercel.app",
    logo: "/logos/savethisforme.svg",
  },
  {
    id: 4,
    title: "Stackexchange Digest",
    subtitle: "View stackexchage sites",
    pageUrl: "/blog/stackexchange-digest",
    github: "https://github.com/praaatik/stackexchange-digest",
    demo: "https://praaatik.github.io/stackexchange-digest/",
    logo: "/logos/se-digest.png",
  },
  {
    id: 5,
    title: "Movie Tracker",
    subtitle: "Track your watched movies",
    pageUrl: "/blog/movie-tracker",
    logo: "/logos/habituate-me.png",
    github: "https://github.com/praaatik/movie-tracker",
  },
  {
    id: 6,
    title: "Pi Peekaboo",
    subtitle: "Search for an occurence in Pi",
    pageUrl: "/blog/pi-peekaboo",
    logo: "/logos/pi-peekaboo.svg",
    github: "https://github.com/praaatik/pi-peekaboo",
    demo: "https://pi-peekaboo.vercel.app/",
  },
  {
    id: 7,
    title: "My Website",
    subtitle: "The place you are right now",
    pageUrl: "/",
    logo: "/favicons/favicon-72.png",
    github: "https://github.com/praaatik/me",
  },
];
