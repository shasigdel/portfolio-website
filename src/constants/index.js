import { FaInstagram } from 'react-icons/fa';
import { 
  chatProject, frequencyProject, libraryProject, 
  manjushreeProject, note, book 
} from '../assets';
import { FaGit, FaLinkedin, FaX } from 'react-icons/fa6';

export const navLinksdata=[
  {
    _id: 1001,
    title: "Home",
    link: "home",
  },
  {
    _id: 1002,
    title: "Education",
    link: "education",
  },
  {
    _id: 1003,
    title: "Resume",
    link: "resume",
  },
];

export const EXPERIENCES = [
  {
    year: 'Feb 2025 - Present',
    role: 'Software Engineer',
    company: 'Blink Voice Inc.',
    location: 'Uniondale, NY',
    description: ['Developed scalable backend modules and microservices, improving system performance and lowering error rates.',
          'Built real-time Electron desktop application (Comet3) using React and WebSockets, optimizing communication latency.','Implemented MongoDB replica sets to improve fault tolerance and data consistency.',
          'Integrated Jira API automation, accelerating QA ticket creation and reducing manual effort.','Participated in Agile ceremonies, code reviews, debugging, and release optimization.'
          ],
    technologies: ['Python', 'ReactJS', 'RabbitMQ', 'NGINX', 'NodeJS', 'MongoDB']
  },

 {
  year:'Jun 2024 - Dec 2024',
  role:'Software Engineer Intern',
  company: 'York College - IT Department',
  location: 'Queens, NY',
  description: ['Enhanced LLM functionalities by developing a scalable backend with Python and LangChain, improving system performance.',
  'Improved user interaction by creating a responsive frontend using ReactJS, increasing usability of the SLM.',
  'Supported software reliability by assisting in the deployment and maintenance of applications in production, ensuring continuous operation.',
  'Ensured high code quality by participating in code reviews, leading to better software consistency and fewer defects.'],
  technologies: ["Javascript","ReactJS", "LLM", "LangChain", "Postgres", "Flask", "RestAPI", "AI"]
},
{
  year:'Jun 2024 - Sept 2024',
  role:'Software Engineer Intern',
  company: 'Tech Incubator at Queens College',
  location: 'Queens, NY',
  description: ['Delivered functional software solutions by collaborating with cross‑functional teams, ensuring alignment with project goals.'
  ,'Enhanced code quality by developing clean, maintainable, and efficient code, which improved overall project scalability.'
  ,'Improved project continuity by documenting development processes, supporting team knowledge sharing and onboarding.'],
  technologies: ["Javascript","ReactJS", "Figma"]
}, 
{
  year:'Feb 2024 - Apr 2024',
  role:'Software Engineer Intern',
  company: 'AuriStor Inc.',
  location: 'New York, NY',
  description: ['Enhanced user experience by developing a ReactJS and TypeScript dashboard for file‑sharing, enabling efficient data access.'
  ,'Improved system integration by collaborating with backend teams to integrate APIs, resulting in seamless functionality'
  ,'Boosted application reliability by using DSA for debugging, reducing errors and enhancing stability.'],
  technologies: ["Javascript","Tailwind CSS","ReactJS", "Docker", "Kubernetes", "Go"]
}, 
{
  year:'May 2022 - Feb 2023',
  role:'Software Engineer',
  company: 'BNY-Mellon',
  location: 'New York, NY',
  description: ['Streamlined application delivery by automating deployment pipelines with GitLab CI/CD.'
  ,'Improved data accessibility by integrating client data into BNY Mellon’s data lake.'
  ,'Built secure RESTful APIs with Spring Boot to enable seamless data integration.'
  ,'Boosted system stability by troubleshooting and optimizing Java applications, reducing downtime.'],
  technologies: ["Java","Rest API","Spring Boot", "DocuSign", "AppEngine", "Hibernate"]
}, 
]


export const CONTACT = {
  email: "shasigdel@gmail.com",
  phone: "+1 929 602 9703",
}


export const EDUCATION = 
[{
  degree: "Bachelor's Degree",
  school: "CUNY-York College",
  discipline: "Computer Science",
  graduation: "2022 - 2024"
},
{
  degree: "Associate's Degree",
  school: "Laguardia Community College",
  discipline: "Computer Technology",
  graduation: "2020 - 2021"
}]

export const PROJECTS = [
  {
    title: "York Chat",
    des: "A real-time messaging platform using Firebase (OAuth2) and ChatEngine.io. Supports individual and group chats.",
    src: chatProject,
    gitRepo: "https://github.com/shasigdel/york-project-chat-app",
    website: "https://yorkchat.netlify.app",
  },
  {
    title: "Library Informative System",
    des: "A web app built using ReactJS to manage and access library resources efficiently.",
    src: libraryProject,
    gitRepo: "https://github.com/shasigdel/libraryWebsite-demo",
    website: "https://yorklibrary.netlify.app",
  },
  {
    title: "ManjuShree Tailoring",
    des: "A website for a local tailoring business, developed using ReactJS.",
    src: manjushreeProject,
    gitRepo: "https://github.com/shasigdel/majushree-tailor",
    website: "https://manjushree.netlify.app",
  },
  {
    title: "Frequency Analysis",
    des: "A Python-based tool for analyzing character and word frequencies in text.",
    src: frequencyProject,
    gitRepo: "https://github.com/shasigdel/frequency-analysis-python",
  },
  {
    title: "Note Taking App",
    des: "A full-stack note-taking app with a Django backend and ReactJS frontend.",
    src: note,
    gitRepo: "https://github.com/shasigdel/django-react-fullstack",
  },
  {
    title: "Book Store",
    des: "A full-stack MERN bookstore application, built using Vite.",
    src: book,
    gitRepo: "https://github.com/shasigdel/mernstack-bookstore",
  },
];


export const SOCIAL = [
  {
    href: "https://www.instagram.com/shashanksigdel/",
    Icon: FaInstagram,
    label: "Instagram",
    color: "text-pink-500 hover:text-pink-400",
  },
  {
    href: "https://x.com/shashanksig",
    Icon: FaX,
    label: "Twitter/X",
    color: "text-gray-400 hover:text-gray-300",
  },
  {
    href: "https://www.linkedin.com/in/shashanksigdel1429/",
    Icon: FaLinkedin,
    label: "LinkedIn",
    color: "text-blue-500 hover:text-blue-400",
  },
  {
    href: "https://github.com/shasigdel",
    Icon: FaGit,
    label: "GitHub",
    color: "text-gray-300 hover:text-gray-200",
  },
];
