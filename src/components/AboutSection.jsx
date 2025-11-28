import { Briefcase, Code, Cloud, Workflow } from "lucide-react";
import MyCV from "@/assets/Rebaone_Ngwako_Resume.pdf";


export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Fullstack Developer
            </h3>

            <p className="text-muted-foreground">
              Software Engineer with strong capabilities in .NET Core, C#, Angular,
              SQL Server, Docker, Kubernetes, and full-stack development.
              Experienced in delivering enterprise solutions across corporate
              environments, with solid skills in API design, performance
              optimization, and scalable architecture.
            </p>

            <p className="text-muted-foreground">
              I'm passionate about creating elegant solutions to complex problems,
              and I'm constantly learning new technologies to stay ahead in a
              rapidly evolving tech landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href= {MyCV}
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {/* Web Dev */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive, accessible, and scalable applications using modern frameworks.
                  </p>
                </div>
              </div>
            </div>

            {/* Cloud */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Cloud className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Cloud (AWS & Azure)</h4>
                  <p className="text-muted-foreground">
                    Building and deploying cloud-native applications with AWS and Azure,
                    including API hosting, storage, identity, and CI/CD pipelines.
                  </p>
                </div>
              </div>
            </div>

            {/* DevOps */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Workflow className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">DevOps</h4>
                  <p className="text-muted-foreground">
                    Experience with CI/CD pipelines, containerization, orchestration,
                    and automation using tools such as Docker, Kubernetes, Azure DevOps,
                    GitHub Actions, and PowerShell.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
