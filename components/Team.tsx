import React from "react";
import type { TeamMember } from "../types";

const teamData: TeamMember[] = [
  {
    id: 1,
    name: "XUAN ANH",
    role: "FOUNDER",
    imageUrl:
      "https://studiocenter.vnwordpress.net/wp-content/uploads/2020/08/13170753-1-local-call-studio_article_773x885.jpg",
  },
  {
    id: 2,
    name: "TU LE",
    role: "PLANNER",
    imageUrl:
      "https://studiocenter.vnwordpress.net/wp-content/uploads/2020/08/13170753-1-local-call-studio_article_773x885.jpg",
  },
  {
    id: 3,
    name: "PHUNG NGUYEN",
    role: "PLANNER",
    imageUrl:
      "https://studiocenter.vnwordpress.net/wp-content/uploads/2020/08/13170753-1-local-call-studio_article_773x885.jpg",
  },
];

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
  <div className="text-center group">
    <div className="bg-white p-2 border border-gray-200 rounded-lg shadow-sm group-hover:shadow-lg transition-shadow duration-300">
      <img
        src={member.imageUrl}
        alt={member.name}
        className="w-full h-auto object-contain"
      />
    </div>
    <h3 className="mt-4 text-gray-800 font-bold text-lg tracking-wider">
      {member.name}
    </h3>
    <p className="text-gray-500 text-sm">{member.role}</p>
  </div>
);

const Team: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#f9f5f0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-script text-6xl brand-red">Đội ngũ</h2>
          <h3 className="text-4xl font-bold text-gray-800 mt-1">
            Của chúng tôi
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {teamData.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
