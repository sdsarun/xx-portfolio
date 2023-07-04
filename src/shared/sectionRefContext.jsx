import { createContext, useContext, useRef } from "react";

const SectionRefContext = createContext(null);

export function useSectionRef() {
  return useContext(SectionRefContext);
}

export function SectionRefProvider({ children }) {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  function scrollToHome() {
    homeRef.current?.scrollIntoView({ behavior: 'smooth' });
    console.log("Move to home")
  }

  function scrollToAbout() {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    console.log("Move to about")
  }

  function scrollToProjects() {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
    console.log("Move to projects")
  }

  function scrollToWork() {
    workRef.current?.scrollIntoView({ behavior: 'smooth' });
    console.log("Move to work")
  }

  function scrollToContact() {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
    console.log("Move to contact")
  }

  const refs = {
    homeRef,
    aboutRef,
    workRef, 
    projectsRef,
    contactRef,
    scrollToHome,
    scrollToAbout,
    scrollToWork,
    scrollToContact,
    scrollToProjects,
  }

  return (
    <SectionRefContext.Provider value={refs}>
      {children}
    </SectionRefContext.Provider>
  )
}