"use client"
import { Typography, Paper, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';

export default function Experience() {
  const experiences = [
    {
      type: 'work',
      title: 'Software Developer Intern',
      company: 'PROTOSS TECHNOLOGY CO., LTD.',
      period: '7 Months',
      description: 'พัฒนาเว็บไซต์และแอพพลิเคชั่นโดยใช้ Next.js และ Kotlin Spring Boot ทำงานร่วมกับทีมในการปรับปรุง BA ได้พัฒนาระบบแจ้งปัญหาที่ประกอบด้วย แบบฟอร์มแจ้งปัญหา การอัปเดตสถานะ ฟีเจอร์ส่งออกไฟล์ PDF และไทม์ไลน์ที่แสดงความคืบหน้าของปัญหาที่แจ้ง นอกจากนี้ ระบบยังรวมข้อตกลงระดับบริการ (SLA) โดยเน้นที่เวลาตอบสนองและเวลาแก้ไขปัญหาโดยเฉพาะ',
      skills: ['React', 'Next.js', 'TypeScript', 'Git', 'Kotlin', 'Spring Boot', 'PostgreSQL']
    },
    {
      type: 'education',
      title: 'ปริญญาตรี (เกียรตินิยมอันดับ 1) คณะบริหารธุรกิจ สาขาระบบสารสนเทศ',
      company: 'มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี',
      period: '2564 - 2568',
      description: 'เรียนรู้พื้นฐานการเขียนโปรแกรม, โครงสร้างข้อมูล, และการพัฒนาซอฟต์แวร์ เกรดเฉลี่ย 3.59',
      skills: ['Java', 'Python', 'Database', "HTML/CSS", 'JavaScript', 'SQL', "Firebase"]
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Typography variant="h2" className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Experience
          </Typography>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative mb-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white shadow-lg"></div>

                <div className="ml-20">
                  <Paper elevation={3} className="p-6 !rounded-2xl hover:!shadow-lg transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        {exp.type === 'work' ? (
                          <WorkIcon className="text-blue-600" />
                        ) : (
                          <SchoolIcon className="text-purple-600" />
                        )}
                        <div>
                          <Typography variant="h5" className="font-bold text-gray-800">
                            {exp.title}
                          </Typography>
                          <Typography variant="subtitle1" className="text-blue-600 font-medium">
                            {exp.company}
                          </Typography>
                        </div>
                      </div>
                      <Chip
                        label={exp.period}
                        className="!bg-gray-100 !text-gray-700 !font-medium"
                      />
                    </div>

                    <Typography variant="body1" className="text-gray-600 mb-4 leading-relaxed">
                      {exp.description}
                    </Typography>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Chip
                          key={skill}
                          label={skill}
                          size="small"
                          className="!bg-blue-50 !text-blue-700 !font-medium"
                        />
                      ))}
                    </div>
                  </Paper>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
