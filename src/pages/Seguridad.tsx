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
  Security,
  LocalPolice,
  Warning,
  DirectionsCar,
  Phone,
  Email,
  Schedule,
  EventAvailable,
} from '@mui/icons-material';

const Seguridad = () => {
  const programas = [
    {
      titulo: 'Policía Municipal',
      descripcion: 'Servicio de vigilancia y control en la comuna.',
      icono: <LocalPolice />,
    },
    {
      titulo: 'Seguridad Vecinal',
      descripcion: 'Programas de prevención y seguridad comunitaria.',
      icono: <Security />,
    },
    {
      titulo: 'Control de Tránsito',
      descripcion: 'Fiscalización y control del tránsito vehicular.',
      icono: <DirectionsCar />,
    },
    {
      titulo: 'Emergencias',
      descripcion: 'Coordinación y respuesta a emergencias locales.',
      icono: <Warning />,
    },
  ];

  const numerosEmergencia = [
    {
      servicio: 'Carabineros',
      numero: '133',
    },
    {
      servicio: 'Bomberos',
      numero: '132',
    },
    {
      servicio: 'Ambulancia',
      numero: '131',
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
          background: `linear-gradient(90deg, rgba(27,75,143,0.7) 60%, rgba(255,193,7,0.5) 100%), url('/images/services/seguridad.jpg') center/cover no-repeat`,
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <Box sx={{ p: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            Seguridad Ciudadana
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.95 }}>
            Trabajamos por tu seguridad y la de tu familia. Conoce los programas y acciones para una comuna más segura.
          </Typography>
        </Box>
      </Paper>

      <Grid container spacing={4}>
        {/* Información General */}
        {/* <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Bienvenidos a la Dirección de Seguridad Ciudadana
              </Typography>
              <Typography paragraph>
                Nuestra misión es garantizar la seguridad y tranquilidad de todos los habitantes
                de Cholchol, trabajando en conjunto con la comunidad y las fuerzas de orden.
              </Typography>
              <Typography paragraph>
                Implementamos programas preventivos y de respuesta rápida para mantener
                nuestra comuna segura.
              </Typography>
            </CardContent>
          </Card>
        </Grid> */}

        {/* Programas de Seguridad */}
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Programas de Seguridad
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
                      href={`/programa-seguridad/${index + 1}`}
                    >
                      Más Información
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Números de Emergencia */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Números de Emergencia
              </Typography>
              <List>
                {numerosEmergencia.map((emergencia, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <Phone color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary={emergencia.servicio}
                      secondary={emergencia.numero}
                    />
                  </ListItem>
                ))}
              </List>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                * Estos números están disponibles las 24 horas del día
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
                    secondary="seguridad@cholchol.cl"
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
              startIcon={<Warning />}
              href="/denuncia-seguridad"
            >
              Reportar Incidente de Seguridad
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Seguridad; 