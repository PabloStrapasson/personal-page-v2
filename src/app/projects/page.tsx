import React from 'react'

type Project = {
  _id: string;
  name: string;
  tecnologies: string[];
  git_repository: string;
  description: string;
  deploy_url?: string;
}

async function getProjects() {
  const response = await fetch(`${process.env.BASE_URL}/api/projects`, { method: 'GET' });
  const projects = await response.json();
  return projects;
}

export default async function Projects() {

  const projects = await getProjects()
  // console.log(projects)
  return (
    <div className="flex items-center justify-center min-h-screen pt-20 px-2 pb-20 gap-12 md:pt-28 lg:px-20 lg:py-0 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center justify-center sm:items-start snap-y snap-mandatory">
        
        <section id='my_certifications' className='snap-start w-full flex flex-col justify-center'>
          <h1> Projects </h1>
          <ul>
            {projects.map((project: Project) => (
              <li key={project._id}>{project.name} {project._id}</li>
            ))}
          </ul>
        </section>
            
      </main>
          
    </div>
  )
}
