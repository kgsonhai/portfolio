import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  ZaloLogo,
} from "../utils/Icons";

const socialMedias = [
  {
    id: 1,
    Icon: (
      <LinkedinLogo className="text-white p-2" width="60px" height="60px" />
    ),
    title: "Hai.Son.Nguyen",
    link: "https://www.linkedin.com/in/hai-son-nguyen-981459150/",
  },
  {
    id: 1,
    Icon: (
      <InstagramLogo className="text-white p-2" width="60px" height="60px" />
    ),
    title: "cbv3110",
    link: "https://www.instagram.com/cbv3110/",
  },
  {
    id: 1,
    Icon: (
      <FacebookLogo className="text-white p-2" width="60px" height="60px" />
    ),
    title: "Hai.Son",
    link: "https://www.facebook.com/nshai3110/",
  },
  {
    id: 1,
    Icon: <ZaloLogo className="text-white p-2" width="60px" height="60px" />,
    title: "Hai Nguyen Son",
    link: "#",
  },
];

const Info = ({ title, children }) => {
  return (
    <div className="flex flex-col items-center shadow-social hover:animate-pulse">
      <div>{children}</div>
    </div>
  );
};

export default function ListSocial() {
  const handleNavigatePage = (social) => {
    if (social.link) {
      window.open(social.link, "_blank");
    }
  };
  return (
    <ul className="flex flex-row flex-wrap items-center justify-center">
      {socialMedias.map((social) => (
        <li
          key={social.id}
          className={`
            cursor-pointer 
            mr-20`}
          onClick={() => handleNavigatePage(social)}
        >
          <Info title={social.title}>{social.Icon}</Info>
        </li>
      ))}
    </ul>
  );
}
