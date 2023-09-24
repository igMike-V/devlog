type PostProps =  {
  url: string;
}

export default function DevLogBlock({ url }: PostProps ) {
  return (
    <section>
      {url}
    </section>
  )
}