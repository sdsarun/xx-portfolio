import { FaReact, FaNodeJs } from "react-icons/fa"
import { SiMongodb, SiExpress } from "react-icons/si"
import SkillCard from "./SkillCard"
import Marquee from "react-fast-marquee"
import reacticon from "../assets/reactjs.png"
import nodeicon from "../assets/nodejs.png"
import mongodbicon from "../assets/mongodb.png"
import expressicon from "../assets/expressjs.svg"
import htmlicon from "../assets/html.png"
import cssicon from "../assets/css.png"
import javascripticon from "../assets/javascript.png"
import bootstrapicon from "../assets/bootstrap.svg"
import sqlicon from "../assets/sql.png"
import giticon from "../assets/git.png"
import figmaicon from "../assets/figma.png"

export default function SkillsSection() {
  return (
    <div className="pt-48" id="skills">
      <div>
        <Marquee className="py-4">
          <span className="text-7xl font-bold uppercase px-10">Skills</span>
          <span className="text-7xl font-bold uppercase px-10">&#x2022;</span>
          <span className="text-7xl font-bold uppercase px-10">Skills</span>
          <span className="text-7xl font-bold uppercase px-10">&#x2022;</span>
          <span className="text-7xl font-bold uppercase px-10">Skills</span>
          <span className="text-7xl font-bold uppercase px-10">&#x2022;</span>
          <span className="text-7xl font-bold uppercase px-10">Skills</span>
          <span className="text-7xl font-bold uppercase px-10">&#x2022;</span>
        </Marquee>
      </div>
      <div className="grid grid-cols-4 gap-x-10 gap-y-4 px-10 pt-10 max-lg:grid-cols-2 max-lg:gap-y-8 max-md:grid-cols-1">
        <SkillCard imageSrc={reacticon} title="React Js" description="" />
        <SkillCard imageSrc={nodeicon} title="Node JS" description="" />
        <SkillCard imageSrc={expressicon} title="Express JS" />
        <SkillCard imageSrc={mongodbicon} title="Mongo DB" />
        <SkillCard imageSrc={htmlicon} title="HTML" />
        <SkillCard imageSrc={cssicon} title="CSS" />
        <SkillCard imageSrc={bootstrapicon} title="Bootstrap" />
        <SkillCard imageSrc={javascripticon} title="JavaScript JS" />
        <SkillCard imageSrc={sqlicon} title="SQL" />
        <SkillCard imageSrc={giticon} title="Git" />
        <SkillCard imageSrc={figmaicon} title="Figma" />
        {/* <SkillCard icon={<FaReact size={80} />} title={"React"} /> */}
      </div>
    </div>
  )
}
