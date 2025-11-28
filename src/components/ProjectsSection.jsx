import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "NYC Social Services Dashboard",
    description: "I built an interactive data analytics dashboard that visualizes NYC 311 Social Services complaints. The project ingests real-world data from Azure Blob Storage, processes it using Python, and presents insights through a Streamlit web app..",
    image: "/projects/project1.png",
    tags: ["Python", "SQL(MySQL/Azure SQL)", " Streamlit", "Pandas", "Azure Blob Storage"],
    demoUrl: "https://nycsocialservices311-8xytyl5av2bxltnx99mrqh.streamlit.app/",
    githubUrl: "https://github.com/Reba507/data_pipeline_nyc_social_services_",
  },
  {
    id: 2,
    title: "Caption Craft",
    description:
      "AI caption generator for Instagram, X and LinkedIn to enhance user engagement and automate customer support,deployed on AWS and Azure",
    image: "/projects/project2.png",
    tags: ["JS", "AWS", "HTML","AWS", "Azure"],
    demoUrl: "http://cloud-app-env.eba-tu3rjvwq.af-south-1.elasticbeanstalk.com/",
    githubUrl: "https://github.com/Reba507/",
  },
  {
    id: 3,
    title: "RecipeShare FullStack Project",
    description:
      "clean, modern recipe platform that allows users to create, browse, filter, update, and delete recipes. It demonstrates end-to-end development skills with a production-minded approach.",
    image: "/projects/project3.png",
    tags: ["ASP.NET Core 8 Web API (.NET 8)", "EF Core", "TypeScript","React","xUnit","Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Reba507"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
