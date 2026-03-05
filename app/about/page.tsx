"use client";

import { motion } from "framer-motion";
import SkillBadge from "@/components/SkillBadge";
import { skills } from "@/data/skills";
import { experience, education } from "@/data/resume";

const categories = ["Frontend", "Backend", "Tools & DevOps"] as const;

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white mb-4"
        >
          About Me
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-zinc-400 text-lg mb-12 max-w-2xl leading-relaxed"
        >
          Experienced software developer with strong experience in Javascript
          (React w/Typescript), C#, SQL, Vite, PHP + Laravel, Node.js, Vue,
          Docker and more.
          <br />
          <br />
          Working at consulting agencies has given me the unique opportunity to
          work across multiple areas of the industry with exposure to many
          different tech stacks. From small start ups less than 5 people, to
          large organizations that are 20+ years old, I have a proven track
          record of success with every client and place of employment I have
          worked.
          <br />
          <br />
          In my free time I like to enjoy a good film, go camping / hiking,
          read, watch movies, shoot photos and enjoy a good conversation.
        </motion.p>

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold text-white mb-6">Skills</h2>
          {categories.map((category) => (
            <div key={category} className="mb-6">
              <h3 className="text-sm text-zinc-500 uppercase tracking-wider mb-3">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills
                  .filter((s) => s.category === category)
                  .map((skill) => (
                    <SkillBadge key={skill.name} name={skill.name} />
                  ))}
              </div>
            </div>
          ))}
        </motion.section>

        {/* Experience */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold text-white mb-6">Experience</h2>
          <div className="space-y-8">
            {experience.map((exp) => (
              <div
                key={exp.title + exp.company}
                className="border-l-2 border-zinc-800 pl-6 relative"
              >
                <div className="absolute -left-[5px] top-1.5 w-2 h-2 bg-blue-400 rounded-full" />
                <h3 className="text-lg font-medium text-white">{exp.title}</h3>
                <p className="text-blue-400 text-sm mb-1">{exp.company}</p>
                <p className="text-zinc-500 text-sm mb-3">{exp.period}</p>
                <ul className="space-y-1">
                  {exp.description.map((item, i) => (
                    <li
                      key={i}
                      className="text-zinc-400 text-sm leading-relaxed"
                    >
                      &bull; {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Education */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold text-white mb-6">Education</h2>
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="border-l-2 border-zinc-800 pl-6 relative"
            >
              <div className="absolute -left-[5px] top-1.5 w-2 h-2 bg-blue-400 rounded-full" />
              <h3 className="text-lg font-medium text-white">{edu.degree}</h3>
              <p className="text-blue-400 text-sm">{edu.school}</p>
              <p className="text-zinc-500 text-sm">{edu.period}</p>
            </div>
          ))}
        </motion.section>

        {/* GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/MonroeGollaher"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
          >
            View My GitHub
          </a>
        </motion.div>
      </div>
    </div>
  );
}
