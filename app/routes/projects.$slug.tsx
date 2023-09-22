import type { 
  LoaderFunctionArgs 
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/server-runtime"

import type {  Project } from "payload/generated-types";

import type { FunctionComponent } from "react";

export const loader = async ({ params, context: { payload } }:LoaderFunctionArgs) => {
  const project = await payload.find({
    collection: "projects",
    where: {
      slug: {
        equals: params.slug
      }
    },
    limit: 1
  })

  return json({project: project.docs[0]})
}

export default function Project<FunctionComponent>() {
  const { project } = useLoaderData<typeof loader>();
  console.log(project)
  return (
    <h1 className="font-heading">{project?.title}</h1>
  )
}
