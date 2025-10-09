import type { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Cindy",
  lastName: "Alfira",
  name: "Cindy Alfira",
  role: "Informatics Engineering Student",
  avatar: "/images/avatar.jpg",
  email: "cindyalfira48@gmail.com",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Indonesian"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/cindiez48",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/cindyalfira",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
  {
    name: "Self-Introduction Video",
    icon: "youtube",
    link: "https://youtu.be/zbZNd_5yRB4?feature=shared",
  },
  {
    name: "Resume",
    icon: "file",
    link: "/images/CV%20Cindy.pdf",
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  subline: (
    <>
      Hi! Welcome to my portfolio. I'm Cindy Alfira, a passionate Informatics Engineering Student at Universitas Airlangga, exploring the world of technology, design, and innovation.{" "}
      <Logo
        dark
        icon="/trademarks/wordmark-dark.svg"
        style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}
      />
      , where I craft intuitive user experiences. After hours, I build my own projects.
    </>
  ),
  featured: {
    display: false,
    title: undefined,
    href: ""
  }
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
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        <p>Cindy Alfira is a highly results-oriented student in the Informatics Engineering program at Universitas Airlangga's Vocational Faculty. She joined through the SNBP pathway, where Informatics was her second choice, but she's grateful for the opportunity to pursue her passion in technology.</p>
        <p>With hands-on experience in various tools and technologies, she brings creative ideas to life. Her skill set includes UI/UX design, HTML, Java, Python, and more. She's constantly learning and expanding her knowledge to stay updated with the latest industry trends.</p>
        <div style={{ marginTop: '2rem' }}>
          <h3 style={{ marginBottom: '1rem', color: '#007bff' }}>Academic Journey</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <span style={{ backgroundColor: '#e3f2fd', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem', color: '#1976d2' }}>Major: Informatics Engineering</span>
          </div>
        </div>
        <div style={{ marginTop: '1rem' }}>
          <h3 style={{ marginBottom: '1rem', color: '#007bff' }}>Interests & Passions</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            <span style={{ backgroundColor: '#e8f5e8', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem', color: '#2e7d32' }}>Design</span>
            <span style={{ backgroundColor: '#fff3e0', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem', color: '#ef6c00' }}>Photography</span>
            <span style={{ backgroundColor: '#f3e5f5', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem', color: '#7b1fa2' }}>Gaming</span>
            <span style={{ backgroundColor: '#e0f2f1', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem', color: '#00695c' }}>Technology Trends</span>
          </div>
        </div>
        <div style={{ marginTop: '1rem' }}>
          <h3 style={{ marginBottom: '1rem', color: '#007bff' }}>Future Goals</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            <span style={{ backgroundColor: '#f1f8e9', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem', color: '#558b2f' }}>Transform Technical Challenges</span>
            <span style={{ backgroundColor: '#fce4ec', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem', color: '#c2185b' }}>Seek Innovative Roles</span>
            <span style={{ backgroundColor: '#e1f5fe', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem', color: '#0277bd' }}>Develop Expertise in Informatics</span>
          </div>
        </div>
        <div style={{ marginTop: '1rem' }}>
          <h3 style={{ marginBottom: '1rem', color: '#007bff' }}>Reflections</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            <span style={{ backgroundColor: '#fff8e1', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem', color: '#f57c00' }}>Overcoming Coding Hurdles</span>
            <span style={{ backgroundColor: '#e8eaf6', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem', color: '#3f51b5' }}>Launching First Web App</span>
            <span style={{ backgroundColor: '#f1f8e9', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem', color: '#558b2f' }}>Supportive Unair Community</span>
            <span style={{ backgroundColor: '#e3f2fd', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem', color: '#1976d2' }}>Fueling Love for Tech</span>
          </div>
          <p style={{ marginTop: '1rem', marginBottom: '1rem', fontStyle: 'italic', color: '#666' }}>My learning journey at university has been filled with exciting challenges and highlights, shaping my problem-solving skills and pushing me to innovate and grow.</p>
        </div>
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "freelance",
        timeframe: "2023 - Present",
        role: "Editing & Assignment Writing Services, Freelance ",
        achievements: [
          <span key="fly-uiux">
            Provided editing services for papers, essays, and academic reports for students and learners.
          </span>,
          <span key="fly-uiux">
            Edited and improved assignments from various disciplines, including humanities, social sciences, and computer science.
          </span>,
           <span key="fly-uiux">
            Designed professional PowerPoint presentations for academic, business, and seminar projects with an engaging and informative visual design.
          </span>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Airlangga University",
        description: <>Informatics engineering student.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Skills & Technologies",
    skills: [
      {
        title: "UI/UX Design",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Web Development",
        description: (
          <>Building next gen apps with HTML, CSS, JavaScript, and responsive design.</>
        ),
        tags: [
          {
            name: "HTML & CSS",
            icon: "html",
          },
          {
            name: "JavaScript",
            icon: "javascript",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Programming",
        description: (
          <>Developing solutions with Java, Python, PHP, Dart, and Golang for various applications.</>
        ),
        tags: [
          {
            name: "Java",
            icon: "java",
          },
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "PHP",
            icon: "php",
          },
          {
            name: "Dart",
            icon: "dart",
          },
          {
            name: "Golang",
            icon: "go",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Problem Solving",
        description: (
          <>Applying logical thinking to tackle real-world challenges.</>
        ),
        tags: [
          {
            name: "Problem Solving",
            icon: "code",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Projects / Works",
  title: `Projects & Works ${person.name}`,
  // biome-ignore lint/style/noUnusedTemplateLiteral: <explanation>
  description: `Visual showcase of projects done while at Universitas Airlangga`,
  // Create new project pages by adding a new .mdx file to app/work/projects (adjust path as needed)
  // Example projects based on provided details: Add 3-5 .mdx files with title, short description, images, optional videos/slideshow/Gdrive links
  // All projects will be listed on the /home and /work routes
  // 1. Portfolio Website: A personal portfolio website showcasing my journey, skills, and projects as an Informatics Engineering student. Built with Next.js, designed with a nature-inspired theme featuring smooth animations and responsive design. Tags: Next.js, HTML/CSS, JavaScript, Web Design. Images: ["/images/projects/portfolio-1.jpg"]. Link: "/work/portfolio-website"
  // 2. MedHug Application: A medication ordering application for easy prescription management and delivery. Built with Dart for cross-platform mobile development. UI/UX prototyped in Figma. Tags: Mobile App, Dart, UI/UX. Images: ["/images/projects/medhug-1.jpg", "/images/projects/medhug-2.jpg"]. Figma Link: "https://www.figma.com/design/2mBFTT1sTIzz0lRR703rWS/MedHug----Project-UI-UX?node-id=88-2205&t=SLK33GkZPth6YTjt-1". Link: "/work/medhug-application"
  // Note: Ensure to create corresponding MDX files for each project with embedded images/videos as needed.
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photos & Collages ${person.name}`,
  // biome-ignore lint/style/noUnusedTemplateLiteral: <explanation>
  description: `A collection of photos and collages showcasing my journey`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own photos/collages
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "Travel adventure collage",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "University project photo",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "Music hobby snapshot",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "Personal achievement collage",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "Team collaboration photo",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "Innovation workshop",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "Design inspiration board",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "Coding session",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };