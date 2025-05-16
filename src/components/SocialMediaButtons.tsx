import React from 'react';
import {
  Fab,
  Tooltip,
  Box,
  Typography,
  Zoom,
  Stack,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { YouTube, Facebook, Instagram } from '@mui/icons-material';

const SocialMediaButtons: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const socialButtons = [
    {
      id: 'youtube',
      icon: <YouTube />,
      color: '#FF0000',
      hoverColor: '#CC0000',
      tooltip: {
        title: 'Canal de YouTube Municipal',
        subtitle: 'Mira nuestros eventos en vivo, ceremonias y actividades municipales',
      },
      url: 'https://www.youtube.com/@MunicipalidaddeCholcholOficial/streams',
    },
    {
      id: 'facebook',
      icon: <Facebook />,
      color: '#1877F2',
      hoverColor: '#0D5AB9',
      tooltip: {
        title: 'Facebook Municipal',
        subtitle: 'Entérate de las últimas noticias, eventos y comunicados oficiales',
      },
      url: 'https://www.facebook.com/p/Municipalidad-de-Cholchol-100065025870874/?locale=es_LA',
    },
    {
      id: 'instagram',
      icon: <Instagram />,
      color: '#E1306C',
      hoverColor: '#C13584',
      tooltip: {
        title: 'Instagram Municipal',
        subtitle: 'Descubre las imágenes y momentos más importantes de nuestra comuna',
      },
      url: 'https://www.instagram.com/municholchol_oficial/',
    },
  ];

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: isMobile ? 16 : 20,
        right: isMobile ? 16 : 20,
        zIndex: 1000,
      }}
    >
      <Stack 
        spacing={isMobile ? 1.5 : 2} 
        direction="column" 
        alignItems="flex-end"
      >
        {socialButtons.map((button) => (
          <Box
            key={button.id}
            sx={{ position: 'relative' }}
          >
            <Tooltip
              title={
                <Box sx={{ p: 1 }}>
                  <Typography 
                    variant={isMobile ? "body2" : "subtitle2"} 
                    sx={{ fontWeight: 'bold' }}
                  >
                    {button.tooltip.title}
                  </Typography>
                  <Typography 
                    variant={isMobile ? "caption" : "body2"} 
                    sx={{ 
                      display: 'block', 
                      mt: 0.5,
                      fontSize: isMobile ? '0.7rem' : 'inherit'
                    }}
                  >
                    {button.tooltip.subtitle}
                  </Typography>
                </Box>
              }
              placement={isMobile ? "top" : "left"}
              TransitionComponent={Zoom}
              arrow
            >
              <Box>
                <Fab
                  color="primary"
                  aria-label={button.id}
                  size={isMobile ? "small" : "medium"}
                  sx={{
                    bgcolor: button.color,
                    '&:hover': {
                      bgcolor: button.hoverColor,
                      transform: isMobile ? 'scale(1.05)' : 'scale(1.1)',
                    },
                    transition: 'all 0.3s ease',
                    boxShadow: isMobile ? 2 : 3,
                    width: isMobile ? 40 : 56,
                    height: isMobile ? 40 : 56,
                    '& .MuiSvgIcon-root': {
                      fontSize: isMobile ? '1.2rem' : '1.5rem',
                    },
                  }}
                  onClick={() => window.open(button.url, '_blank')}
                >
                  {button.icon}
                </Fab>
              </Box>
            </Tooltip>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default SocialMediaButtons; 