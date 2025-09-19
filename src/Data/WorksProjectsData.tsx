import cosmos from "../assets/projects/cosmos.png";
import vs from "../assets/projects/vs.png";
import crud from "../assets/projects/crud.png";
import meals from "../assets/projects/meals.png";
import advancedNextRouting from "../assets/projects/routing.png";
import nextPosts from "../assets/projects/next.png";

export const projectsData = [
  {
    id: 1,
    trackId: "frontend",
    title: "Cosmose Store - E-commerce Platform",
    description: (
      <p>
        Built a full-featured{" "}
        <span className="text-cyan-300 font-semibold">e-commerce platform</span>{" "}
        with{" "}
        <span className="text-purple-300 font-semibold">authentication</span>,{" "}
        <span className="text-cyan-300 font-semibold">API integration</span>,
        and a{" "}
        <span className="text-purple-300 font-semibold">responsive UI</span>.
      </p>
    ),
    technologies: [
      {
        name: "React.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Context API",
        icon: "",
      },
      {
        name: "TanStack Query",
        icon: "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*MmlDCT4vy7uZhsoL.png", // شعار React
      },
      {
        name: "Formik",
        icon: "https://madewithreact.com/content/images/2020/04/formik.png",
      },
      {
        name: "Swiper.js",
        icon: "https://swiperjs.com/images/blog/swiper-v10/cover.png",
      },
      {
        name: "Framer Motion",
        icon: "https://tsh.io/wp-content/uploads/2023/07/framer-motion-logo-1.png",
      },
    ],
    Features: [
      "Secure login and registration",
      "real-time API interactions ",
      "responsive design",
      "animations",
    ],
    imageSrc: cosmos,
  },
  {
    id: 2,
    trackId: "frontend",
    title: "VS Code Clone - Simulated IDE Interface",
    description: (
      <p>
        VS Code Clone – A{" "}
        <span className="text-cyan-300 font-semibold">React</span> &{" "}
        <span className="text-purple-300 font-semibold">TypeScript</span>{" "}
        project that replicates the Visual Studio Code interface with{" "}
        <span className="text-cyan-300 font-semibold">Redux</span> and{" "}
        <span className="text-purple-300 font-semibold">Tailwind CSS</span>.
      </p>
    ),
    technologies: [
      {
        name: "React.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "Redux",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      },
    ],
    Features: [
      "VS Code-like UI with dynamic layout",
      "resizable panels",
      "reusable components",
      "state management via Redux Toolkit",
    ],
    imageSrc: vs,
  },
  {
    id: 3,
    trackId: "frontend",
    title: "React Memoized CRUD System – Advanced React Web App",
    description: (
      <p>
        Built an <span className="text-cyan-300 font-semibold">accessible</span>{" "}
        CRUD system with{" "}
        <span className="text-purple-300 font-semibold">
          reusable components
        </span>{" "}
        and{" "}
        <span className="text-cyan-300 font-semibold">
          advanced memoization
        </span>{" "}
        techniques.
      </p>
    ),
    technologies: [
      {
        name: "React.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.hashnode.com/res/hashnode/image/upload/v1696188979824/2e93b172-993d-46f0-aec7-055a81d311cb.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
      },
      {
        name: "Memoization Hooks",
        icon: "",
      },
    ],
    Features: [
      "Accessibility with Headless-UI",
      "custom styling with Tailwind CSS",
      "optimized re-renders using memoization hooks",
      "reusable components",
      "TypeScript for type safety",
    ],
    imageSrc: crud,
  },
  {
    id: 4,
    trackId: "frontend",
    title: "NextLevel Food – Meal Sharing App",
    description: (
      <p>
        NextLevel Food – A{" "}
        <span className="text-cyan-300 font-semibold">Next.js</span> app with{" "}
        <span className="text-purple-300 font-semibold">App Router</span> and{" "}
        <span className="text-cyan-300 font-semibold">CSS Modules</span> for{" "}
        <span className="text-purple-300 font-semibold">foodies</span> to share
        and explore recipes.
      </p>
    ),
    technologies: [
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "App Router",
        icon: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*NSzAafDZfN-E0L3AzIJYQg.png",
      },
      {
        name: "CSS Modules",
        icon: "https://i.redd.it/3vr72d9jitw21.png",
      },
    ],
    Features: [
      "Dynamic routing with Next.js App Router",
      "modular styling with CSS Modules",
      "responsive design",
      "optimized images with Next.js Image component",
      "SEO-friendly structure - dynamic metadata ",
      "Image uploads with file system",
      "server actions for data handling",
    ],
    imageSrc: meals,
  },
  {
    id: 5,

    trackId: "frontend",
    title: "Advanced Next Routing – News & Landing Page App",
    description: (
      <p>
        A <span className="text-cyan-300 font-semibold">Next.js</span>{" "}
        application demonstrating{" "}
        <span className="text-purple-300 font-semibold">advanced routing</span>{" "}
        patterns with a{" "}
        <span className="text-cyan-300 font-semibold">news section</span> and a{" "}
        <span className="text-purple-300 font-semibold">landing page</span>{" "}
        featuring unique layouts.
      </p>
    ),
    technologies: [
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "SQLite",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
      },
    ],
    Features: [
      "Parallel routing",
      "Intercepting routes",
      "Group routes",
      "Dynamic layouts",
      "Modular architecture",
    ],
    imageSrc: advancedNextRouting, // خليها متغير عندك زى meals
  },

  {
    id: 6,
    trackId: "frontend",
    title: "NextPosts – Social Media App",
    description: (
      <p>
        A <span className="text-cyan-300 font-semibold">Next.js</span> social
        media web application that allows users to{" "}
        <span className="text-purple-300 font-semibold">create posts</span> with
        images, <span className="text-cyan-300 font-semibold">like/unlike</span>{" "}
        posts, and manage content seamlessly.
      </p>
    ),
    technologies: [
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "Server Actions",
        icon: "",
      },
      {
        name: "useOptimistic",
        icon: "https://iconape.com/wp-content/png_logo_vector/react-logo.png",
      },
      {
        name: "Cloudinary",
        icon: "https://cdn.prod.website-files.com/64d41aab8183c7c3324ddb29/674f5ebd0de31390e6f53218_3-logo-brand-square.svg",
      },
      {
        name: "PostgreSQL (Neon)",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
    ],
    Features: [
      "Post creation with image upload",
      "Like/unlike system",
      "Server-side form handling",
      "Cloud storage integration",
      "Optimized database operations",
    ],
    imageSrc: nextPosts, // برضه متغير عندك زى meals
  },
];
