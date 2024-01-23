/* eslint-disable react/prop-types */
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { download, downloadHover, resume } from "../assets";
import { useEffect } from "react";
import { client } from "../api/client";
import { useState } from "react";
import { icon, projectImages } from "../constants";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#eaeaec",
      color: "#292929",
      boxShadow:
        "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    }}
    contentArrowStyle={{
      borderRight: "7px solid  #232631",
    }}
    date={
      <div>
        <h3 className="text-dim text-[18px] font-bold font-beckman">
          {experience.date}
        </h3>
      </div>
    }
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-jetLight text-[24px] font-bold font-beckman tracking-[2px]">
        {experience.title}
      </h3>
      <p
        className="text-taupe text-[22px] font-semibold font-overcameBold tracking-[1px]"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>

      {experience.projects && experience.projects.length > 0 && (
        <div className="mt-7">
          <ul className="list-disc pl-6">
            {experience.projects.map((project, index) => (
              <li
                key={index}
                className="text-taupe text-[18px] mb-10 text-black"
              >
                <div className="font-bold">{project.name}</div>
                <div className="font-sm">{project.description}</div>
                <div className="flex justify-center my-2">
                  <img
                    className="object-cover"
                    src={project?.img}
                    alt={project.name}
                    style={{ height: "150px", width: "300px" }}
                  />
                </div>
                <div className="mt-2 ml-10">
                  <strong>Role:</strong> {project.role}
                </div>
                <div>
                  <strong>Team size:</strong> {project.teamSize}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </VerticalTimelineElement>
);

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const handleDownloadMyCV = () => {
    alert("Please contact me if you interested in my CV");
  };

  const fetchExperiences = async () => {
    try {
      const result = await client.get("/experiences");
      const updatedResult = result.map((item, index) => {
        const updatedItem = { ...item, icon: icon[index] };

        if (updatedItem.projects) {
          updatedItem.projects = updatedItem.projects.map((project, i) => ({
            ...project,
            img: projectImages?.[index]?.[i],
          }));
        }

        return updatedItem;
      });
      setExperiences(updatedResult);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchExperiences();
  }, []);

  return (
    <div id="experiences">
      <motion.div>
        <p className={`${styles.sectionSubText} sm:pl-16 pl-[2rem]`}>
          What I've done so far
        </p>
        <h2 className={`${styles.sectionHeadText} sm:pl-16 pl-[2rem]`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline className="vertical-timeline-custom-line">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
          <VerticalTimelineElement
            contentStyle={{
              background: "#eaeaec",
              color: "#292929",
              boxShadow:
                "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  #232631",
            }}
            iconStyle={{ background: "#333333" }}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src={resume}
                  alt="resume"
                  className="w-[45%] h-[45%] object-contain"
                />
              </div>
            }
          >
            <button
              className="live-demo flex justify-between 
              sm:text-[18px] text-[14px] text-timberWolf 
              font-bold font-beckman items-center py-5 pl-3 pr-3 
              whitespace-nowrap gap-1 sm:w-[148px] sm:h-[58px] 
              w-[125px] h-[46px] rounded-[10px] bg-jetLight 
              sm:mt-[22px] mt-[16px] hover:bg-battleGray 
              hover:text-eerieBlack transition duration-[0.2s] 
              ease-in-out"
              onClick={() => handleDownloadMyCV()}
              onMouseOver={() => {
                document
                  .querySelector(".download-btn")
                  .setAttribute("src", downloadHover);
              }}
              onMouseOut={() => {
                document
                  .querySelector(".download-btn")
                  .setAttribute("src", download);
              }}
            >
              MY RESUME
              <img
                src={download}
                alt="download"
                className="download-btn sm:w-[26px] sm:h-[26px] 
                w-[23px] h-[23px] object-contain"
              />
            </button>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");
