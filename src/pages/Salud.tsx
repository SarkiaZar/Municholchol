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
  LocalHospital,
  Vaccines,
  PregnantWoman,
  ElderlyWoman,
  Psychology,
  Phone,
  Email,
  Schedule,
  EventAvailable,
} from '@mui/icons-material';

const Salud = () => {
  const programas = [
    {
      titulo: 'Atención Primaria',
      descripcion: 'Servicios de salud básicos y preventivos para toda la comunidad.',
      icono: <LocalHospital />,
    },
    {
      titulo: 'Programa de Vacunación',
      descripcion: 'Campañas de vacunación y control de enfermedades.',
      icono: <Vaccines />,
    },
    {
      titulo: 'Salud de la Mujer',
      descripcion: 'Atención ginecológica y programa de control prenatal.',
      icono: <PregnantWoman />,
    },
    {
      titulo: 'Adulto Mayor',
      descripcion: 'Programas especializados para la tercera edad.',
      icono: <ElderlyWoman />,
    },
    {
      titulo: 'Salud Mental',
      descripcion: 'Atención psicológica y programas de bienestar emocional.',
      icono: <Psychology />,
    },
  ];

  const horarios = [
    { dia: 'Lunes a Viernes', horario: '08:00 - 20:00' },
    { dia: 'Sábados', horario: '09:00 - 13:00' },
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
          background: `linear-gradient(90deg, rgba(27,75,143,0.7) 60%, rgba(0,191,165,0.5) 100%), url('/images/services/salud.jpg') center/cover no-repeat`,
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <Box sx={{ p: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            Salud Municipal
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.95 }}>
            Tu bienestar es nuestra prioridad. Descubre los servicios de salud que la Municipalidad de Cholchol pone a tu disposición para cuidar de ti y tu familia.
          </Typography>
        </Box>
      </Paper>

      <Typography variant="h3" component="h1" gutterBottom align="center" color="primary">
        Salud
      </Typography>

      <Grid container spacing={4}>
        {/* Información General */}
        {/* <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Bienvenidos a la Dirección de Salud
              </Typography>
              <Typography paragraph>
                Nuestra misión es promover y proteger la salud de todos los habitantes de Cholchol,
                brindando servicios de calidad y accesibles para toda la comunidad.
              </Typography>
              <Typography paragraph>
                Trabajamos para mejorar la calidad de vida de nuestros vecinos a través de
                programas preventivos y de atención integral.
              </Typography>
            </CardContent>
          </Card>
        </Grid> */}

        {/* Programas de Salud */}
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Programas de Salud
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
                      href={`/programa-salud/${index + 1}`}
                    >
                      Más Información
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Horarios de Atención */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Horarios de Atención
              </Typography>
              <List>
                {horarios.map((horario, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <Schedule color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary={horario.dia}
                      secondary={horario.horario}
                    />
                  </ListItem>
                ))}
              </List>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                * Para emergencias, el servicio está disponible las 24 horas
              </Typography>
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
                    secondary="salud@cholchol.cl"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LocalHospital color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Emergencias"
                    secondary="Línea directa: 131"
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
              href="/agendar-hora"
            >
              Agendar Hora Médica
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Salud; 