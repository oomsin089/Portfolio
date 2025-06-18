"use client"
import { Typography, Paper, Button, Chip, Dialog, DialogContent, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import CloseIcon from '@mui/icons-material/Close';
import ZoomInIcon from '@mui/icons-material/ZoomIn';

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      title: 'Complaint Website',
      description: 'เว็บไซต์รับเรื่องร้องเรียน/ร้องทุกข์คณะบริหารธุรกิจ',
      image: '/image.png',
      technologies: ['Next.js', 'Kotlin', 'PostgreSQL', 'Tailwind CSS', 'Spring Boot', 'MUI'],
      github: 'https://github.com/oomsin089/Complaint',
      github2: 'https://github.com/oomsin089/Rmutt',
      hasBackend: true, // มี backend แยก
      featured: true
    },
    {
      title: 'Portfolio Website',
      description: 'เว็บไซต์แสดงผลงานส่วนตัวที่คุณกำลังดูอยู่ตอนนี้ เน้นการออกแบบและ UX ที่ดี',
      image: '/portfolio.png',
      technologies: ['Next.js', 'Tailwind CSS', 'MUI', 'Framer Motion'],
      github: 'https://github.com/oomsin089/Portfolio',
      hasBackend: false, // ไม่มี backend แยก
      featured: true
    }
  ];

  const handleImageClick = (image:any, title:any) => {
    setSelectedImage({ src: image, title: title });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Typography variant="h2" className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Projects
          </Typography>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Paper 
                elevation={project.featured ? 8 : 3} 
                className={`!rounded-2xl overflow-hidden group hover:!shadow-2xl transition-all duration-500 ${
                  project.featured ? '!shadow-2xl ring-2 ring-blue-200' : ''
                }`}
              >
                {project.featured && (
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-2 text-sm font-medium">
                    ⭐ Featured Project
                  </div>
                )}
                
                <div className="relative overflow-hidden cursor-pointer" onClick={() => handleImageClick(project.image, project.title)}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Zoom Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 rounded-full p-3 backdrop-blur-sm">
                      <ZoomInIcon className="text-gray-700" fontSize="large" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <Typography variant="h5" className="font-bold text-gray-800 mb-3">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </Typography>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        className="!bg-blue-100 !text-blue-800 !font-medium"
                      />
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.hasBackend ? (
                      // แสดง 2 ปุ่มสำหรับโปรเจกต์ที่มี backend แยก
                      <>
                        <Button
                          variant="outlined"
                          startIcon={<GitHubIcon />}
                          href={project.github}
                          className="!border-gray-300 !text-gray-700 hover:!bg-gray-50"
                        >
                          Code Front-End
                        </Button>
                        <Button
                          variant="outlined"
                          startIcon={<GitHubIcon />}
                          href={project.github2}
                          className="!border-gray-300 !text-gray-700 hover:!bg-gray-50"
                        >
                          Code Back-End 
                        </Button>
                      </>
                    ) : (
                      // แสดง 1 ปุ่มสำหรับโปรเจกต์ที่ไม่มี backend แยก
                      <Button
                        variant="outlined"
                        startIcon={<GitHubIcon />}
                        href={project.github}
                        className="!border-gray-300 !text-gray-700 hover:!bg-gray-50"
                      >
                        Code Front-End
                      </Button>
                    )}
                   
                  </div>
                </div>
              </Paper>
            </motion.div>
          ))}
        </div>

        {/* Image Modal */}
        <Dialog
          open={isModalOpen}
          onClose={handleCloseModal}
          maxWidth="lg"
          fullWidth
          PaperProps={{
            className: '!bg-transparent !shadow-none !overflow-visible'
          }}
        >
          <DialogContent className="!p-0 !bg-transparent relative">
            {/* Close Button */}
            <IconButton
              onClick={handleCloseModal}
              className="!absolute !top-4 !right-4 !z-10 !bg-white/90 hover:!bg-white !shadow-lg"
            >
              <CloseIcon />
            </IconButton>
            
            {/* Image */}
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
                
                {/* Image Title */}
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