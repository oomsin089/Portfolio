"use client"
import { Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DownloadIcon from '@mui/icons-material/Download';

export default function Contact() {
  const contactInfo = [
    {
      icon: <EmailIcon className="text-blue-600" />,
      label: 'Email',
      value: 'nattanun318@gmail.com',
      clickable: false
    },
    {
      icon: <PhoneIcon className="text-green-600" />,
      label: 'Phone',
      value: '+66 95-058-3222',
      clickable: false
    },
    {
      icon: <LocationOnIcon className="text-red-600" />,
      label: 'Location',
      value: 'กรุงเทพมหานคร, ประเทศไทย',
      href: 'https://www.google.com/maps/place/%E0%B8%A5%E0%B8%B8%E0%B8%87%E0%B8%8A%E0%B8%B1%E0%B8%A2%E0%B9%80%E0%B8%9E%E0%B8%A5%E0%B8%AA/@13.7920054,100.588356,17z/data=!3m1!4b1!4m6!3m5!1s0x30e29ddab3770229:0x7dd61b4c2d5a867d!8m2!3d13.7920054!4d100.5909309!16s%2Fg%2F11gh5qkdmf?entry=ttu&g_ep=EgoyMDI1MDYxNS4wIKXMDSoASAFQAw%3D%3D',
      clickable: true
    }
  ];

  const socialLinks = [
    {
      icon: <GitHubIcon />,
      label: 'GitHub',
      href: 'https://github.com/oomsin089',
      color: '#333'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Typography variant="h2" className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Contact
          </Typography>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Paper elevation={8} className="p-10 !rounded-2xl bg-white/95 backdrop-blur-sm">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Details */}
                <div>
                  <Typography variant="h4" className="text-2xl font-bold text-gray-800 mb-8">
                    📞 Contact Information
                  </Typography>

                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      info.clickable ? (
                        <motion.a
                          key={info.label}
                          href={info.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-5 p-5 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 group cursor-pointer"
                        >
                          <motion.div 
                            className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                          >
                            {info.icon}
                          </motion.div>
                          <div>
                            <Typography variant="subtitle2" className="text-gray-500 text-sm font-medium">
                              {info.label}
                            </Typography>
                            <Typography variant="h6" className="font-semibold text-gray-800 text-lg">
                              {info.value}
                            </Typography>
                          </div>
                        </motion.a>
                      ) : (
                        <motion.div
                          key={info.label}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-5 p-5 rounded-xl bg-gray-50"
                        >
                          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md">
                            {info.icon}
                          </div>
                          <div>
                            <Typography variant="subtitle2" className="text-gray-500 text-sm font-medium">
                              {info.label}
                            </Typography>
                            <Typography variant="h6" className="font-semibold text-gray-800 text-lg">
                              {info.value}
                            </Typography>
                          </div>
                        </motion.div>
                      )
                    ))}
                  </div>
                </div>

                {/* Social Links & Additional Info */}
                <div>
                  <Typography variant="h4" className="text-2xl font-bold text-gray-800 mb-8">
                    🌐 Social Media
                  </Typography>

                  <div className="space-y-6 mb-8">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-5 p-5 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 group cursor-pointer"
                      >
                        <motion.div 
                          className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-md group-hover:shadow-lg"
                          style={{ backgroundColor: social.color }}
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        >
                          {social.icon}
                        </motion.div>
                        <div>
                          <Typography variant="subtitle2" className="text-gray-500 text-sm font-medium">
                            {social.label}
                          </Typography>
                          <Typography variant="h6" className="font-semibold text-gray-800 text-lg">
                            View Profile
                          </Typography>
                        </div>
                      </motion.a>
                    ))}
                  </div>

                  {/* Download Resume Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href="/Nattanun Naknaree.pdf"
                      download
                      className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      <DownloadIcon />
                      ดาวน์โหลด Resume
                    </a>
                  </motion.div>

                  {/* Status Info */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-200"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <Typography variant="h6" className="font-bold text-green-800">
                        พร้อมเริ่มงานได้ทันที
                      </Typography>
                    </div>
                    <Typography variant="body2" className="text-gray-700">
                      กำลังมองหาโอกาสในการเริ่มต้นอาชีพด้าน Software Developer<br />
                    </Typography>
                  </motion.div>
                </div>
              </div>
            </Paper>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-gray-200"
        >
          <Typography variant="body1" className="text-gray-600">
            ขอบคุณสำหรับความสนใจ | หวังว่าจะได้มีโอกาสร่วมงานกับคุณ
          </Typography>
          <Typography variant="body2" className="text-gray-500 mt-2">
            © 2024 Nattanun Naknaree Portfolio
          </Typography>
        </motion.div>
      </div>
    </section>
  );
}