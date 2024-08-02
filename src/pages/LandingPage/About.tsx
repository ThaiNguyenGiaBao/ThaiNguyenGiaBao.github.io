import React from "react";
import styles from "./LandingPage.module.scss";
import HeaderOfSection from "./HeaderOfSection";
import { PersonalInfo } from "../../data/personal_info";

const StudySubsection: React.FC<StudySubsectionProps> = ({
  year,
  school,
  address,
  occupation,
}) => (
  <div className="my-4">
    <p className="text-sm text-blue-300 dark:text-cyan-400">
      {year.start} - {year.end}
    </p>
    <p className="flex justify-between">
      <span className="mr-8 font-bold">{school}</span>
      <span className="italic text-blue-300 dark:text-cyan-400">{address}</span>
    </p>
    <p className="text-gray-400">{occupation}</p>
  </div>
);

const Subsection: React.FC<SubsectionProps> = ({ children }) => {
  return <section className="w-full lg:w-1/2">{children}</section>;
};

const AboutSection = () => {
  return (
    <div
      id="about"
      className="border-blue-500 border-t border-dashed pt-4 flex justify-center w-full dark:border-cyan-200"
    >
      <section className="w-4/5 flex flex-col justify-center items-center gap-3">
        <HeaderOfSection
          title="About Me"
          icons={"🧑🏼‍💻"}
          // link={PersonalInfo.links.LinkedIn.link}
          // linkText={"View LinkedIn"}
        />
        <div className="flex flex-col w-full gap-6">
          <div className="w-full ">
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Eager to learn everything in the vast field of computer science!
              </li>
              <li>
                Passionate about building innovative Web applications and
                exploring the Computer vision field
              </li>
              <li>
                Strengths:
                <ul className="list-disc pl-5">
                  <li>
                    Have a solid foundation in theoretical knowledge in Computer
                    Science
                  </li>
                  <li>
                    Proficient in calculus (especially in integral) and physics
                  </li>
                </ul>
              </li>
              <li>
                Fun Fact: I deeply appreciate art and enjoy playing table tenis
              </li>
            </ul>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default AboutSection;

type StudySubsectionProps = {
  year: {
    start: string;
    end: string;
  };
  school: string;
  address?: string;
  occupation?: string;
};

type SubsectionProps = {
  children: React.ReactNode;
};
