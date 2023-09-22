import type { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/server-runtime";

import DevLogBlock from "~/components/DevLogBlock";
import ProjectBlock from "~/components/ProjectBlock";

export const loader = async ({ context: { payload } }: LoaderFunctionArgs) => {
  const users = await payload.find({
    collection: "users",
  });

  const projects = await payload.find({
    collection: "projects",
  })

  const posts = await payload.find({
    collection: "posts"
  })

  return json({ users: users.docs, posts: posts.docs, projects: projects.docs }, { status: 200 });
};

export default function Index() {
  const { users, posts, projects } = useLoaderData<typeof loader>();
  return (
    <main className="flex flex-col sm:flex-row">
      <section>
        <h2 className="font-heading text-5xl text-aqua">Featured Projects</h2>
        projects load here
        { projects.length > 0 && projects.map(project => <ProjectBlock project={project} key={project.id}  />)}
      </section>
      <section>
        <h2>DevLog Updates</h2>
        { posts.length > 0 && posts.map((post) => <DevLogBlock post={post} key={post.id} />) }
      </section>
    </main>
  );
}
