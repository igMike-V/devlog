import { type Project } from "payload/generated-types"
import { Link } from "@remix-run/react"
import { GrGithub } from "react-icons/gr"

type ProjectProps =  {
  project: Project;
}

const style = {
  button: 'px-3 py-1 rounded-md no-underline text-[.80em] text-light font-text',
}

export default function ProjectBlock({ project }: ProjectProps ) {
  let coverImageUrl = "https://dummyimage.com/600"
  if(typeof project.coverImage === 'object' && project.coverImage.url){
    coverImageUrl = project.coverImage.url
  }
  return (
    <article className="flex flex-col pb-12">
      <div className="flex flex-col sm:flex-row sm:gap-3 content-center pb-1">
        <h2 className="font-heading font-normal sm:text-3xl text-dark m-0">{project.title}</h2>
        <div className="flex gap-2 content-v items-center">
           { ( typeof project.technologies === 'object' && project.technologies.length > 0 ) ?
           project.technologies.map((tech) => {
             if (typeof tech === 'string') {
               return null;
             }
             if (typeof tech.logo === 'string' || tech.logo === undefined){
              return null
             }
             return <img 
                      className="h-6 w-6" 
                      key={tech.id}
                      src={tech.logo.sizes?.thumbnail?.url} 
                      width={50} 
                      height={50} 
                      alt={tech.name}/>;
           }) : null }
          </div>
      </div>
      
      <div
        className="m-0 box-border h-80 rounded-md"
        style={{
          backgroundImage: `url("${coverImageUrl}")`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'bottom'
        }}>
      </div>
      <p className="font-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec lobortis nisi. Ut vestibulum commodo lacus, vel congue ipsum iaculis in. Integer
      </p>
      <div className="flex gap-2">
        <Link 
          to={`/projects/${project.slug}`}
          className={` bg-dark leading-loose ${style.button}`}
        >
          Read More
        </Link>
        {
          typeof project.projectLinks === 'object' &&
            project.projectLinks.map(projectLink => {
              const isGithub = projectLink.linkText.toLowerCase() === 'github'
              return (
                <a 
                  key={projectLink.linkText}
                  className={`${isGithub ? 'bg-dark' : 'bg-aqua' } m-0 ${style.button} hover:scale-95`} 
                  href={projectLink.url} 
                  target="_blank"
                >
                  <div className="flex gap-1 p-0 m-0 items-center">
                    { isGithub && <GrGithub className="text-xl" />}
                    <span className="leading-loose">{ projectLink.linkText }</span>
                  </div>
                </a>
              )
          })
        }
      </div>
    </article>
  )
}