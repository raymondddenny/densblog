export const SITE_TITLE = "Den's Space";
export const SITE_DESCRIPTION = "A internet space for Den.";

export interface MenuItem {
  label: string;
  url: string;
}

export const menuItems: MenuItem[] = [
  {
    label: "home",
    url: "/",
  },
  {
    label: "writings",
    url: "/writings",
  },
  {
    label: "thoughts",
    url: "/thoughts",
  },
  {
    label: "ships",
    url: "/ships",
  },
];

export const title = "Den's Space";
export const description = "A internet space for Denny.";
export const image = "/images/ogimage.png";
export const url = "https://denncodes.com";

export const ogImage = {
  src: "/images/ogimage.png",
  alt: "Den's Space",
};

export const products = [
  {
    name: "Flutter",
    url: "https://flutter.dev/",
    image: "/products/flutterlogo.png",
  },
  {
    name: "JS",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    image: "/products/jslogo.png",
  },
  {
    name: "PostgreSql",
    url: "https://www.postgresql.org/",
    image: "/products/postgres.svg",
  },
  {
    name: "Supabase",
    url: "https://supabase.com/",
    image: "/products/supabase.webp",
  },
];

export const projects = [
  {
    name: "JobSuite",
    description: "Job application tracker for job seekers and freelancers",
    url: "https://jobsuiteapp.com/",
    image: "/images/jobsuite-hero.png",
  },
];

export const socialLinks = [
  {
    label: "@x",
    url: "https://x.com/raymonddenny14",
  },
  {
    label: "@threads",
    url: "https://www.threads.net/@dennyraymond",
  },
  {
    label: "email",
    url: "mailto:dennyraymondd@gmail.com",
  },
  {
    label: "github",
    url: "https://github.com/raymondddenny",
  },
  {
    label: "linkedin",
    url: "https://www.linkedin.com/in/dennyraymondd/",
  },
];
