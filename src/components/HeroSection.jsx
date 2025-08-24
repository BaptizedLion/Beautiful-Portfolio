import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-3">
              {" "}
              Michael
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-3">
              {" "}
              Mapanao
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-1">
            I am an aspiring software and cloud professional with hands-on
            experience in data engineering, cloud technologies, and full-stack
            development. I have completed internships and projects that
            strengthened my skills in AWS services, database management, backend
            APIs, and frontend development. I am passionate about building
            scalable, efficient systems and solving complex technical
            challenges. I am actively seeking opportunities in cloud support,
            software development, and data engineering, where I can contribute
            to impactful projects while continuing to grow my technical
            expertise.
          </p>
          <div className="pt-4 opacity-0 animate-fade-in-delay-1">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transofrm -translate-x-1/2 flex flex-col items-center animate-bounce">
      <span className="text-sm text-muted-foreground mb-2">Scroll</span>
      <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
