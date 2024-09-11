import { motion } from "framer-motion";
import React from "react";

type SkillProps = {
  name: string;
};

const Skill: React.FC<SkillProps> = ({ name }) => {
  return (
    <motion.div
      className='flex items-center justify-center rounded-full font-semibold bg-gray-100 text-dark py-2 px-6 text-lg  cursor-pointer
      lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:text-dark xs:font-bold lg:p-6 md:p-4 xs:text-xs xs:p-2'
      whileHover={{ scale: 1.1 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const skillsData = [
  {
    category: "Languages:",
    skills: ["C++", "JavaScript", "TypeScript", "Python", "SQL", "HTML", "CSS"],
  },
  {
    category: "Frameworks & Libraries:",
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "Next.js",
      "Django",
      "TailwindCSS",
      "FastAPI",
      "Pandas",
      "Numpy",
      "scikit learn",
    ],
  },
  {
    category: "Tools & Platforms:",
    skills: ["Git", "Docker", "AWS", "Firebase", "REST APIs", "Postman"],
  },
  {
    category: "Database:",
    skills: ["PostgreSQL", "MongoDB"],
  },
];

const Skills: React.FC = () => {
  return (
    <section className='mt-32 py-16 px-8 bg-gradient-to-t from-gray-50 to-white rounded-2xl'>
      <div className='container mx-auto px-4'>
        <h2 className='text-7xl font-bold text-center mb-12'>
          Technical Skills
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {skillsData.map((category) => (
            <div
              key={category.category}
              className='bg-white p-6 shadow-sm border border-gray-100 rounded-2xl'
            >
              <h3 className='text-xl font-semibold mb-4 text-gray-800'>
                {category.category}
              </h3>
              <div className='flex flex-wrap gap-4'>
                {category.skills.map((skill) => (
                  <Skill key={skill} name={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
