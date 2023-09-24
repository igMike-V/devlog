import { type Post } from "payload/generated-types"
import { Link } from "@remix-run/react"

type PostProps =  {
  post: Post;
}

export default function DevLogBlock({ post }: PostProps ) {
  let coverImageUrl = "https://dummyimage.com/600"
  if(typeof post.coverImage === 'object' && post.coverImage.url){
    coverImageUrl = post.coverImage.url
  }
  return (
    <article className="flex flex-col pb-12">
      <div className="flex flex-row-reverse md:flex-row gap-3">

        <div className="flex flex-col justify-end items-start pb-[.4em] sm:pb-0">
          <span className="font-heading -ml-1 tracking-tighter leading-none text-5xl">16</span>
          <span className="font-heading tracking-tighter leading-none text-[1.15em]">Sept</span>
          <span className="font-heading tracking-tighter leading-none text-[1.145em]">2023</span>
        </div>
        <div className="flex-grow">
          <h2 className="font-heading text-xl sm:text-2xl font-normal pb-2 text-dark m-0">{post.title}</h2>
          <div
          className="m-0 rounded-md h-24 sm:h-52 md:h-72"
            style={{
              backgroundImage: `url("${coverImageUrl}")`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'bottom'
            }}>
          </div>
        </div>
        
      </div>
      <div className="flex gap-2 pt-1 md:pl-[2.5em] content-v items-center">
           { ( typeof post.technologies === 'object' && post.technologies.length > 0 ) ?
           post.technologies.map((tech) => {
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
    </article>
  )
}