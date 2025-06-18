"use client"
import React from 'react';
import { 
  Drawer, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemIcon,
  Divider,
  Typography 
} from '@mui/material';
import { 
  Person, 
  Code, 
  Work, 
  School, 
  Email,
  Home 
} from '@mui/icons-material';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ open, onClose }) => {
  const menuItems = [
    { text: 'Home', href: '#main', icon: <Home /> },
    { text: 'About', href: '#about', icon: <Person /> },
    { text: 'Skills', href: '#skills', icon: <Code /> },
    { text: 'Projects', href: '#projects', icon: <Work /> },
    { text: 'Education', href: '#education', icon: <School /> },
    { text: 'Contact', href: '#contact', icon: <Email /> }
  ];

  const handleItemClick = (href:any) => {
    window.location.hash = href;
    onClose();
  };

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <div className="w-64 p-4">
        <Typography variant="h6" className="font-bold text-center mb-4">
          John Doe Portfolio
        </Typography>
        <Divider className="mb-4" />
        
        <List>
          {menuItems.map((item, index) => (
            <ListItem 
              button 
              key={index}
              onClick={() => handleItemClick(item.href)}
              className="hover:bg-gray-100 rounded-lg mb-1"
            >
              <ListItemIcon className="text-blue-600">
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
};

export default MobileMenu;