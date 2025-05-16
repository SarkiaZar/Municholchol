import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Paper,
} from '@mui/material';
import {
  School,
  MenuBook,
  SportsSoccer,
  MusicNote,
  Computer,
  Phone,
  Email,
  Schedule,
  EventAvailable,
} from '@mui/icons-material';

const Educacion = () => {
  const programas = [
    {
      titulo: 'Educación Básica',
      descripcion: 'Programas educativos para estudiantes de enseñanza básica.',
      icono: <School />,
    },
    {
      titulo: 'Biblioteca Municipal',
      descripcion: 'Servicio de préstamo de libros y sala de estudio.',
      icono: <MenuBook />,
    },
    {
      titulo: 'Deportes Escolares',
      descripcion: 'Actividades deportivas y recreativas para estudiantes.',
      icono: <SportsSoccer />,
    },
    {
      titulo: 'Talleres Artísticos',
      descripcion: 'Clases de música, arte y danza para niños y jóvenes.',
      icono: <MusicNote />,
    },
    {
      titulo: 'Programa de Computación',
      descripcion: 'Talleres de informática y tecnología para la comunidad.',
      icono: <Computer />,
    },
  ];

  const establecimientos = [
    {
      nombre: 'Escuela Básica Municipal',
      direccion: 'Jose Joaquin Perez 449, Cholchol, Araucanía',
      telefono: '+56 9 1234 5678',
    },
    {
      nombre: 'Liceo Municipal',
      direccion: 'Jose Joaquin Perez 449, Cholchol, Araucanía',
      telefono: '+56 9 8765 4321',
    },
  ];

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
          background: `linear-gradient(90deg, rgba(27,75,143,0.7) 60%, rgba(255,193,7,0.5) 100%), url('/images/services/educacion.jpg') center/cover no-repeat`,
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <Box sx={{ p: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            Educación
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.95 }}>
            Impulsamos el desarrollo educativo de la comuna. Conoce los programas y apoyos disponibles para estudiantes y familias.
          </Typography>
        </Box>
      </Paper>

      <Grid container spacing={4}>
        {/* Información General */}
        {/* <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Bienvenidos a la Dirección de Educación
              </Typography>
              <Typography paragraph>
                Nuestra misión es proporcionar una educación de calidad e inclusiva para todos
                los habitantes de Cholchol, promoviendo el desarrollo integral de nuestros estudiantes.
              </Typography>
              <Typography paragraph>
                Trabajamos para crear oportunidades de aprendizaje y crecimiento para toda la comunidad.
              </Typography>
            </CardContent>
          </Card>
        </Grid> */}

        {/* Programas Educativos */}
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Programas Educativos
          </Typography>
          <Grid container spacing={3}>
            {programas.map((programa, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card>
                  <CardContent>
                    <Box display="flex" alignItems="center" mb={2}>
                      <Box mr={2} color="primary.main">
                        {programa.icono}
                      </Box>
                      <Typography variant="h6">
                        {programa.titulo}
                      </Typography>
                    </Box>
                    <Typography paragraph>
                      {programa.descripcion}
                    </Typography>
                    <Button
                      variant="outlined"
                      color="primary"
                      href={`/programa-educativo/${index + 1}`}
                    >
                      Más Información
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Establecimientos Educativos */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Establecimientos Educativos
              </Typography>
              <List>
                {establecimientos.map((establecimiento, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <School color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary={establecimiento.nombre}
                      secondary={
                        <>
                          <Typography component="span" variant="body2">
                            {establecimiento.direccion}
                          </Typography>
                          <br />
                          <Typography component="span" variant="body2">
                            Tel: {establecimiento.telefono}
                          </Typography>
                        </>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Contacto */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Contacto
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <Phone color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Teléfono"
                    secondary="+56 9 1234 5678"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Email color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Email"
                    secondary="educacion@cholchol.cl"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Schedule color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Horario de Atención"
                    secondary="Lunes a Viernes: 08:30 - 17:30"
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* CTA */}
        <Grid item xs={12}>
          <Box textAlign="center" mt={4}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<EventAvailable />}
              href="/inscripcion-programas"
            >
              Inscribirse en Programas Educativos
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Educacion; 