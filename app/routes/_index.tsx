import type { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/server-runtime";

import DevLogBlock from "~/components/DevLogBlock";
import ProjectBlock from "~/components/ProjectBlock";

export const loader = async ({ context: { payload } }: LoaderFunctionArgs) => {
  const projects = await payload.find({
    collection: "projects",
  })

  const posts = await payload.find({
    collection: "posts"
  })

  return json({ posts: posts.docs, projects: projects.docs }, { status: 200 });
};

export default function Index() {
  const { posts, projects } = useLoaderData<typeof loader>();
  return (
    <main className="flex flex-col sm:gap-20 md:flex-row">
      <section className="basis-7/12">
        <h2 className="font-heading font-normal text-3xl sm:text-[2.5em] text-aqua mt-0 p-0">Featured Projects</h2>
        { projects.length > 0 && projects.map(project => <ProjectBlock project={project} key={project.id}  />)}
      </section>
      <section className="basis-5/12">
        <h2 className="font-heading font-normal text-3xl sm:text-[2.5em] md:pl-[.78em] text-aqua mt-0 p-0">DevLog Updates</h2>
        { posts.length > 0 && posts.map((post) => <DevLogBlock post={post} key={post.id} />) }
      </section>
    </main>
  );
}
