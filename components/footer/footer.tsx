"use client"
import React from 'react';
import { Container, Typography, IconButton, Divider } from '@mui/material';
import { GitHub, LinkedIn, Email, Favorite } from '@mui/icons-material';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <Container maxWidth="lg">
        <div className="flex flex-col items-center space-y-4">
          {/* Social Links */}
          <div className="flex space-x-4">
            <IconButton
              href="https://github.com/johndoe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors"
            >
              <GitHub />
            </IconButton>
            <IconButton
              href="https://linkedin.com/in/johndoe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors"
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              href="mailto:johndoe@email.com"
              className="text-white hover:text-blue-400 transition-colors"
            >
              <Email />
            </IconButton>
          </div>

          <Divider className="w-full bg-gray-600" />

          {/* Copyright */}
          <div className="text-center">
            <Typography variant="body2" className="flex items-center justify-center space-x-1">
              <span>© {currentYear} John Doe. Made with</span>
              <Favorite className="text-red-500 text-sm" />
              <span>using Next.js & MUI</span>
            </Typography>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;