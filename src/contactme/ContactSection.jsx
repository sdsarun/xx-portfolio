import { useState } from "react";
import { useSectionRef } from "../shared/sectionRefContext"
import { SendEmail } from "../utils/emailjs";

export default function ContactSection() {
  const { contactRef } = useSectionRef();

  const [guessName, setGuessName] = useState("")
  const [guessEmail, setGuessEmail] = useState("");
  const [guessMessage, setGuessMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log(guessName, guessEmail, guessMessage);
    SendEmail.send(guessName, guessEmail, guessMessage);

    setGuessName("");
    setGuessEmail("");
    setGuessMessage("");
  }

  // ========================================================

  const title = "Let's Talk"
  const description = "If you would like to work with me or just want to get in touch, I'd love to hear from you!";
  const yourEmail = "email@example.com";

  // ทำแบบเดียวกับหน้า ProjectSection
  const custom = {
    sectionTitleColor: "",
    sectionDescriptionColor: "",
    sectionDescriptionText: "",
    sectionEmailText: "",
    backgroundColor: "",
    yourNameColor: "",
    yourEmailColor:"",
    yourMessageColor:"",
    buttonBackgroundColor:"",
    backgroundTextColor:""
  }

  // ========================================================

  return (
    <div className={`grid grid-cols-12 p-10 max-lg:grid-cols-1 ${custom.backgroundColor ? custom.backgroundColor : "bg-black"}`} ref={contactRef}>

      {/* Left text */}
      <div className="col-span-6 text-white">
        <div>
          <h1 className={`text-7xl uppercase font-bold pb-4 ${custom.sectionTitleColor ? custom.sectionTitleColor : ""}`}>{title}</h1>
        </div>
        <div className="text-xl w-9/12 flex flex-col gap-y-4">
          <h1>{description}</h1>
          <p>{yourEmail}</p>
        </div>
      </div>

      {/* Right Form */}
      <div className="col-span-6 text-xl flex flex-col gap-y-4 max-md:pt-16">
        <form onSubmit={handleSubmit}>
          <div>
            <h1 className="text-xl text-white font-medium pb-2">Your Name</h1>
          </div>
          <div>
            <input className="w-full p-2 rounded-sm outline-black" type="text" value={guessName} placeholder="What's your good name?" onChange={(e) => setGuessName(e.target.value)} />
          </div>
          <div>
            <h1 className="text-xl text-white font-medium py-2">Your email</h1>
          </div>
          <div>
            <input className="w-full p-2 rounded-sm outline-black" type="email" value={guessEmail} placeholder="What's your email address?" onChange={(e) => setGuessEmail(e.target.value.trim())} />
          </div>
          <div>
            <h1 className="text-xl text-white font-medium py-2">Your Message</h1>
          </div>
          <div>
            <textarea className="w-full p-2 rounded-sm outline-black resize-none h-52" value={guessMessage} placeholder="What you want to say to me?" onChange={(e) => setGuessMessage(e.target.value.trim())} />
          </div>
          <div>
            <button className="text-xl bg-white px-8 py-2 rounded-md font-medium">Send</button>
          </div>
        </form>

      </div>
    </div>
  )
}