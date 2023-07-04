import { BsGithub } from "react-icons/bs"
import { AiOutlineLink } from "react-icons/ai"
import colmarProject from "../assets/pj-1-tb.png"

export default function ProjectCard({ title, description, githubLink, demoLink, reverseContent, backgroundColor, textColor, titleColor, descriptionColor, demoIconSize, githubIconSize, isBlackWhiteImage, projectImage }) {
  const defaultTitle = "Title Project"
  const defaultDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five ";

  return (
    <div className={`flex ${reverseContent ? "flex-row-reverse" : ""} max-lg:flex-col-reverse`}>
      <div className={`w-1/2 ${backgroundColor ? backgroundColor : ""} max-lg:w-full`}>

        {/* Project Detail */}
        <div className="flex flex-col justify-between h-full gap-y-4 p-8 max-lg:gap-y-16">
          <div className={`flex flex-col justify-between gap-y-4 ${textColor ? textColor : null}`}>
            <div>
              <h1 className={`text-4xl font-semibold ${titleColor ? titleColor : null}`}>{title ? title : defaultTitle}</h1>
            </div>
            <div>
              <p className={`text-xl ${descriptionColor ? descriptionColor : null}`}>
                {description ? description : defaultDescription}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-3">
            <a href={demoLink ? demoLink : ""} target="_blank">
              <AiOutlineLink size={demoIconSize ? demoIconSize : 44} />
            </a>
            <a href={githubLink ? githubLink : ""} target="_blank">
              <BsGithub size={githubIconSize ? githubIconSize : 44} />
            </a>
          </div>
        </div>
      </div>

      {/* Project Image */}
      <div className={`w-1/2 ${backgroundColor ? backgroundColor : ""} max-lg:w-full`}>
        <div className="p-8">
          <img className={`block w-full  hover:grayscale-0 shadow-xl rounded-xl ${isBlackWhiteImage ? "grayscale" : "grayscale-0"} hover:scale-125 hover:transition-all transition-all`} src={projectImage ? projectImage : colmarProject} />
        </div>
      </div>

    </div>
  )
}