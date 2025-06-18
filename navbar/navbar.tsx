"use client"
import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Navbar({ scrollToSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleMobileMenuClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <AppBar 
        position="fixed" 
        elevation={scrolled ? 4 : 0}
        sx={{
          background: scrolled 
            ? 'linear-gradient(135deg, rgba(102, 126, 234, 0.95) 0%, rgba(118, 75, 162, 0.95) 100%)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          transition: 'all 0.3s ease-in-out',
          borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
        }}
      >
        <Toolbar className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <Typography 
              variant="h6" 
              component="div" 
              className="font-bold text-white cursor-pointer text-sm sm:text-base lg:text-lg"
              onClick={() => scrollToSection('hero')}
            >
              Portfolio
            </Typography>
          </motion.div>

          {/* Desktop Menu - Show all items */}
          <Box className="hidden md:flex gap-1 xl:gap-2">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Button
                  onClick={() => scrollToSection(item.id)}
                  className="!text-white hover:!bg-white/10 !px-2 lg:!px-3 xl:!px-4 !py-2 !rounded-lg !font-medium !transition-all !duration-300 !text-xs lg:!text-sm xl:!text-base !min-w-0"
                >
                  {item.label}
                </Button>
              </motion.div>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <Box className="md:hidden">
            <IconButton
              onClick={() => setMobileMenuOpen(true)}
              className="!text-white"
              size="small"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer Menu */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        PaperProps={{
          sx: {
            background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.98) 0%, rgba(118, 75, 162, 0.98) 100%)',
            backdropFilter: 'blur(10px)',
            color: 'white',
            width: { xs: '100%', sm: '320px' },
            maxWidth: '100vw'
          }
        }}
      >
        <Box className="p-4">
          <Box className="flex justify-between items-center mb-8">
            <Typography variant="h6" className="font-bold text-white">
              Menu
            </Typography>
            <IconButton
              onClick={() => setMobileMenuOpen(false)}
              className="!text-white"
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <List className="space-y-2">
            <AnimatePresence>
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <ListItem 
                    button 
                    onClick={() => handleMobileMenuClick(item.id)}
                    className="!rounded-lg hover:!bg-white/10 !transition-all !duration-300 !mb-2"
                  >
                    <ListItemText 
                      primary={
                        <Typography className="!font-medium !text-white !text-lg">
                          {item.label}
                        </Typography>
                      }
                    />
                  </ListItem>
                </motion.div>
              ))}
            </AnimatePresence>
          </List>
        </Box>
      </Drawer>
    </>
  );
}