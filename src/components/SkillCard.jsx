import { Tilt } from "react-tilt";

export default function SkillCard({ imageSrc, title, description, icon }) {
  return (
    <Tilt>
      <div className="border-2 w-full h-full flex flex-col justify-center items-center py-10 gap-y-8 font-semibold rounded-lg">
        <div className="flex flex-col items-center">
          <img className="block w-16" src={imageSrc} />
          {icon ? icon : null}
        </div>
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </Tilt>
  )
}