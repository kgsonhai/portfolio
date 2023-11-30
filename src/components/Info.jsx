import { useState } from "react";
import { IconGithub, IconLocation, IconMail, IconPhone } from "../utils/Icons";

const socialMedias = [
  {
    id: 1,
    Icon: (
      <IconLocation className="text-black p-2" width="40px" height="40px" />
    ),
    title: "73 Nguyen Tao, Ngu Hanh Son District, Da Nang city",
  },
  {
    id: 2,
    Icon: <IconPhone className="text-black p-2" width="40px" height="40px" />,
    title: "+84 912 71 72 07",
  },
  {
    id: 3,
    Icon: <IconMail className="text-black p-2" width="40px" height="40px" />,
    title: "kgsonhai@gmail.com",
  },
  {
    id: 4,
    Icon: <IconGithub className="text-black p-2" width="40px" height="40px" />,
    title: "@Eric.Nguyen",
    link: "#",
  },
];

const Info = ({ title, children }) => {
  return (
    <>
      {children}
      <span
        className="
      font-beckman
      text-black 
      pointer-events-none 
      absolute 
      top-1/4 right-0 ml-5 left-full 
      w-max opacity-0 transition-opacity group-hover:opacity-100
      ease-in-out
      duration-700	
      animate-slide	
      "
      >
        {title}
      </span>
    </>
  );
};

export default function ListInfo() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseOver = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <ul className="flex flex-row flex-wrap items-center">
      {socialMedias.map((social) => (
        <li
          key={social.id}
          className={`
          cursor-pointer 
          hover:border-2 hover:rounded-full hover:shadow-icon 
          group relative w-max mr-20`}
          style={{
            visibility:
              hoveredIndex !== null && hoveredIndex !== social.id && "hidden",
          }}
          onMouseOver={() => handleMouseOver(social.id)}
          onMouseLeave={handleMouseLeave}
          onClick={() => {
            if (social?.link) {
              window.open("https://github.com/kgsonhai", "_blank");
            }
          }}
        >
          <Info title={social.title}>{social.Icon}</Info>
        </li>
      ))}
    </ul>
  );
}
