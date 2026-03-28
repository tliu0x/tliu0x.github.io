import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: process.env.NEXT_PUBLIC_PERSON_FIRST_NAME || "",
  lastName: process.env.NEXT_PUBLIC_PERSON_LAST_NAME || "",
  name: `${process.env.NEXT_PUBLIC_PERSON_FIRST_NAME || ""} ${process.env.NEXT_PUBLIC_PERSON_LAST_NAME || ""}`,
  role: process.env.NEXT_PUBLIC_PERSON_ROLE || "",
  avatar: process.env.NEXT_PUBLIC_GITHUB_URL
    ? `https://github.com/${process.env.NEXT_PUBLIC_GITHUB_URL.replace("https://github.com/", "")}.png`
    : "/images/avatar.jpg",
  email: process.env.NEXT_PUBLIC_PERSON_EMAIL || "",
  location: (process.env.NEXT_PUBLIC_PERSON_LOCATION || "America/Los_Angeles") as Person["location"],
  languages: ["English", "Chinese"] as Person["languages"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: process.env.NEXT_PUBLIC_GITHUB_URL || "",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: process.env.NEXT_PUBLIC_LINKEDIN_URL || "",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Machine learning engineer building intelligent systems</>,
  featured: {
    display: false,
    title: <>Featured work</>,
    href: "/work",
  },
  subline: (
    <>
    I'm a machine learning engineer who builds intelligent systems that solve real problems. Passionate about ML/AI, scalable infrastructure, and turning data into impact.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        A machine learning engineer passionate about building intelligent systems
        that solve real-world problems. Experienced in ML/AI, data pipelines,
        and scalable infrastructure.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      // TODO: Add your real work experiences here
      // {
      //   company: "Company Name",
      //   timeframe: "2023 - Present",
      //   role: "Machine Learning Engineer",
      //   achievements: [
      //     <>Achievement 1</>,
      //     <>Achievement 2</>,
      //   ],
      //   images: [],
      // },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      // TODO: Add your real education here
      // {
      //   name: "University Name",
      //   description: <>Studied Computer Science.</>,
      // },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Machine Learning",
        description: (
          <>Building and deploying ML models for production systems.</>
        ),
        tags: [
          {
            name: "Python",
            icon: "python",
          },
        ],
        images: [],
      },
      {
        title: "Software Engineering",
        description: (
          <>Building applications and data pipelines with Python and JavaScript.</>
        ),
        tags: [
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "JavaScript",
            icon: "javascript",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about ML and engineering...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Replace with your own images
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
