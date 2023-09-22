import { type Post } from "payload/generated-types"

type PostProps =  {
  post: Post;
}

export default function DevLogBlock({ post }: PostProps ) {
  console.log(`Post ${post.id}:`,  post)
  return (
    <section>
      {post.title}
    </section>
  )
}