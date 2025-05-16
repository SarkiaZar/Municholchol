import React, { useState } from 'react'
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button, Container, Paper, List, ListItem, ListItemIcon, ListItemText, Modal, Fade, Backdrop } from '@mui/material'
import { useNavigate, Link as RouterLink } from 'react-router-dom'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import { LocationOn } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  const navigate = useNavigate()
  const [openWelcome, setOpenWelcome] = useState(true)

  // Estado para la galería de Expanding Cards
  const [hoverCirculacion, setHoverCirculacion] = useState<number | null>(null)
  const [modalCirculacion, setModalCirculacion] = useState<number | null>(null)

  const becasImages = [
    '/images/index/bec1.jpg',
    '/images/index/bec2.jpg',
    '/images/index/bec3.jpg',
  ];

  const [hoverBeca, setHoverBeca] = useState<number | null>(null);
  const [modalBeca, setModalBeca] = useState<number | null>(null);
  const overlayBecaVisible = modalBeca !== null;

  const featuredNews = [
    {
      id: 1,
      title: 'Nuevo Centro Comunitario',
      description: 'Inauguración del nuevo centro comunitario en el sector norte de Cholchol.',
      image: '/images/news/noticia-1.jpg',
      date: '10 de Mayo, 2024'
    },
    {
      id: 2,
      title: 'Programa de Reciclaje',
      description: 'Lanzamiento del programa municipal de reciclaje y cuidado del medio ambiente.',
      image: '/images/news/noticia-2.jpg',
      date: '8 de Mayo, 2024'
    },
    {
      id: 3,
      title: 'Mejoras en Infraestructura',
      description: 'Inicio de obras de mejoramiento en las principales calles de la comuna.',
      image: '/images/news/noticia-3.jpg',
      date: '5 de Mayo, 2024'
    },
  ]

  const serviciosMunicipales = [
    {
      title: 'Trámites en Línea',
      description: 'Realiza tus trámites municipales de forma rápida y segura.',
      path: '/tramites',
      image: '/images/services/tramites.jpg',
    },
    {
      title: 'Permisos Municipales',
      description: 'Solicita y gestiona permisos municipales.',
      path: '/permisos',
      image: '/images/services/permisos.jpg',
    },
    {
      title: 'Pago de Impuestos',
      description: 'Paga tus impuestos municipales en línea.',
      path: '/impuestos',
      image: '/images/services/impuestos.jpg',
    },
    {
      title: 'Solicitud de Certificados',
      description: 'Solicita certificados emitidos por la municipalidad.',
      path: '/certificados',
      image: '/images/services/certificados.jpg',
    },
    {
      title: 'Denuncias',
      description: 'Realiza denuncias sobre situaciones que afectan a la comunidad.',
      path: '/denuncias',
      image: '/images/services/denuncias.jpg',
    },
    {
      title: 'Programas Sociales',
      description: 'Infórmate sobre los programas sociales disponibles.',
      path: '/programas-sociales',
      image: '/images/services/programas-sociales.jpg',
    },
    {
      title: 'Asistencia Social',
      description: 'Accede a servicios de asistencia social.',
      path: '/asistencia-social',
      image: '/images/services/asistencia-social.jpg',
    },
    {
      title: 'Aseo y Ornato',
      description: 'Servicios de limpieza y ornato para la comuna.',
      path: '/aseo-ornato',
      image: '/images/services/aseo-ornato.jpg',
    },
    {
      title: 'Salud',
      description: 'Servicios de salud municipal.',
      path: '/salud',
      image: '/images/services/salud.jpg',
    },
    {
      title: 'Educación',
      description: 'Acceso a servicios y programas educativos.',
      path: '/educacion',
      image: '/images/services/educacion.jpg',
    },
    {
      title: 'Seguridad Ciudadana',
      description: 'Programas y acciones para la seguridad de la comuna.',
      path: '/seguridad',
      image: '/images/services/seguridad.jpg',
    },
    {
      title: 'Revisión Técnica',
      description: 'Información y agendamiento para revisión técnica.',
      path: '/revision-tecnica',
      image: '/images/services/revision-tecnica.jpg',
    },
  ]

  const circulacionImages = [
    '/images/index/circulacion1.jpg',
    '/images/index/circulacion2.jpg',
    '/images/index/circulacion3.jpg',
  ]

  // Animación para overlay
  const overlayVisible = modalCirculacion !== null;

  return (
    <>
      {/* Modal de Bienvenida */}
      <Modal
        open={openWelcome}
        onClose={() => setOpenWelcome(false)}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{ backdrop: { timeout: 500 } }}
      >
        <Fade in={openWelcome}>
          <Box
            onClick={() => setOpenWelcome(false)}
            sx={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              bgcolor: 'rgba(0,0,0,0.7)',
              zIndex: 2000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <Box
              sx={{
                maxWidth: { xs: '90vw', sm: 600 },
                width: '100%',
                boxShadow: 6,
                borderRadius: 2,
                overflow: 'hidden',
                outline: 'none',
              }}
            >
              <img
                src="/images/bienvenida/horario.jpg"
                alt="Bienvenida Municipalidad de Cholchol"
                style={{ width: '100%', display: 'block' }}
              />
            </Box>
          </Box>
        </Fade>
      </Modal>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Imagen de Bienvenida (header) */}
        <Paper
          elevation={3}
          sx={{
            mb: 4,
            borderRadius: 2,
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <CardMedia
            component="img"
            image="/images/header/banner.png"
            alt="Bienvenida Municipalidad de Cholchol"
            sx={{ width: '100%', maxHeight: 350, objectFit: 'cover' }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              bgcolor: 'rgba(27,75,143,0.25)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
              textShadow: '0 2px 8px rgba(0,0,0,0.5)',
            }}
          >
            <Typography variant="h3" component="h1" gutterBottom>
              Bienvenidos a Cholchol
            </Typography>
            <Typography variant="h6" paragraph>
              Un lugar lleno de historia, cultura y tradición
            </Typography>
          </Box>
        </Paper>

        {/* Mapa Interactivo */}
        <Paper
          elevation={3}
          sx={{
            p: 2,
            mb: 4,
            borderRadius: 2,
            overflow: 'hidden',
          }}
        >
          <Box sx={{ position: 'relative', height: '400px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.393964479836!2d-72.8448576846927!3d-38.5999649796097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614f7e2e2e2e2e3%3A0x2e2e2e2e2e2e2e2e!2sJos%C3%A9%20Joaqu%C3%ADn%20P%C3%A9rez%20449%2C%20Cholchol%2C%20Araucan%C3%ADa!5e0!3m2!1ses!2scl!4v1716240000000!5m2!1ses!2scl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Box>
          <Box sx={{ p: 2, bgcolor: 'background.paper' }}>
            <Typography variant="h6" gutterBottom>
              <LocationOn sx={{ verticalAlign: 'middle', mr: 1 }} />
              Ubicación
            </Typography>
            <Typography variant="body2" color="text.secondary">
              José Joaquín Pérez, 449, Cholchol, Región de La Araucanía
            </Typography>
          </Box>
        </Paper>

        {/* Imágenes destacadas debajo del mapa */}
        {[
          '/images/index/acondicionamiento-fisico.jpg',
          '/images/index/movilizacion.jpg',
          '/images/index/publicaciontallercomu.jpg',
        ].map((img, idx) => (
          <Paper
            key={img}
            elevation={3}
            sx={{
              p: 0,
              mb: 4,
              borderRadius: 2,
              overflow: 'hidden',
              width: '100%',
              maxWidth: 900,
              mx: 'auto',
              display: 'block',
              bgcolor: '#fff',
            }}
          >
            <Box sx={{ position: 'relative', width: '100%', bgcolor: '#fff', display: 'flex', justifyContent: 'center' }}>
              <img
                src={img}
                alt={`Destacada ${idx + 1}`}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: 'none',
                  objectFit: 'contain',
                  display: 'block',
                  background: '#fff',
                }}
              />
            </Box>
          </Paper>
        ))}

        {/* Galería Expanding Cards Circulación */}
        <Box sx={{ mb: 6 }}>
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              width: '100%',
              maxWidth: 900,
              mx: 'auto',
              minHeight: 260,
              justifyContent: 'center',
              alignItems: 'stretch',
              overflow: 'hidden',
              flexDirection: { xs: 'column', sm: 'row' },
            }}
          >
            {circulacionImages.map((img, idx) => (
              <Box key={img} sx={{ width: '100%' }}>
                <Link
                  to="/impuestos"
                  style={{ textDecoration: 'none', display: 'block' }}
                  onClick={() => {
                    localStorage.setItem('destacarPermisoCirculacion', '1');
                  }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      flex: 1,
                      minWidth: 0,
                      transition: 'box-shadow 0.4s, transform 0.4s cubic-bezier(0.4,0,0.2,1)',
                      transform: { xs: 'none', sm: hoverCirculacion === idx ? 'scale(1.03)' : 'scale(1)' },
                      borderRadius: 3,
                      boxShadow: { xs: 3, sm: hoverCirculacion === idx ? 6 : 'none' },
                      cursor: 'pointer',
                      overflow: 'hidden',
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: { xs: 'auto', sm: 260 },
                      border: '2px solid #eee',
                      mx: { xs: 0, sm: 1 },
                      mb: { xs: 2, sm: 0 },
                      bgcolor: '#fff',
                      zIndex: hoverCirculacion === idx ? 2 : 1,
                    }}
                    onMouseEnter={() => {
                      if (window.innerWidth >= 600) { setHoverCirculacion(idx); setModalCirculacion(idx); }
                    }}
                    onMouseLeave={() => {
                      if (window.innerWidth >= 600) { setHoverCirculacion(null); setModalCirculacion(null); }
                    }}
                  >
                    <Box
                      sx={{
                        width: '100%',
                        height: { xs: 'auto', sm: '100%' },
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: '#fff',
                      }}
                    >
                      <img
                        src={img}
                        alt={`Circulación ${idx + 1}`}
                        style={{
                          width: '100%',
                          height: 'auto',
                          maxHeight: '400px',
                          objectFit: 'contain',
                          filter: 'none',
                          opacity: 1,
                          transition: 'all 0.5s cubic-bezier(0.4,0,0.2,1)',
                          background: '#fff',
                          display: 'block',
                          margin: '0 auto',
                        }}
                      />
                    </Box>
                  </Paper>
                </Link>
              </Box>
            ))}
          </Box>
          {/* Overlay solo en desktop */}
          {modalCirculacion !== null && window.innerWidth >= 600 && (
            <Box
              sx={{
                pointerEvents: 'none',
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                bgcolor: overlayVisible ? 'rgba(0,0,0,0.7)' : 'rgba(0,0,0,0)',
                zIndex: 3000,
                display: overlayVisible ? 'flex' : 'none',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: overlayVisible ? 1 : 0,
                transition: 'opacity 0.35s cubic-bezier(0.4,0,0.2,1), background 0.35s cubic-bezier(0.4,0,0.2,1)',
                overflow: 'hidden',
              }}
            >
              <Box
                sx={{
                  maxWidth: '90vw',
                  maxHeight: '90vh',
                  bgcolor: '#fff',
                  borderRadius: 3,
                  boxShadow: 8,
                  p: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transform: overlayVisible ? 'scale(1)' : 'scale(0.96)',
                  opacity: overlayVisible ? 1 : 0,
                  transition: 'opacity 0.35s cubic-bezier(0.4,0,0.2,1), transform 0.35s cubic-bezier(0.4,0,0.2,1)',
                }}
              >
                {typeof modalCirculacion === 'number' && (
                  <img
                    src={circulacionImages[modalCirculacion]}
                    alt={`Circulación expandida`}
                    style={{
                      maxWidth: '80vw',
                      maxHeight: '80vh',
                      objectFit: 'contain',
                      display: 'block',
                      borderRadius: 8,
                      boxShadow: '0 8px 32px 0 rgba(27,75,143,0.18)',
                      transition: 'box-shadow 0.35s cubic-bezier(0.4,0,0.2,1)',
                    }}
                  />
                )}
              </Box>
            </Box>
          )}
        </Box>

        {/* Sección destacada Becas */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700, color: 'primary.main', mb: 3 }}>
            Becas
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              width: '100%',
              maxWidth: 900,
              mx: 'auto',
              minHeight: 260,
              justifyContent: 'center',
              alignItems: 'stretch',
              overflow: 'hidden',
              flexDirection: { xs: 'column', sm: 'row' },
            }}
          >
            {becasImages.map((img, idx) => (
              <Box key={img} sx={{ width: '100%' }}>
                <Paper
                  elevation={3}
                  sx={{
                    flex: 1,
                    minWidth: 0,
                    transition: 'box-shadow 0.4s, transform 0.4s cubic-bezier(0.4,0,0.2,1)',
                    transform: { xs: 'none', sm: hoverBeca === idx ? 'scale(1.03)' : 'scale(1)' },
                    borderRadius: 3,
                    boxShadow: { xs: 3, sm: hoverBeca === idx ? 6 : 'none' },
                    cursor: 'pointer',
                    overflow: 'hidden',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: { xs: 'auto', sm: 260 },
                    border: '2px solid #eee',
                    mx: { xs: 0, sm: 1 },
                    mb: { xs: 2, sm: 0 },
                    bgcolor: '#fff',
                    zIndex: hoverBeca === idx ? 2 : 1,
                  }}
                  onMouseEnter={() => {
                    if (window.innerWidth >= 600) { setHoverBeca(idx); setModalBeca(idx); }
                  }}
                  onMouseLeave={() => {
                    if (window.innerWidth >= 600) { setHoverBeca(null); setModalBeca(null); }
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      height: { xs: 'auto', sm: '100%' },
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: '#fff',
                    }}
                  >
                    <img
                      src={img}
                      alt={`Beca ${idx + 1}`}
                      style={{
                        width: '100%',
                        height: 'auto',
                        maxHeight: '400px',
                        objectFit: 'contain',
                        filter: 'none',
                        opacity: 1,
                        transition: 'all 0.5s cubic-bezier(0.4,0,0.2,1)',
                        background: '#fff',
                        display: 'block',
                        margin: '0 auto',
                      }}
                    />
                  </Box>
                </Paper>
              </Box>
            ))}
          </Box>
          {/* Overlay solo en desktop */}
          {modalBeca !== null && window.innerWidth >= 600 && (
            <Box
              sx={{
                pointerEvents: 'none',
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                bgcolor: overlayBecaVisible ? 'rgba(0,0,0,0.7)' : 'rgba(0,0,0,0)',
                zIndex: 3000,
                display: overlayBecaVisible ? 'flex' : 'none',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: overlayBecaVisible ? 1 : 0,
                transition: 'opacity 0.35s cubic-bezier(0.4,0,0.2,1), background 0.35s cubic-bezier(0.4,0,0.2,1)',
                overflow: 'hidden',
              }}
            >
              <Box
                sx={{
                  maxWidth: '90vw',
                  maxHeight: '90vh',
                  bgcolor: '#fff',
                  borderRadius: 3,
                  boxShadow: 8,
                  p: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transform: overlayBecaVisible ? 'scale(1)' : 'scale(0.96)',
                  opacity: overlayBecaVisible ? 1 : 0,
                  transition: 'opacity 0.35s cubic-bezier(0.4,0,0.2,1), transform 0.35s cubic-bezier(0.4,0,0.2,1)',
                }}
              >
                {typeof modalBeca === 'number' && (
                  <img
                    src={becasImages[modalBeca]}
                    alt={`Beca expandida`}
                    style={{
                      maxWidth: '80vw',
                      maxHeight: '80vh',
                      objectFit: 'contain',
                      display: 'block',
                      borderRadius: 8,
                      boxShadow: '0 8px 32px 0 rgba(27,75,143,0.18)',
                      transition: 'box-shadow 0.35s cubic-bezier(0.4,0,0.2,1)',
                    }}
                  />
                )}
              </Box>
            </Box>
          )}
        </Box>

        {/* Noticias Destacadas */}
        <Typography variant="h4" component="h2" gutterBottom>
          Noticias Destacadas
        </Typography>
        <Grid container spacing={4} sx={{ mb: 4 }}>
          {featuredNews.map((news) => (
            <Grid item xs={12} md={4} key={news.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={news.image}
                  alt={news.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="caption" color="text.secondary" gutterBottom>
                    {news.date}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h3">
                    {news.title}
                  </Typography>
                  <Typography>
                    {news.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Servicios Municipales */}
        <Typography variant="h4" component="h2" gutterBottom>
          Servicios Municipales
        </Typography>
        <Grid container spacing={4}>
          {serviciosMunicipales.map((servicio) => (
            <Grid item xs={12} sm={6} md={4} key={servicio.title}>
              <Card
                component={RouterLink}
                to={servicio.path}
                sx={{
                  height: 260,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  position: 'relative',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: 4,
                  background: `linear-gradient(rgba(27,75,143,0.55), rgba(27,75,143,0.55)), url(${servicio.image}) center/cover no-repeat`,
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-6px) scale(1.03)',
                    boxShadow: 8,
                  },
                }}
              >
                <Box sx={{ p: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    {servicio.title}
                  </Typography>
                  <Typography variant="body2">
                    {servicio.description}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default Home 