import Project from '@/components/project/project';
import ProjectTecnologie from '@/components/project/project-tecnologies';

type Project = {
  _id: string;
  name: string;
  tecnologies: string[];
  git_repository: string;
  description: string;
  deploy_url?: string;
  image_name: string;
}

async function getProjects() {
  const response = await fetch(`${process.env.BASE_URL}/api/projects`, { method: 'GET' });
  const projects = await response.json();
  return projects;
}

export default async function Projects() {

  const projects = await getProjects()
  
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
          
          <div className='w-full flex'>
            {projects.map((project: Project) => (
              project.tecnologies.map((tecnology: string) => (
                <ProjectTecnologie key={tecnology} name={tecnology} />
            ))))}
          </div>

          <br />

          <div className='grid grid-cols-2 gap-4 '>
            {projects.map((project: Project) => (
              <Project key={project._id}
                title={project.name}
                description={project.description}
                tecnologies={project.tecnologies}
                deployUrl={project.deploy_url}
                repositoryUrl={project.git_repository}  
                image_name={project.image_name}
              />
            ))}
          </div>
        </section>
            
      </main>
          
    </div>
  )
}
