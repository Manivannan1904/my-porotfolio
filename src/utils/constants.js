const navItems = ["home", "about", "experience", "skills", "contact"];

const experiences = [
  {
    role: "UI / Frontend Developer",
    company: "Perpetuuiti Technosoft Pte Ltd",
    period: "12/2022 – 07/2025",
    location: "Chennai, India",
    achievements: [
"Created dynamic admin panels for configuration and content management using React Table and custom CRUD components.",

"Collaborated with UI/UX designers in Figma, translating design systems into production-ready components.",

"Designed reusable hook libraries for API calls, debounced searches, and global event management.",

"Implemented advanced state management using Redux Toolkit and Context API, optimizing re-render cycles and reducing memory overhead.",

"Developed reusable, atomic React components, reducing UI duplication by 40% and standardizing the design system across multiple applications.",

"Built form validation frameworks with React Hook Form and Yup, enforcing complex business rules across multi-state forms.",

"Integrated biometric verification fallback mechanisms (Face ID, fingerprint) for seamless cross-device authentication.",

"Designed and developed a Scheduler Calendar (DR Calendar) with real-time slot availability, schedule synchronization, and drag-and-drop rescheduling.",

"Architected modular API integration layers using Axios interceptors and service factories, enabling centralized error handling, retries, and token management.",

    "Handled all edge cases in API communication — including timeouts, partial payloads, stale tokens, and race conditions — using async/await and promise cancellation.",

"Migrated class-based components to functional components with hooks, reducing boilerplate and improving testability.",

"Achieved 90%+ test coverage with Jest and React Testing Library, ensuring stable and predictable UI behavior across releases.",

"Improved page load speed by 25% through code-splitting, lazy loading, and route-based chunk optimization using Webpack and React Suspense."
    ],
    gradient: "from-purple-500 to-pink-600",
  },
  {
    role: "UI / Frontend Developer",
    company: "Apzzo Technologies Pvt. Ltd.",
    period: "07/2021 – 07/2022",
    location: "Chennai, India",
    achievements: [
      'Created dynamic admin panels for configuration and content management using React Table and custom CRUD components.',
'Developed form validation frameworks using React Hook Form and Yup, enforcing complex business rules across multiple form states.',
'Collaborated with UI/UX designers using Figma , translating design systems into production-ready components.',
 " Designed reusable hook libraries for API calls, debounced searches, and global event management.",
" Improved page load speed by 25% through code-splitting, lazy loading, and route-based chunk optimization using Webpack and React Suspense.",
 "Strengthened product quality by enforcing ESLint, Prettier, and TypeScript typing across the entire frontend codebase.",
"Delivered responsive, mobile-first web experiences using React, Material UI, and CSS Grid, ensuring seamless performance across all device resolutions.",
"integrated WebSocket-based chat system, enhancing communication between users.",
"Applied version control best practices using Git, GitLab, and branching workflows to maintain clean and traceable development pipelines."
    ],
    gradient: "from-blue-500 to-purple-600",
  },
];



export { navItems, experiences };
