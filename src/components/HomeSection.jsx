import { BsGithub } from "react-icons/bs"
import { ImLinkedin } from "react-icons/im"
import { BsFacebook } from "react-icons/bs"
import { SiInstagram } from "react-icons/si"
import { MdEmail } from "react-icons/md";
import TypewriterComponent from "typewriter-effect"
import { useSectionRef } from "../shared/sectionRefContext"

function HomeSection() {
  const { homeRef } = useSectionRef();

  // ========================================================================================================

  const yourName = "John Doe"
  const yourRole = "Software Developer"

  const socials = [
    {
      icon: <BsGithub className="text-5xl p-3 rounded-full border-2 border-gray-100" />,
      link: "https://github.com/"
    },
    {
      icon: <ImLinkedin className="text-5xl p-3 rounded-full border-2 border-gray-100" />,
      link: "https://www.linkedin.com/"
    },
    {
      icon: <MdEmail className="text-5xl p-3 rounded-full border-2 border-gray-100" />,
      link: "https://github.com/"
    }

    // #Add more social below same as above pattern.
  ]

  // ========================================================================================================

  return (
    <div ref={homeRef}>
      <div className="flex justify-between items-center pt-40 px-32">
        <div className="">
          <h3 className="text-gray-500">
            <TypewriterComponent
              onInit={(typewriter) => {
                typewriter.typeString('HI! All.')
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString('Welcome to my web portfolio.')
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString("Enjoy!")
                  .start()
              }}
            />
          </h3>
        </div>
        <div>
          <div>
            {/* <h1 className="">block mounse with dev soon.</h1> */}
          </div>
        </div>
      </div>
      <div className="font-extrabold flex flex-col items-center text-left tracking-wider pb-40">
        <div className="max-lg:px-10">
          <h1 className="max-lg:pb-10 max-sm:text-5xl max-sm:text-center max-sm:pt-20 text-8xl">{yourName}</h1>
          <h1 className="max-lg:pb-10 max-sm:text-2xl max-sm:text-center max-lg:text-5xl text-7xl" >{yourRole}</h1>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex items-center gap-x-1">
            {socials.map(social => {
              return (
                <a href={social.link} key={crypto.randomUUID()} target="_blank">
                  {social.icon}
                </a>
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default HomeSection;