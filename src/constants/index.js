import project1 from "../assets/projects/Apexcare.jpg";
import project2 from "../assets/projects/Netflix-clone.jpg";
import project3 from "../assets/projects/Portfolio.png";
import project4 from "../assets/projects/NeonBrush.png";
import project5 from "../assets/projects/PizzaProject.jpg";

export const HERO_CONTENT = `I am a passionate full-stack developer and UI/UX designer with a strong foundation in creating web applications. I have experience with front-end technologies like React and back-end tools like Node.js, MySQL, and MongoDB. My goal is to contribute to building seamless and user-friendly digital experiences.`;

export const ABOUT_TEXT = `I am an undergraduate student pursuing a B.Sc. (Hons) in Computer Science at the University of Kelaniya, Sri Lanka. With a strong passion for both front-end and back-end development, as well as UI/UX design, I strive to create seamless and user-friendly web applications. I have a solid foundation in technologies such as React, Node.js, MySQL, and MongoDB, and I am continuously exploring new tools and frameworks to expand my skill set. Additionally, I have a keen interest in data analysis and have learned statistics using R and Excel. I am eager to apply my knowledge in real-world projects and always seek opportunities to learn and grow. Outside of coding, I enjoy staying active and keeping up with the latest trends in technology and design.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Hospital Management System: ApexCare",
    image: project1,
    description:
      "Developed a comprehensive hospital management system that streamlines patient care and administrative tasks, enhancing operational efficiency and patient satisfaction. Key features include doctor channeling, prescription management, emergency care services, outpatient department handling, online pharmacy integration, and payment processing.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
  },
  {
    title: "Media Streaming Platform",
    image: project2,
    description:
      "Created a fully functional Netflix clone that replicates the core features of the popular streaming service, providing users with an engaging entertainment experience. This project includes user authentication, content browsing, and media playback functionalities. ",
    technologies: ["HTML", "CSS", "JavaScript", "SpringBoot","Java"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML",  "React", "Tailwind"],
  },
  {
    title: "Digital Art Gallery: Neon Brush (Group Project) ",
    image: project4,
    description:
      "Established an online platform for artists to showcase and sell their artwork, facilitating greater access to art and supporting creative professionals. The system includes features for artist profiles, artwork listings, and secure transactions. ",
    technologies: ["React",  "Tailwind", "MongoDB", "Sprin Boot"],
  },
  {
    title: "Pizza Delivery System ",
    image: project5,
    description:
      "Designed a pizza delivery application that optimizes order processing and delivery logistics, improving customer satisfaction through timely service. This project focuses on user-friendly interfaces for order placement and real-time tracking of deliveries. ",
    technologies: [".Net", "C#",  "mySQL"],
  },
];

export const CONTACT = {
  address: "Gampaha , Sri Lanka ",
  phoneNo: "+94 724 174 599",
  email: "neluni09@gmail.com",
};
