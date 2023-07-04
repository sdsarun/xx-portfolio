import { VerticalTimeline } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import WorkExperienceCard from "./WorkExperienceCard";
import Marquee from "react-fast-marquee";
import { useSectionRef } from "../shared/sectionRefContext";


export default function WorkExperienceSection() {
  const experiences = [
    {
      title: "Accountant (Part-time)",
      companyName: "Lorem Ltd., Part.",
      icon: "https://cdn-icons-png.flaticon.com/128/1024/1024914.png",
      iconBg: "#383E56",
      date: "Jun 2022 - Jul 2022",
      points: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nam hendrerit nisi sed sollicitudin pellentesque.Nunc posuere purus rhoncus pulvinar aliquam.Ut aliquet tristique nisl vitae volutpat.Nulla aliquet porttitor venenatis.Donec a dui et dui fringilla consectetur id nec massa.Aliquam erat volutpat.Sed ut dui ut lacus dictum fermentum vel tincidunt neque.Sed sed lacinia lectus.Duis sit amet sodales felis.Duis nunc eros, mattis at dui ac, convallis semper risus.In adipiscing ultrices tellus, in suscipit massa vehicula eu."
      ],
    },
    {
      title: "Barista",
      companyName: "Lorem ispsum co.",
      icon: "https://cdn-icons-png.flaticon.com/128/751/751621.png",
      iconBg: "#383E56",
      date: "Aug 2022 - Jan 2023",
      points: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nam hendrerit nisi sed sollicitudin pellentesque.Nunc posuere purus rhoncus pulvinar aliquam.Ut aliquet tristique nisl vitae volutpat.Nulla aliquet porttitor venenatis.Donec a dui et dui fringilla consectetur id nec massa.Aliquam erat volutpat.Sed ut dui ut lacus dictum fermentum vel tincidunt neque.Sed sed lacinia lectus.Duis sit amet sodales felis.Duis nunc eros, mattis at dui ac, convallis semper risus.In adipiscing ultrices tellus, in suscipit massa vehicula eu."
      ],
    },
    {
      title: "Co-Founder",
      companyName: "Lorem ispsum co.",
      icon: "https://cdn-icons-png.flaticon.com/128/7596/7596530.png",
      iconBg: "#383E56",
      date: "Dec 2021 - present",
      points: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nam hendrerit nisi sed sollicitudin pellentesque.Nunc posuere purus rhoncus pulvinar aliquam.Ut aliquet tristique nisl vitae volutpat.Nulla aliquet porttitor venenatis.Donec a dui et dui fringilla consectetur id nec massa.Aliquam erat volutpat.Sed ut dui ut lacus dictum fermentum vel tincidunt neque.Sed sed lacinia lectus.Duis sit amet sodales felis.Duis nunc eros, mattis at dui ac, convallis semper risus.In adipiscing ultrices tellus, in suscipit massa vehicula eu."
      ],
    },
  ]

  const { workRef } = useSectionRef();

  return (
    <div className="pt-40" ref={workRef}>
      <div className="h-full">
        <Marquee className="text-6xl py-4">
          <span className=" font-bold uppercase px-10">Work Experience</span>
          <span className=" font-bold uppercase px-10">&#x2022;</span>
          <span className=" font-bold uppercase px-10">Work Experience</span>
          <span className=" font-bold uppercase px-10">&#x2022;</span>
          <span className=" font-bold uppercase px-10">Work Experience</span>
          <span className=" font-bold uppercase px-10">&#x2022;</span>
          <span className=" font-bold uppercase px-10">Work Experience</span>
          <span className=" font-bold uppercase px-10">&#x2022;</span>
        </Marquee>
      </div>
      <div className='pt-20'>
        <VerticalTimeline lineColor="#000">
          {experiences.map((experience, index) => (
            <WorkExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  )
}