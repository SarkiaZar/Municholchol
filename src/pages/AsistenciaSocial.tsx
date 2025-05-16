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
  People,
  School,
  Home,
  HealthAndSafety,
  Work,
  Description,
  Phone,
  Email,
} from '@mui/icons-material';

const AsistenciaSocial = () => {
  const programas = [
    {
      titulo: 'Programa de Subsidios Habitacionales',
      descripcion: 'Apoyo para familias que necesitan mejorar sus condiciones de vivienda.',
      icono: <Home />,
    },
    {
      titulo: 'Programa de Apoyo Escolar',
      descripcion: 'Becas y materiales escolares para estudiantes de escasos recursos.',
      icono: <School />,
    },
    {
      titulo: 'Programa de Salud Familiar',
      descripcion: 'Atención médica y dental para familias vulnerables.',
      icono: <HealthAndSafety />,
    },
    {
      titulo: 'Programa de Empleo',
      descripcion: 'Capacitación y oportunidades laborales para la comunidad.',
      icono: <Work />,
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
          background: `linear-gradient(90deg, rgba(27,75,143,0.7) 60%, rgba(255,193,7,0.5) 100%), url('/images/services/asistencia-social.jpg') center/cover no-repeat`,
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <Box sx={{ p: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            Asistencia Social
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.95 }}>
            Apoyamos a las familias de Cholchol en situación de vulnerabilidad. Conoce los servicios y ayudas disponibles para ti.
          </Typography>
        </Box>
      </Paper>

      <Grid container spacing={4}>
        {/* Información General */}
        {/* <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Bienvenidos a la Dirección de Asistencia Social
              </Typography>
              <Typography paragraph>
                Nuestra misión es mejorar la calidad de vida de los habitantes de Cholchol a través de
                programas sociales que promuevan el desarrollo integral de las familias y la comunidad.
              </Typography>
              <Typography paragraph>
                Trabajamos para brindar apoyo a las familias más vulnerables, promoviendo su desarrollo
                y bienestar social.
              </Typography>
            </CardContent>
          </Card>
        </Grid> */}

        {/* Programas Sociales */}
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Programas Sociales
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
                      startIcon={<Description />}
                      href={`/programa/${index + 1}`}
                    >
                      Más Información
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Requisitos Generales */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Requisitos Generales
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <Description color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Cédula de Identidad"
                    secondary="Documento de identidad vigente"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Description color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Certificado de Residencia"
                    secondary="Comprobante de domicilio actual"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Description color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Certificado de Ingresos"
                    secondary="Comprobante de ingresos familiares"
                  />
                </ListItem>
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
                    secondary="asistenciasocial@cholchol.cl"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <People color="primary" />
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
              startIcon={<Description />}
              href="/solicitud-asistencia"
            >
              Solicitar Asistencia Social
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AsistenciaSocial; 