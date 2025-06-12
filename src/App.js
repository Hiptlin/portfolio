import React from "react";
import Section from "./Section.js";
import "./App.css";

const sections = [
  {
    id: "about",
    title: "Hi, I'm Hiptlin 👋",
    description:
      "I’m Jose Hipltin, a developer, AIML engineer, and data science engineer. I love to build new stuff and enjoy learning more about emerging technologies.",
    image: "./profile.jpg",
    theme: "theme-light",
  },
  {
    id: "project1",
    title: "NLP Chatbot using BERT",
    description:
      "We have built the prototype using the BERT NLP model. It’s currently not deployed but the model is fully functional and tested.",
    tags: ["BERT", "NLP", "Prototype"],
    image: "./project1.jpeg",
    theme: "theme-blue",
    isProject: true,
    link: "https://bert-chatbot-demo.com",
  },
  {
    id: "project2",
    title: "Multipurpose AI Robot for Agriculture",
    description:
      "A working prototype of a multi-purpose AI-based tractor designed to assist in agriculture tasks such as navigation, monitoring, and automation.",
    tags: ["AI", "Robotics", "Agritech"],
    image: "./project2.png",
    theme: "theme-green",
    isProject: true,
    link: "https://ai-agri-robot.com",
  },
  {
    id: "project3",
    title: "AI-Powered Paper-Correcting Robot",
    description:
      "A robot that uses computer vision to scan and assess written documents using advanced grading algorithms.",
    tags: ["Computer Vision", "Grading", "Hardware"],
    image: "./project3.jpeg",
    theme: "theme-orange",
    isProject: true,
    link: "https://paper-grading-ai.com",
  },
  {
    id: "project4",
    title: "Smart Parking System",
    description:
      "An AI-powered IoT parking system integrated with vendor connections for all parking areas and real-time space detection.",
    tags: ["IoT", "AI", "Parking", "Vendors"],
    image: "./project4.jpeg",
    theme: "theme-purple",
    isProject: true,
    link: "https://smart-parking.io",
  },
  {
    id: "startup",
    title: "Tetrax AI Labs",
    description:
      'Think it. Build it. Scale it."\n\nTetrax AI Labs is a product-based company focused on developing innovative solutions across industries. We pitch fresh ideas, develop cutting-edge products, and are always ready to take on challenges to revolutionize the future.',
    tags: ["Startup", "Innovation", "AI"],
    image: "./startup.jpg",
    theme: "theme-grey",
    link: "https://tetrax-ai-labs.com",
  },
  {
    id: "contact",
    title: "Let's Connect 🤝",
    description:
      "Reach out for collaborations, freelance AI projects, or just to say hi! I’m open to opportunities.",
    image: "./contact.jpg",
    theme: "theme-dark",
    isFinal: true,
    buttons: [
      { label: "Email Me", link: "mailto:hiptlinj13@gmail.com" },
      { label: "veiw Resume", link: "/hipt_resume.pdf", download: true },
      { label: "LinkedIn", link: "https://www.linkedin.com/in/jose-hiptlin-628904268/" },
    ],
  },
];

function App() {
  return (
    <>
      <nav className="dot-navigation">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="dot"
            aria-label={section.title}
          />
        ))}
      </nav>

      <header className="sticky-header">Welcome to My Portfolio</header>

      {sections.map((sectionProps) => (
        <Section key={sectionProps.id} {...sectionProps} />
      ))}

      <footer className="sticky-footer">© 2025 Hiptlin | All Rights Reserved</footer>
    </>
  );
}

export default App;
