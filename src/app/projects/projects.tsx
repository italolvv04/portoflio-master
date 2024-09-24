import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import projectData from '@/data/listProjects.json'
import { ProjectCard } from '@/components/projectCard'

export default function Projects() {
  return (
    <div className="bg-mainTheme text-gray-50 min-h-screen flex flex-col justify-between">
      <Navbar />
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Explore meus projetos
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Confira os projetos que desenvolvi e saiba mais sobre minhas
                habilidades e experiência.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        id="projects"
      >
        <div className="container grid gap-6 px-4 md:grid-cols-2 lg:grid-cols-3 md:px-6  hover:cursor-pointer">
          {projectData.map((project, index) => (
            <ProjectCard
              projectUrl={project.projectUrl}
              key={index}
              altText={project.altText}
              projectTitle={project.projectTitle}
              projectDescription={project.projectDescription}
              builtWith={project.builtWith}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}
