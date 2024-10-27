import project1 from "../assets/assets/projects/project-1.jpg";
import project2 from "../assets/assets/projects/project-2.jpg";
import project3 from "../assets/assets/projects/project-3.jpg";
import project4 from "../assets/assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a strong interest in crafting robust and scalable web applications. Through various projects and hands-on learning, I have developed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my knowledge to create innovative solutions that drive business growth and deliver exceptional user experiences.

`;

export const ABOUT_TEXT = `I am an accomplished and versatile full stack developer with a strong passion for designing efficient and user-friendly web applications. Despite being relatively early in my professional journey, I have been actively enhancing my skills in technologies such as React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB through diverse projects and learning experiences. My fascination with understanding how things work has evolved into a steadfast commitment to continuously learn and tackle new challenges. I excel in collaborative environments and derive satisfaction from resolving intricate issues to deliver high-quality solutions. Beyond coding, I actively engage in staying abreast of the latest technologies and contributing to open-source projects.`;



export const PROJECTS = [
  {
    title: "Code-IDE Web",
    image: project1,
    description:
      "A React.js-based web IDE enabling real-time editing and merging of HTML, CSS, and JavaScript for seamless code testing.",
    technologies: ["HTML", "CSS", "React-js"],
    githubLink: 'https://github.com/Viveksingh579/Code-IDE-Web',
  },
  {
    title: "Quiz-Web",
    image: project2,
    description:
      "A MERN stack application for creating and taking interactive quizzes, featuring user authentication, role-based access, and dynamic quiz management..",
    technologies: ["HTML", "CSS", "React-js", "NodeJs","Express JS","MongoDb"],
    githubLink: 'https://github.com/Viveksingh579/Quiz-WEB',

  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
    githubLink: 'https://github.com/Viveksingh579/Portfolio',
  }
  
];

export const CONTACT = {
  address: "B-606 Shree Saidham S.P. Road , Vaishali Nagar , Dahisar(E), MUM 400068 ",
  phoneNo: "+91 9152210359 ",
  email: "vivek579singh@gmail.com",
};

export const Link={
  Github:"https://github.com/viveksingh579",
  instagram:" ",
  Twitter:" ",
  Linkedin:"https://www.linkedin.com/in/vivek-singh-921650227/",

}
