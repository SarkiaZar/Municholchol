import React from 'react'
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  Paper,
} from '@mui/material'
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab'
import { Event } from '@mui/icons-material'

const Historia: React.FC = () => {
  const eventosHistoricos = [
    {
      año: '1881',
      titulo: 'Fundación de Cholchol',
      descripcion: 'Fundación oficial de la comuna de Cholchol como parte del proceso de colonización de la Araucanía.',
      imagen: 'public/images/historia/fundacion.jpg',
    },
    {
      año: '1927',
      titulo: 'Creación de la Municipalidad',
      descripcion: 'Establecimiento de la primera municipalidad en Cholchol, marcando el inicio de la administración local.',
      imagen: 'public/images/historia/municipalidad.jpg',
    },
    {
      año: '1960',
      titulo: 'Terremoto y Reconstrucción',
      descripcion: 'El gran terremoto de 1960 afectó significativamente a la comuna, seguido por un proceso de reconstrucción.',
      imagen: 'public/images/historia/terremoto.jpg',
    },
    {
      año: '1990',
      titulo: 'Desarrollo Moderno',
      descripcion: 'Inicio de un período de desarrollo y modernización de la infraestructura municipal.',
      imagen: 'public/images/historia/desarrollo.jpg',
    },
    {
      año: '2020',
      titulo: 'Centenario',
      descripcion: 'Celebración del centenario de la municipalidad y reconocimiento a su historia y tradiciones.',
      imagen: 'public/images/historia/centenario.jpg',
    },
  ]

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper
        elevation={3}
        sx={{
          mb: 4,
          borderRadius: 2,
          overflow: 'hidden',
          position: 'relative',
          minHeight: 180,
          background: 'linear-gradient(90deg, rgba(27,75,143,0.85) 60%, rgba(255,193,7,0.7) 100%)',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <Box sx={{ p: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            Nuestra Historia
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.95 }}>
            Conoce el pasado y la identidad de Cholchol. Nuestra historia es el reflejo de la fuerza y la tradición de nuestra gente.
          </Typography>
        </Box>
      </Paper>

      {/* Galería de imágenes históricas */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {["historia.jpg", "historia2.jpg", "historia3.jpg", "historia4.jpg"].map((img, idx) => (
          <Grid item xs={12} sm={6} md={3} key={img}>
            <Card sx={{ borderRadius: 2, overflow: 'hidden', boxShadow: 2 }}>
              <CardMedia
                component="img"
                image={`/images/about/${img}`}
                alt={`Historia Cholchol ${idx + 1}`}
                sx={{ height: 180, objectFit: 'cover' }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h4" component="h1" gutterBottom>
        Historia de Cholchol
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardMedia
              component="img"
              height="400"
              image="public/images/historia/panorama.jpg"
              alt="Vista panorámica de Cholchol"
              sx={{ objectFit: 'cover' }}
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Orígenes y Desarrollo
              </Typography>
              <Typography variant="body1" paragraph>
                La comuna de Cholchol tiene sus raíces en la rica historia mapuche
                y el proceso de colonización de la Araucanía. Su nombre proviene
                del mapudungun y significa "agua clara", reflejando la pureza de
                sus recursos naturales.
              </Typography>
              <Typography variant="body1">
                A lo largo de los años, Cholchol ha mantenido su identidad
                cultural mientras se ha adaptado a los cambios y el desarrollo
                moderno, convirtiéndose en un importante centro de la región.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box sx={{ position: 'relative', height: '100%' }}>
            <Timeline sx={{
              p: 0,
              m: 0,
              '& .MuiTimelineItem-root': {
                flexDirection: { xs: 'row', sm: 'row', md: 'row' },
                minHeight: 'unset',
              },
              '& .MuiTimelineContent-root': {
                py: 0,
                px: 0,
                ml: { xs: 2, sm: 2, md: 0 },
                mr: 0,
              },
              '& .MuiTimelineSeparator-root': {
                minHeight: 0,
              },
              '& .MuiTimelineDot-root': {
                mx: { xs: 0, sm: 0, md: 'auto' },
              },
              '& .MuiTimelineConnector-root': {
                my: 0,
              },
            }}>
              {eventosHistoricos.map((evento, index) => (
                <TimelineItem key={evento.año} position={window.innerWidth < 600 ? 'right' : undefined}>
                  <TimelineSeparator>
                    <TimelineDot color="primary">
                      <Event />
                    </TimelineDot>
                    {index < eventosHistoricos.length - 1 && <TimelineConnector />}
                  </TimelineSeparator>
                  <TimelineContent sx={{ width: { xs: '100%', sm: '100%', md: 'auto' } }}>
                    <Paper
                      elevation={3}
                      sx={{
                        p: 0,
                        mb: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'stretch',
                        overflow: 'hidden',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          transition: 'transform 0.2s',
                        },
                      }}
                    >
                      <Box sx={{ width: '100%', height: 180, bgcolor: '#eee' }}>
                        <img
                          src={evento.imagen.replace('public/', '/')}
                          alt={evento.titulo}
                          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        />
                      </Box>
                      <Box sx={{ p: 2 }}>
                        <Typography variant="h6" color="primary">
                          {evento.año}
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                          {evento.titulo}
                        </Typography>
                        <Typography variant="body2">
                          {evento.descripcion}
                        </Typography>
                      </Box>
                    </Paper>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Historia 