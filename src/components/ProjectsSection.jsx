const projects = [
  {
    id: 1,
    title: "Textbook Management System",
    description:
      "This is a database focused project using a local MySQL database tied into a frontend.",
    image: "/projects/bibliopedia.png",
    tags: ["JavaScript", "Node.js", "Express.js", "MySQL", "Pug"],
    demoUrl: "#",
    githubUrl: "https://github.com/BaptizedLion/TCSS445_Database",
  },
  {
    id: 2,
    title: "Craps Simulator",
    description:
      " Developed a Java-based Craps game simulator, showcasing object-oriented programming principles.",
    image: "/projects/craps.png",
    tags: ["Java", "Java Swing", "JUnit 5"],
    demoUrl: "#",
    githubUrl: "https://github.com/BaptizedLion/Craps_Game",
  },
  {
    id: 3,
    title: "Word Battle",
    description: "Similar to worlde, this is a 4 letter version!",
    image: "/projects/wordBattle.png",
    tags: ["JavaScript", "Python", "HTML", "CSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/BaptizedLion/wordBattle",
  },
];

export const ProjectsSection = () => {
  return <section id="projects" className="py-24 px-4 relative">
    <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured <span className="text-primary"> Projects</span></h2>
    </div>

  </section>;
};
