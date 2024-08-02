import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export const PersonalInfo: PersonalInfoType = {
  name: "Thai Nguyen Gia Bao",
  links: {
    Facebook: {
      icon: faFacebook,
      text: "Facebook: Thái Nguyễn Gia Bảo",
      link: "https://www.facebook.com/bao.thainguyengia",
      color: "text-blue-500",
    },
    Email: {
      icon: faEnvelope,
      text: `Mail: bao.thainguyenkhmt@hcmut.edu.vn`,
      link: `mailto:bao.thainguyenkhmt@hcmut.edu.vn`,
      email: "bao.thainguyenkhmt@hcmut.edu.vn",
      color: "text-red-300",
    },
    GitHub: {
      icon: faGithubAlt,
      text: "GitHub: github.com/ThaiNguyenGiaBao",
      link: "https://github.com/ThaiNguyenGiaBao",
      color: "text-black dark:text-slate-200",
    },
    
  },
  schools: [
    {
      year: { start: "2022", end: "current" },
      school: "HCMUT",
      address: "HCMC, Vietnam",
      occupation: "Undergraduate Student",
    },
    {
      year: { start: "2019", end: "2022" },
      school: "Ngo Quyen High School",
      address: "Dong Nai, Vietnam",
      occupation: "High School Student",
    },
  ],
};

type PersonalLink = {
  icon?: IconProp;
  text?: string;
  link?: string;
  color?: string;
  email?: string;
};

type SchoolType = {
  year: {
    start: string;
    end: string | "current";
  };
  school: string;
  address?: string;
  occupation?: string;
};

type PersonalInfoType = {
  name: string;
  links: {
    [key: string]: PersonalLink;
  };
  schools: SchoolType[];
};
