import React from "react";
import SectionTitle from "./SectionTitle";
import SkillsCard from "./SkillsCard";
import { skills } from "../data";

const Skills = () => {
  return (
    <section className="py-20 mx-auto max-w-7xl px-8 py-4 " id="skills">
      <SectionTitle text="technologies" />
      <div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-3">
        {skills.map((skill) => {
          return <SkillsCard key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
};

export default Skills;
