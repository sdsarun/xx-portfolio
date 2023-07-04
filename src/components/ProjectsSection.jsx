import Marquee from "react-fast-marquee";
import ProjectCard from "./ProjectCard";
import { useSectionRef } from "../shared/sectionRefContext";
import justfitproject from "../assets/justfitproject.png";

export default function ProjectsSection() {
  const { projectsRef } = useSectionRef();

  // =================================================================================================================

  // ***********************************************************
  // เอาคอมเม้นออกถ้าอยากจะปรับส่วนนั้น,​ ถ้าไม่ใส่่มันจะใช้ค่าเริ่มต้นที่ผมตั้งค่าไว้
  // รูป github, demo ขนาดค่าเริ่มต้น: 44px
  // ***********************************************************


  // วิธีกำหนดขนาดตัวหนังสือ text-[จำนวน px] เช่น ตัวหนังสือขนาด 100px ให้ใส่ text-[100px]
  // วิธีกำหนดสีพื้นหลัง bg-[#รหัสสี] เช่น สีแดง bg[#B22222]

  const projectsList = [
    {
      title: "Lorem ipsum began as scrambled",
      titleColor: "text-[#000]",
      description: "Don't bother typing 'lorem ipsum' into Google translate. If you already tried, you may have gotten anything from 'NATO' to 'China', depending on how you capitalized the letters. The bizarre translation was fodder for conspiracy theories, but Google has since updated its “lorem ipsum” translation to, boringly enough, “lorem ipsum”.",
      descriptionColor: "text-[#000]",

      projectImage: "https://plus.unsplash.com/premium_photo-1669825050503-85ca05eebfc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80",
      // githubLink: "https://github.com/eakkarunpoom/justfit-D2/",
      // demoLink: "https://justfit-d2-sbg9.vercel.app/",

      // reverseContent เป็นค่า true, false ค่าเริ่มต้นคือ false โดยมันจะแสดงตัวหนังสืออยู่ซ้าย ภาพอยู่ซ้าย
      reverseContent: false,

      backgroundColor: "bg-[#fff]",


      // TextColor = กำหนดสีของข้อความที่แสดงทั้งหมดในกล่อง จะเป็นสีเดียวกันหมด
      textColor: "text-[#000]",

      demoIconSize: 44,
      githubIconSize: 44,

      // ถ้าอยากได้ปกภาพเป็นขาวดำให้ตั้งเป็น true
      isBlackWhiteImage: false,
    },

    // project ต่อ ๆ ไปก็ทำแบบเดิม
    {
      title: "Lorem ipsum began as scrambled",
      titleColor: "text-[#000]",
      description: "Don't bother typing 'lorem ipsum' into Google translate. If you already tried, you may have gotten anything from 'NATO' to 'China', depending on how you capitalized the letters. The bizarre translation was fodder for conspiracy theories, but Google has since updated its “lorem ipsum” translation to, boringly enough, “lorem ipsum” Don't bother typing 'lorem ipsum' into Google translate. If you already tried, you may have gotten anything from 'NATO' to 'China', depending on how you capitalized the letters. The bizarre translation was fodder for conspiracy theories, but Google has since updated its “lorem ipsum” translation to, boringly enough, “lorem ipsum” ",
      descriptionColor: "text-[#000]",

      projectImage: "https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      // githubLink: "https://github.com/eakkarunpoom/justfit-D2/",
      // demoLink: "https://justfit-d2-sbg9.vercel.app/",

      // reverseContent เป็นค่า true, false ค่าเริ่มต้นคือ false โดยมันจะแสดงตัวหนังสืออยู่ซ้าย ภาพอยู่ซ้าย
      reverseContent: true,

      backgroundColor: "bg-[#fff]",

      // TextColor = กำหนดสีของข้อความที่แสดงทั้งหมดในกล่อง จะเป็นสีเดียวกันหมด
      textColor: "text-[#000]",

      demoIconSize: 44,
      githubIconSize: 44,

      // ถ้าอยากได้ปกภาพเป็นขาวดำให้ตั้งเป็น true
      isBlackWhiteImage: false,
    },
    {
      title: "Lorem ipsum began as scrambled",
      titleColor: "text-[#000]",
      description: "Don't bother typing 'lorem ipsum' into Google translate. If you already tried, you may have gotten anything from 'NATO' to 'China', depending on how you capitalized the letters. The bizarre translation was fodder for conspiracy theories, but Google has since updated its “lorem ipsum” translation to, boringly enough, “lorem ipsum” Don't bother typing 'lorem ipsum' into Google translate. If you already tried, you may have gotten anything from 'NATO' to 'China', depending on how you capitalized the letters. The bizarre translation was fodder for conspiracy theories, but Google has since updated its “lorem ipsum” translation to, boringly enough, “lorem ipsum” ",
      descriptionColor: "text-[#000]",

      projectImage: "https://images.unsplash.com/photo-1605772575717-4548a90a5349?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
      // githubLink: "https://github.com/eakkarunpoom/justfit-D2/",
      // demoLink: "https://justfit-d2-sbg9.vercel.app/",

      // reverseContent เป็นค่า true, false ค่าเริ่มต้นคือ false โดยมันจะแสดงตัวหนังสืออยู่ซ้าย ภาพอยู่ซ้าย
      reverseContent: false,

      backgroundColor: "bg-[#fff]",

      // TextColor = กำหนดสีของข้อความที่แสดงทั้งหมดในกล่อง จะเป็นสีเดียวกันหมด
      textColor: "text-[#000]",

      demoIconSize: 44,
      githubIconSize: 44,

      // ถ้าอยากได้ปกภาพเป็นขาวดำให้ตั้งเป็น true
      isBlackWhiteImage: false,
    },
  ]
  // =================================================================================================================

  return (
    <div className="pt-40" ref={projectsRef}>
      <div>
        <Marquee className="py-4">
          <span className="text-7xl font-bold uppercase px-10">Projects</span>
          <span className="text-7xl font-bold uppercase px-10">&#x2022;</span>
          <span className="text-7xl font-bold uppercase px-10">Projects</span>
          <span className="text-7xl font-bold uppercase px-10">&#x2022;</span>
          <span className="text-7xl font-bold uppercase px-10">Projects</span>
          <span className="text-7xl font-bold uppercase px-10">&#x2022;</span>
          <span className="text-7xl font-bold uppercase px-10">Projects</span>
          <span className="text-7xl font-bold uppercase px-10">&#x2022;</span>
        </Marquee>
      </div>
      <div className="pt-10">
        {projectsList.map((project) => {
          return (
            <ProjectCard

              key={crypto.randomUUID()}

              title={project.title}
              titleColor={project.titleColor}
              description={project.description}
              githubLink={project.githubLink}
              demoLink={project.demoLink}
              reverseContent={project.reverseContent}

              backgroundColor={project.backgroundColor}
              textColor={project.textColor}
              descriptionColor={project.descriptionColor}
              demoIconSize={project.demoIconSize}
              githubIconSize={project.githubIconSize}
              isBlackWhiteImage={project.isBlackWhiteImage}
              projectImage={project.projectImage}
            />)
        })}
      </div>
    </div>
  )
}