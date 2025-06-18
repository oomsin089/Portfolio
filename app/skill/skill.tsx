"use client";
import { Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaJs,
  FaCss3Alt,
  FaBootstrap,
  FaPython,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMui,
  SiPostgresql,
  SiKotlin,
  SiSpringboot,
  SiMysql,
  SiPostman,
  SiVercel,
  SiDbeaver,
} from "react-icons/si";

// Updated Skills Arrays with correct colors
export default function Skills() {
  const frontendSkills = [
    { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-700" /> },
    { name: "MUI", icon: <SiMui className="text-blue-500" /> },
  ];

  const backendSkills = [
    { name: "Python", icon: <FaPython className="text-blue-500" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
    { name: "Kotlin", icon: <SiKotlin className="text-purple-600" /> },
    { name: "Java", icon: <FaJava className="text-red-500" /> },
    { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" /> },
    { name: "MySQL", icon: <SiMysql className="text-orange-500" /> },
  ];

  const tools = [
    {
      name: "VS Code",
      icon: <img src="/vscode2.svg" alt="VS Code" className="w-4 h-4" />,
    },
    { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-800" /> },
    { name: "Figma", icon: <FaFigma className="text-purple-500" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
    { name: "Vercel", icon: <SiVercel className="text-black" /> },
    { name: "DBeaver", icon: <SiDbeaver className="text-black" /> },
  ];
  return (
    <section id="skills" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Typography
            variant="h2"
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          >
            Skills
          </Typography>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Frontend Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Paper elevation={3} className="p-6 !rounded-2xl h-full">
              <Typography
                variant="h5"
                className="text-xl font-bold text-gray-800 mb-6 text-center"
              >
                🎨 Frontend
              </Typography>
              <div className="space-y-3">
                {frontendSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100 hover:shadow-md transition-all duration-300"
                  >
                    <span className="text-xl">{skill.icon}</span>
                    <Typography
                      variant="body1"
                      className="font-medium text-gray-700"
                    >
                      {skill.name}
                    </Typography>
                  </motion.div>
                ))}
              </div>
            </Paper>
          </motion.div>

          {/* Backend Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Paper elevation={3} className="p-6 !rounded-2xl h-full">
              <Typography
                variant="h5"
                className="text-xl font-bold text-gray-800 mb-6 text-center"
              >
                ⚙️ Backend
              </Typography>
              <div className="space-y-3">
                {backendSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-100 hover:shadow-md transition-all duration-300"
                  >
                    <span className="text-xl">{skill.icon}</span>
                    <Typography
                      variant="body1"
                      className="font-medium text-gray-700"
                    >
                      {skill.name}
                    </Typography>
                  </motion.div>
                ))}
              </div>
            </Paper>
          </motion.div>

          {/* Tools & Others */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Paper elevation={3} className="p-6 !rounded-2xl h-full">
              <Typography
                variant="h5"
                className="text-xl font-bold text-gray-800 mb-6 text-center"
              >
                🛠️ Tools
              </Typography>
              <div className="space-y-3 mb-6">
                {tools.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100 hover:shadow-md transition-all duration-300"
                  >
                    <span className="text-xl">{tool.icon}</span>
                    <Typography
                      variant="body1"
                      className="font-medium text-gray-700"
                    >
                      {tool.name}
                    </Typography>
                  </motion.div>
                ))}
              </div>

              {/* Learning Goals */}
              <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white">
                <Typography
                  variant="h6"
                  className="font-bold mb-2 flex items-center gap-2"
                >
                  🎯 กำลังเรียนรู้
                </Typography>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-2 py-1 bg-white/20 rounded-full text-sm">
                    AWS
                  </span>
                  <span className="px-2 py-1 bg-white/20 rounded-full text-sm">
                    DevOps Tools
                  </span>
                </div>
              </div>
            </Paper>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
