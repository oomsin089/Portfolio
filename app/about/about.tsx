"use client";
import { Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";
import Person from "../../public/images/person.jpg";

export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-50">
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
            About
          </Typography>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <img
                src={Person.src}
                alt="Profile"
                className="w-64 h-64 lg:w-72 lg:h-72 rounded-full object-cover shadow-xl ring-4 ring-white"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:pl-8"
          >
            <Paper elevation={3} className="p-6 lg:p-8 !bg-white !rounded-2xl">
              <Typography
                variant="h4"
                className="text-xl lg:text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2"
              >
                สวัสดีครับ
                <span className="text-2xl">👋</span>
              </Typography>

              <Typography
                variant="body1"
                className="text-gray-600 text-base lg:text-lg leading-relaxed mb-4"
              >
                ผมเป็นนักพัฒนาเว็บไซต์และแอปพลิเคชันรุ่นใหม่ที่มีความหลงใหลในการเรียนรู้และพัฒนาเทคโนโลยีอย่างต่อเนื่อง
                มีประสบการณ์ในการใช้งานเทคโนโลยีสมัยใหม่ เช่น React, Next.js,
                Python, Java, Kotlin, HTML รวมถึง Frameworks ที่เกี่ยวข้อง
                พร้อมเปิดรับโอกาสใหม่ ๆ
                เพื่อพัฒนาทักษะและสร้างสรรค์ผลงานที่มีคุณภาพ
              </Typography>

              <Typography
                variant="body1"
                className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6"
              >
                ผมเชื่อว่าการออกแบบที่ดีต้องมาพร้อมกับประสบการณ์ผู้ใช้ที่ยอดเยี่ยม
                และมุ่งมั่นที่จะเรียนรู้และพัฒนาทักษะอย่างต่อเนื่อง
              </Typography>

              <div className="flex flex-wrap gap-2 lg:gap-3 mt-4">
                <span className="px-3 py-1.5 lg:px-4 lg:py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium flex items-center gap-1">
                  📍 กรุงเทพมหานคร
                </span>
                <span className="px-3 py-1.5 lg:px-4 lg:py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium flex items-center gap-1">
                  💼 พร้อมทำงาน
                </span>
                <span className="px-3 py-1.5 lg:px-4 lg:py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium flex items-center gap-1">
                  🎓 จบใหม่
                </span>
              </div>
            </Paper>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
