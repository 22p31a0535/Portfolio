


import React from "react";
import {
  FaExternalLinkAlt,
  FaMedal,
  FaCode,
  FaGithub,
  FaCertificate,
  FaGraduationCap,
} from "react-icons/fa";
import {
  SiLeetcode,
  SiHackerrank,
  SiCoursera,
  SiUdemy,
  SiCodingninjas,
  SiCodechef,
  SiGeeksforgeeks,
} from "react-icons/si";

const codingProfiles = [
  {
    title: "LeetCode",
    description: "Solved 100+ problems focused on algorithms and data structures.",
    link: "https://leetcode.com/u/AmruthaTummala/",
    icon: <SiLeetcode className="text-yellow-400 text-2xl" />,
  },
  {
    title: "HackerRank",
    description: "5★ in Python, 3★ in C++ & Problem Solving, 2★ in Java.",
    link: "https://www.hackerrank.com/profile/22P31A0535",
    icon: <SiHackerrank className="text-green-600 text-2xl" />,
  },
  {
    title: "GeeksforGeeks",
    description: "Solved 50+ problems in arrays, strings, and core DSA topics.",
    link: "https://www.geeksforgeeks.org/user/amruthatutqdt/",
    icon: <SiGeeksforgeeks className="text-green-500 text-2xl" />,
  },
];

const certifications = [
  {
    title: "IT Specialist in HTML & CSS",
    provider: "Certiport",
    link: "https://drive.google.com/file/d/1YwO3H8mS4K-uaxDWoqeKjXIa22aDOed0/view?usp=sharing",
    icon: (
      <div className="bg-yellow-400 p-2 rounded-full">
        <FaGraduationCap className="text-black text-xl" />
      </div>
    ),
  },
  {
    title: "IT Specialist in Python",
    provider: "Certiport",
    link: "https://drive.google.com/file/d/1eb1FEJe1-loVKp90NmDrZveXE5PfcW3C/view?usp=sharing",
    icon: (
      <div className="bg-yellow-400 p-2 rounded-full">
        <FaGraduationCap className="text-black text-xl" />
      </div>
    ),
  },
  {
    title: "Cisco Certified in C Programming",
    provider: "Cisco",
    link: "https://drive.google.com/file/d/1q5lAV0iz2RtcxConzmxWojTA_1oVIPW5/view?usp=sharing",
    icon: (
      <div className="bg-yellow-400 p-2 rounded-full">
        <FaGraduationCap className="text-black text-xl" />
      </div>
    ),
  },
  {
    title: "Cisco Certified in Python",
    provider: "Cisco",
    link: "https://drive.google.com/file/d/10-gTmWPJXloTiCSPvJFeAjTA3mqWnEGQ/view?usp=sharing",
    icon: (
      <div className="bg-yellow-400 p-2 rounded-full">
        <FaGraduationCap className="text-black text-xl" />
      </div>
    ),
  },
];

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-[#0c0c1d]"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">ACHIEVEMENTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Coding profiles and certifications that reflect my learning journey
        </p>
      </div>

      {/* Coding Profiles */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-purple-400 mb-2 flex items-center gap-2">
          <FaCode /> Coding Profiles
        </h3>
        <p className="text-gray-300 mb-6">
          I regularly practice coding to enhance problem-solving skills and participate in challenges.
        </p>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
          {codingProfiles.map((profile, index) => {
            const isLastOdd =
              codingProfiles.length % 2 !== 0 &&
              index === codingProfiles.length - 1;
            return (
              <div
                key={index}
                className={`bg-gray-900 border border-purple-500 rounded-2xl p-6 shadow-md w-full max-w-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-purple-500/50 ${
                  isLastOdd ? "sm:col-span-2 sm:mx-auto" : ""
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  {profile.icon}
                  <h4 className="text-white text-xl font-semibold">
                    {profile.title}
                  </h4>
                </div>
                <p className="text-gray-400 mb-4">{profile.description}</p>
                <a
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-200 flex items-center gap-2 text-sm"
                >
                  View Profile <FaExternalLinkAlt />
                </a>
              </div>
            );
          })}
        </div>
      </div>

      {/* Certifications */}
      <div>
        <h3 className="text-2xl font-bold text-purple-400 mb-6 flex items-center gap-2">
          <FaMedal /> Certifications
        </h3>
        <p className="text-gray-300 mb-6">
          Certifications that validate my expertise in core programming languages and web development technologies.
        </p>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
          {certifications.map((cert, index) => {
            const isLastOdd =
              certifications.length % 2 !== 0 &&
              index === certifications.length - 1;
            return (
              <div
                key={index}
                className={`bg-gray-900 border border-purple-500 rounded-2xl p-6 shadow-md w-full max-w-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-purple-500/50 ${
                  isLastOdd ? "sm:col-span-2 sm:mx-auto" : ""
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  {cert.icon}
                  <h4 className="text-white text-lg font-semibold">{cert.title}</h4>
                </div>
                <p className="text-gray-400 text-sm mb-3">
                  Issued by{" "}
                  <span className="text-purple-300">{cert.provider}</span>
                </p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-200 flex items-center gap-2 text-sm"
                >
                  View Certificate <FaExternalLinkAlt />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
