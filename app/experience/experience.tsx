"use client";
import {
  Typography,
  Paper,
  Chip,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Dialog,
  DialogContent,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import VerifiedIcon from "@mui/icons-material/Verified";
import CloseIcon from "@mui/icons-material/Close";
import ZoomInIcon from "@mui/icons-material/ZoomIn";

export default function Experience() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const experiences = [
    {
      type: "work",
      title: "Software Developer Intern",
      company: "PROTOSS TECHNOLOGY CO., LTD.",
      period: "7 Months",
      description:
        "พัฒนาเว็บไซต์และแอพพลิเคชั่นโดยใช้ Next.js และ Kotlin Spring Boot ทำงานร่วมกับทีมในการปรับปรุง BA ได้พัฒนาระบบแจ้งปัญหาที่ประกอบด้วย แบบฟอร์มแจ้งปัญหา การอัปเดตสถานะ ฟีเจอร์ส่งออกไฟล์ PDF และไทม์ไลน์ที่แสดงความคืบหน้าของปัญหาที่แจ้ง นอกจากนี้ ระบบยังรวมข้อตกลงระดับบริการ (SLA) โดยเน้นที่เวลาตอบสนองและเวลาแก้ไขปัญหาโดยเฉพาะ",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Git",
        "Kotlin",
        "Spring Boot",
        "PostgreSQL",
      ],
    },
    {
      type: "education",
      title: "ปริญญาตรี (เกียรตินิยมอันดับ 1) คณะบริหารธุรกิจ สาขาระบบสารสนเทศ",
      company: "มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี",
      period: "2564 - 2568",
      description:
        "เรียนรู้พื้นฐานการเขียนโปรแกรม, โครงสร้างข้อมูล, และการพัฒนาซอฟต์แวร์ เกรดเฉลี่ย 3.59",
      skills: [
        "Java",
        "Python",
        "Database",
        "HTML/CSS",
        "JavaScript",
        "SQL",
        "Firebase",
      ],
    },
  ];

  const certificates = [
    {
      title: "Software Developer Internship Certificate",
      issuer: "PROTOSS TECHNOLOGY CO., LTD.",
      date: "วันที่ 1 เมษายน 2567 - 25 ตุลาคม 2567",
      image: "/images/intern.jpg",
      description:
        "Awarded for completing a software developer internship with a focus on cloud computing fundamentals, practical coding skills, and collaborative project development under Protoss Technology Co., Ltd.",
    },
    {
      title: "Cooperative education competition",
      issuer: "Rajamangala University of Technology Thanyaburi",
      date: "วันที่ 17 มกราคม 2568 ",
      image: "/images/Cooperative education competition.jpg",
      description:
        "Awarded 3rd place in the 2024 Cooperative Education Project Competition for developing an issue reporting and meeting room booking system, demonstrating practical skills in full-stack development and team collaboration.",
    },
    {
      title: "First class honors",
      issuer: "Rajamangala University of Technology Thanyaburi",
      date: "31 มีนาคม 2568",
      image: "/images/First class honors.jpg",
      description:
        "Graduated with First Class Honors in Business Administration from Rajamangala University of Technology Thanyaburi, demonstrating outstanding academic performance and dedication.",
    },
  ];

  const handleImageClick = (image: string, title: string) => {
    setSelectedImage({ src: image, title: title });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

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
          <Typography
            variant="h2"
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
          >
            Experience
          </Typography>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </motion.div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto mb-20">
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
                  <Paper
                    elevation={3}
                    className="p-6 !rounded-2xl hover:!shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        {exp.type === "work" ? (
                          <WorkIcon className="text-blue-600" />
                        ) : (
                          <SchoolIcon className="text-purple-600" />
                        )}
                        <div>
                          <Typography
                            variant="h5"
                            className="font-bold text-gray-800"
                          >
                            {exp.title}
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            className="text-blue-600 font-medium"
                          >
                            {exp.company}
                          </Typography>
                        </div>
                      </div>
                      <Chip
                        label={exp.period}
                        className="!bg-gray-100 !text-gray-700 !font-medium"
                      />
                    </div>

                    <Typography
                      variant="body1"
                      className="text-gray-600 mb-4 leading-relaxed"
                    >
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

        {/* Certificates Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <EmojiEventsIcon className="text-yellow-500 text-4xl" />
              <Typography
                variant="h3"
                className="text-3xl md:text-4xl font-bold text-gray-800"
              >
                Certificates & Achievements
              </Typography>
            </div>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto"></div>
          </div>

          <div className="max-w-6xl mx-auto">
            <Grid container spacing={4}>
              {certificates.map((cert, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card
                      className="h-full !rounded-2xl overflow-hidden hover:!shadow-xl transition-all duration-300 transform hover:scale-105 group"
                      elevation={3}
                    >
                      <Box
                        className="relative cursor-pointer"
                        onClick={() => handleImageClick(cert.image, cert.title)}
                      >
                        <CardMedia
                          component="img"
                          height="250"
                          image={cert.image}
                          alt={cert.title}
                          className="object-contain bg-gray-50 group-hover:scale-110 transition-transform duration-500"
                          style={{
                            maxHeight: "250px",
                            objectFit: "contain",
                            backgroundColor: "#f9fafb",
                          }}
                          onError={(e) => {
                            // Fallback if image doesn't exist
                            const img = e.target as HTMLImageElement;
                            img.style.display = "none";
                            const nextElement =
                              img.nextElementSibling as HTMLElement;
                            if (nextElement) {
                              nextElement.style.display = "flex";
                            }
                          }}
                        />

                        {/* Fallback placeholder */}
                        <Box
                          className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center"
                          style={{ display: "none" }}
                        >
                          <VerifiedIcon className="text-white text-6xl" />
                        </Box>

                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        {/* Zoom icon on hover */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-white/90 rounded-full p-3 backdrop-blur-sm">
                            <ZoomInIcon
                              className="text-gray-700"
                              fontSize="large"
                            />
                          </div>
                        </div>

                        {/* Certificate badge */}
                        <Box className="absolute top-4 right-4">
                          <div className="bg-white rounded-full p-2 shadow-lg">
                            <VerifiedIcon className="text-blue-600" />
                          </div>
                        </Box>
                      </Box>

                      <CardContent className="p-6">
                        <Typography
                          variant="h6"
                          className="font-bold text-gray-800 mb-2"
                        >
                          {cert.title}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          className="text-blue-600 font-medium mb-2"
                        >
                          {cert.issuer}
                        </Typography>
                        <Typography
                          variant="body2"
                          className="text-gray-600 mb-3"
                        >
                          {cert.description}
                        </Typography>
                        <div className="flex justify-between items-center">
                          <Chip
                            label={cert.date}
                            size="small"
                            className="!bg-yellow-50 !text-yellow-700 !font-medium"
                          />
                          <Typography
                            variant="caption"
                            className="text-gray-500"
                          >
                            Verified
                          </Typography>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </div>
        </motion.div>

        {/* Image Modal */}
        <Dialog
          open={isModalOpen}
          onClose={handleCloseModal}
          maxWidth="lg"
          fullWidth
          PaperProps={{
            className: "!bg-transparent !shadow-none !overflow-visible",
          }}
        >
          <DialogContent className="!p-0 !bg-transparent relative">
            <IconButton
              onClick={handleCloseModal}
              className="!absolute !top-4 !right-4 !z-10 !bg-white/90 hover:!bg-white !shadow-lg"
            >
              <CloseIcon />
            </IconButton>

            {selectedImage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
                />

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                  <Typography variant="h6" className="text-white font-bold">
                    {selectedImage.title}
                  </Typography>
                </div>
              </motion.div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
