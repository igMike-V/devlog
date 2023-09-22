import { type Project } from "payload/generated-types"
import { Link } from "@remix-run/react"

type ProjectProps =  {
  project: Project;
}

export default function ProjectBlock({ project }: ProjectProps ) {
  console.log(`Project ${project.id}:`,  project)
  let coverImageUrl = "https://dummyimage.com/600"
  if(typeof project.coverImage === 'object' && project.coverImage.url){
    coverImageUrl = project.coverImage.url
  }
  return (
    <article>
      <div>
        <div 
          style={{
            backgroundImage: `url("${coverImageUrl}")`
          }}>
            <div>
              put logos here 
            </div>
        </div>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec lobortis nisi. Ut vestibulum commodo lacus, vel congue ipsum iaculis in. Integer
        </p>
        <div>
          <Link to={`/projects/${project.slug}`}>Read More</Link>
          {
            typeof project.projectLinks === 'object' &&
              project.projectLinks.map(l => <a href={l.url} target="_blank">{l.linkText}</a>)
          }
        </div>
      </div>
    </article>
  )
}