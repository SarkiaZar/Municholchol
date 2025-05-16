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
  Chip,
  Paper,
} from '@mui/material';
import {
  People,
  School,
  HealthAndSafety,
  Work,
  Home,
  Phone,
  Email,
  Schedule,
  Info,
} from '@mui/icons-material';

const ProgramasSociales = () => {
  const programas = [
    {
      titulo: 'Programa de Vivienda',
      descripcion: 'Apoyo para familias en situación de vulnerabilidad para acceder a vivienda digna.',
      icono: <Home />,
      categoria: 'Vivienda',
      requisitos: [
        'Ser residente de la comuna',
        'No ser propietario de vivienda',
        'Ingresos bajo el límite establecido',
      ],
    },
    {
      titulo: 'Becas Municipales',
      descripcion: 'Apoyo económico para estudiantes de la comuna.',
      icono: <School />,
      categoria: 'Educación',
      requisitos: [
        'Ser estudiante regular',
        'Promedio mínimo 5.5',
        'Ser residente de la comuna',
      ],
    },
    {
      titulo: 'Programa de Salud',
      descripcion: 'Atención médica y dental gratuita para grupos vulnerables.',
      icono: <HealthAndSafety />,
      categoria: 'Salud',
      requisitos: [
        'Ser residente de la comuna',
        'No tener previsión de salud',
        'Pertenecer a grupo vulnerable',
      ],
    },
    {
      titulo: 'Capacitación Laboral',
      descripcion: 'Cursos y talleres para mejorar la empleabilidad.',
      icono: <Work />,
      categoria: 'Empleo',
      requisitos: [
        'Ser mayor de 18 años',
        'Ser residente de la comuna',
        'Estar desempleado',
      ],
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
          background: `linear-gradient(90deg, rgba(27,75,143,0.7) 60%, rgba(255,193,7,0.5) 100%), url('/images/services/programas-sociales.jpg') center/cover no-repeat`,
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <Box sx={{ p: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            Programas Sociales
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.95 }}>
            Descubre los programas sociales que la Municipalidad de Cholchol tiene para ti y tu familia. ¡Estamos para apoyarte!
          </Typography>
        </Box>
      </Paper>

      <Grid container spacing={4}>
        {/* Información General */}
        {/* <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Bienvenidos a los Programas Sociales
              </Typography>
              <Typography paragraph>
                El Municipio de Cholchol ofrece diversos programas sociales para apoyar a los
                vecinos de la comuna. Nuestro objetivo es mejorar la calidad de vida de todos
                los habitantes a través de iniciativas en diferentes áreas.
              </Typography>
              <Typography paragraph>
                Todos los programas están diseñados para ser accesibles y responder a las
                necesidades reales de la comunidad.
              </Typography>
            </CardContent>
          </Card>
        </Grid> */}

        {/* Programas Disponibles */}
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Programas Disponibles
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
                    <Chip
                      label={programa.categoria}
                      color="primary"
                      size="small"
                      sx={{ mb: 2 }}
                    />
                    <Typography paragraph>
                      {programa.descripcion}
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                      Requisitos:
                    </Typography>
                    <List dense>
                      {programa.requisitos.map((requisito, idx) => (
                        <ListItem key={idx}>
                          <ListItemIcon>
                            <Info color="primary" fontSize="small" />
                          </ListItemIcon>
                          <ListItemText primary={requisito} />
                        </ListItem>
                      ))}
                    </List>
                    <Button
                      variant="outlined"
                      color="primary"
                      fullWidth
                      sx={{ mt: 2 }}
                    >
                      Postular al Programa
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Información de Contacto */}
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
                    secondary="programas@cholchol.cl"
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

        {/* Ubicación */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Ubicación
              </Typography>
              <Typography paragraph>
                Oficina de Programas Sociales
              </Typography>
              <Typography paragraph>
                Municipalidad de Cholchol<br />
                Jose Joaquin Perez 449, Cholchol, Araucanía
              </Typography>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                startIcon={<People />}
              >
                Agendar Cita
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProgramasSociales; 