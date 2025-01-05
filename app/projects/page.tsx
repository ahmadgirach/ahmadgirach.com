export default function ProjectsPage() {
  const projects = [
    {
      name: "MiniDrive",
      link: "https://minidrive.vercel.app",
      description: "A file manager app. Create folders, upload files and more.",
    },
    {
      name: "Platform Scout",
      link: "https://platformscout.com",
      description:
        "A Diectory to showcase all the platforms where users can submit and promote their projects.",
    },
    {
      name: "Password Generator",
      link: "https://random-passsword-generator.netlify.app",
      description: "Generate a strong password effortlessly.",
    },
  ];

  return (
    <section className="flex flex-col min-h-screen space-y-10">
      <h1 className="font-extrabold text-4xl">Projects</h1>

      <div className="grid grid-col-1 md:grid-cols-2 gap-5">
        {projects.map((project, index) => (
          <div className="shadow-md p-4 rounded-md space-y-4" key={index}>
            <h2 className="font-semibold text-lg">{project.name}</h2>
            <p className="text-sm">{project.description}</p>
            <button className="bg-orange-700 text-white transition-colors hover:bg-orange-900 rounded-full px-4 py-2 text-sm">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Visit &rarr;
              </a>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
