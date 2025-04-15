import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const technicalSkills = [
    "React",
    "Javascript",
    "Python",
    "HTML/CSS",
    "Database",
    "SQL",
    "OOP's",
    "SDLC",
    "Tailwind Css",
    "Git/GitHub"
  ];

  const networkingSkills = ["Team Collaboration ", "Active Listening ", "Technical Writing" , "Client Communication" ,"Feedback Delivery"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
            "A skilled web developer with a passion for creating responsive, user-friendly websites, combined with strong interpersonal skills that help me collaborate effectively with teams and clients to deliver exceptional digital solutions."
             </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Technical</h3>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Networking</h3>
                <div className="flex flex-wrap gap-2">
                  {networkingSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> B.Tech in Computer Science </strong> - Parul University
                  (2019-2023)
                </li>
                <li>
                  Relevant Coursework: Web Development, Database, 
                  Machine Learning...
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Programmer Intern at UnoTeams Software Pvt Ltd (Jun 2023 - Feb 2024){" "}
                  </h4>
                  <p>
                  Developed a secure login ecosystem with React.js, implementing user authentication, Formik/Yup validation, localStorage sessions, and protected routes—enhancing front-end expertise while prioritizing UX and independent problem-solving.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Intern at Raise Digital (2020){" "}
                  </h4>
                  <p>
                  "Built an e-commerce website from scratch using HTML, CSS, and JavaScript, implementing responsive design and product displays for a seamless user experience."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
