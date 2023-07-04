// import profileImage from "../assets/pic1.jpg"
import { useSectionRef } from "../shared/sectionRefContext"

function AboutMeSection() {
  const { aboutRef } = useSectionRef();

  // ==============================================================================================================

  const title = "What is Lorem Ipsum?";
  const description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  const profileImage = "https://images.unsplash.com/photo-1547992087-e67e3944257e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80";
  const resumeLink = "https://google.com";

  // ==============================================================================================================

  return (
    <div className="pt-60 px-4"  >
      <div className="pt-20" ref={aboutRef}>
        <h1 className="uppercase max-lg:text-7xl max-lg:font-bold max-lg:pb-10 text-[50px] font-bold">About me</h1>
      </div>
      <div className="flex items-center gap-x-10 max-lg:flex-col-reverse">
        <div className="flex flex-col justify-center items-center w-1/2 max-lg:pt-10  max-lg:w-full">
          <div>
            <h1 className="text-2xl">{title}</h1>
            <p className="text-2xl pt-10 pb-20">{description}</p>
            <a className="cursor-auto" href={resumeLink} target="_blank">
              <button className="bg-black text-white px-4 py-2 rounded-sm transition-all hover:bg-slate-100 hover:text-black">
                RESUME
              </button>
            </a>
          </div>
        </div>
        <div className="w-1/2 shadow-xl max-lg:shadow-sm max-lg:w-full">

          {/* profile image */}
          <img className="block w-full rounded-xl shadow-xl" src={profileImage} />
        
        </div>
      </div>
    </div>
  )
}

export default AboutMeSection
