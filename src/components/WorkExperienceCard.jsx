import { VerticalTimelineElement } from "react-vertical-timeline-component";

export default function WorkExperienceCard({ experience }) {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#000",
        color: "#fff",
        borderRadius: "10px",
        boxShadow: "0px 2px 4px 1px black"
      }}
      contentArrowStyle={{ borderRight: "12px solid  #232631" }}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.companyName}
            className='bg-white p-1 border-black border-4 rounded-full'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.companyName}
        </p>
        <p>{experience.date}</p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white text-md pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}