interface Projects {
  id: number;
  title: string;
  subtitle: string;
  logo: string;
  blogURL: string;
  githubURL?: string;
  demoURL?: string;
}

export const projects: Projects[] = [
  {
    id: 1,
    title: "Habituate Me",
    subtitle: "Track your daily habits",
    blogURL: "/blog/habituate-me",
    logo: "/logos/habituate-me.png",
    githubURL: "https://github.com/praaatik/habits-tracker",
    demoURL: "https://habituate-me.onrender.com",
  },
  {
    id: 2,
    title: "Photogram",
    blogURL: "/blog/photogram",
    subtitle: "View your photos",
    githubURL: "https://github.com/praaatik/photogram_v2",
    logo: "/logos/habituate-me.png",
  },
  {
    id: 3,
    title: "Save this for me",
    subtitle: "Save your bookmarks",
    blogURL: "/blog/save-this-for-me",
    githubURL: "https://github.com/praaatik/savethisforme",
    demoURL: "https://savethisforme.vercel.app",
    logo: "/logos/savethisforme.svg",
  },
  {
    id: 4,
    title: "Stackexchange Digest",
    subtitle: "View stackexchage sites",
    blogURL: "/blog/stackexchange-digest",
    githubURL: "https://github.com/praaatik/stackexchange-digest",
    demoURL: "https://praaatik.github.io/stackexchange-digest/",
    logo: "/logos/se-digest.png",
  },
  {
    id: 5,
    title: "Movie Tracker",
    subtitle: "Track your watched movies",
    blogURL: "/blog/movie-tracker",
    logo: "/logos/habituate-me.png",
    githubURL: "https://github.com/praaatik/movie-tracker",
  },
  {
    id: 6,
    title: "Pi Peekaboo",
    subtitle: "Search for an occurence in Pi",
    blogURL: "/blog/pi-peekaboo",
    logo: "/logos/pi-peekaboo.svg",
    githubURL: "https://github.com/praaatik/pi-peekaboo",
    demoURL: "https://pi-peekaboo.vercel.app/",
  },
  {
    id: 7,
    title: "My Website",
    subtitle: "The place you are right now",
    blogURL: "/",
    logo: "/favicons/favicon-72.png",
    githubURL: "https://github.com/praaatik/me",
  },
];
