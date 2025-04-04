import Project from "@/components/project/project";

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

export default async function ProjectsSection() {

  const projects = await getProjects()

  return (
    <div className='w-full flex flex-col justify-center items-center mb-5'>
        <div className='w-full px-5 mb-5 flex 
                        md:p-5'>
            <h1 className='text-[16px] font-bold md:text-[18px] lg:text-[30px]'> Aqui estão alguns dos meus principais projetos: </h1>
        </div>
        
        <div className='grid grid-cols-1 gap-10
                        md:grid-cols-2
                        xl:grid-cols-3 xl:gap-14'>
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
    </div>
  )
}
