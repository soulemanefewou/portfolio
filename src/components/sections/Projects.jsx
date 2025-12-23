import React from 'react'
import  SectionTitle  from '../ui/SectionTitle'
import { projectsData } from '../../../portfolio-data'
import ProjectCard from '../ui/ProjectCard'

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle
              title="Mes Projets"
              subtitle="Découvrez une sélection de mes réalisations les plus significatives"
            />
            
            {/* Grid responsive */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {projectsData.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
  )
}

export default Projects
