import { ThemeContext } from "pages/_app";
import { useContext } from "react";
import { AiFillGithub, AiFillMail } from "react-icons/ai";

export default function About() {
  const context = useContext(ThemeContext);

  return (
    <div
      className={
        context?.isThemeDark
          ? "h-screen p-4 text-light-background-1"
          : "h-screen p-4 text-dark-background-1"
      }
    >
      <div className="title text-4xl p-4 text-center lg:text-6xl md:font-extrabold lg:p-10">
        {" "}
        About Me
      </div>
      <div className=" flex justify-between flex-col-reverse lg:flex-row  mb-10">
        <div className="text-base">
          <h2 className="text-3xl my-2">Who am I?</h2>
          <p className="">
            I am a software engineer with four years of professional experience.
            I have a strong background in computer science. I am skilled in a
            variety of programming languages like JavaScript/TypeScript, Python,
            Java, and Rust and have an experience in working with both front-end
            and back-end techologies and I am skilled in using frameworks and
            like ReactJS, NextJS, NestJS, GraphQL, etc.
          </p>
          <br />
          <p>
            As a software engineer, I have experience working on Oracle Apex
            applications and collaborating with cross-functional teams to
            understand and meet the needs of the business. In my current role, I
            am responsible for developing and maintaining timesheet management
            applications for approximately 500 users. I am skilled in using
            Oracle Apex to create and maintain these applications, and am
            committed to delivering high-quality software solutions to meet the
            needs of our users.
          </p>
          <br />
          <p>
            You can have a look at some of my side projects on my{" "}
            <a
              href="https://github.com/praaatik"
              className="underline"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            page.
          </p>
          <br />

          <h2 className="text-3xl my-2">Why have I created this site?</h2>
          <p>
            As someone who is constantly learning new things, I often take notes
            in markdown format. However, organizing and accessing these files
            became difficult, so I decided to store them online in a way that
            would be easily accessible to me and potentially useful to others.
            To make the notes more presentable, I formatted them in a way that
            is easy to read and navigate. My goal is to make these notes as
            accessible and helpful as possible for anyone who may stumble upon
            them.
          </p>
        </div>
        <div className="profile-image h-1/2 w-1/2 sm:h-full sm:w-full lg:m-0 m-auto mb-5 justify-center flex">
          <img
            src="https://raw.githubusercontent.com/praaatik/me/main/public/images/profile_blob_2.png"
            alt="profile"
          />
        </div>
      </div>
      <div className=" w-full h-20 flex justify-evenly items-center lg:w-1/3 lg:justify-start lg:gap-10">
        <a href="https://github.com/praaatik" target="_blank" rel="noreferrer">
          <AiFillGithub size={40} />
        </a>
        <a href="mailto:praaatik.kulkarni@proton.me">
          <AiFillMail size={40} />
        </a>
      </div>
    </div>
  );
}
