import SocialIcon from "./SocialIcon"

export default function Header() {
  return (
    <header className="bg-dark px-4 py-2 flex items-center fixed bottom-0 min-w-full justify-between">
      <div >
        <h1 className="font-heading leading-none font-normal text-[1em] sm:text-[1.5em]">
          <span className="flex flex-col sm:flex-row sm:gap-2">
            <span className="text-light">Mike Vautour</span>
            <span className="flex">
              <span className=" text-aqua">DevLog</span>
              <span className="text-light">&</span>
              <span className="text-aqua">Project Sandbox</span>
            </span>
          </span>
        </h1>
      </div>
      <div className="flex items-center gap-10 text-light font-text text-sm flex-grow justify-end px-7">
        <nav className="">
          <ul className="list-none items-center flex gap-6">
            <li>allProjects<span className="text-aqua">: [Project]</span></li>
            <li>devLogs<span className="text-aqua">: [BlogPost]</span></li>
            <li>myStatus<span className="text-aqua">: Resume</span></li>
          </ul>
        </nav>
        <ul className="flex items-center gap-4 list-none">
          <li><SocialIcon href="#" target="_blank" icon="github" color="aqua" /></li>
          <li><SocialIcon href="#" target="_blank" icon="linkedin" color="aqua" /></li>
          <li><SocialIcon href="#" target="_blank" icon="twitter" color="aqua" /></li>
          <li><SocialIcon href="#" target="_blank" icon="youtube" color="aqua" /></li>
        </ul>
        <div className="theme switch">
            theme
        </div>
      </div>
     
    </header>
  )
}