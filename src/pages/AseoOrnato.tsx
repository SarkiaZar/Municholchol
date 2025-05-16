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
  Delete,
  Park,
  CleaningServices,
  Recycling,
  Phone,
  Email,
  Schedule,
  Warning,
} from '@mui/icons-material';

const AseoOrnato = () => {
  const servicios = [
    {
      titulo: 'Recolección de Residuos',
      descripcion: 'Servicio de recolección de basura domiciliaria y reciclaje.',
      icono: <Delete />,
    },
    {
      titulo: 'Mantención de Áreas Verdes',
      descripcion: 'Cuidado y mantención de parques, plazas y áreas verdes públicas.',
      icono: <Park />,
    },
    {
      titulo: 'Limpieza de Calles',
      descripcion: 'Barrido y limpieza de calles y espacios públicos.',
      icono: <CleaningServices />,
    },
    {
      titulo: 'Programa de Reciclaje',
      descripcion: 'Gestión de residuos reciclables y educación ambiental.',
      icono: <Recycling />,
    },
  ];

  const horarios = [
    { dia: 'Lunes a Viernes', horario: '08:00 - 17:00' },
    { dia: 'Sábados', horario: '08:00 - 13:00' },
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
          background: `linear-gradient(90deg, rgba(27,75,143,0.7) 60%, rgba(255,193,7,0.5) 100%), url('/images/services/aseo-ornato.jpg') center/cover no-repeat`,
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <Box sx={{ p: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            Aseo y Ornato
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.95 }}>
            Trabajamos por una comuna limpia y ordenada. Descubre los servicios de aseo y ornato que ofrecemos para tu bienestar.
          </Typography>
        </Box>
      </Paper>

      <Grid container spacing={4}>
        {/* Información General */}
        <Grid item xs={12}>

        </Grid>

        {/* Servicios */}
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Servicios
          </Typography>
          <Grid container spacing={3}>
            {servicios.map((servicio, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card>
                  <CardContent>
                    <Box display="flex" alignItems="center" mb={2}>
                      <Box mr={2} color="primary.main">
                        {servicio.icono}
                      </Box>
                      <Typography variant="h6">
                        {servicio.titulo}
                      </Typography>
                    </Box>
                    <Typography paragraph>
                      {servicio.descripcion}
                    </Typography>
                    <Button
                      variant="outlined"
                      color="primary"
                      href={`/servicio/${index + 1}`}
                    >
                      Más Información
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Horarios de Recolección */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Horarios de Recolección
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
                * Los horarios pueden variar en días festivos
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Contacto y Denuncias */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Contacto y Denuncias
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
                    secondary="aseoyornato@cholchol.cl"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Warning color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Denuncias"
                    secondary="Reporte problemas de limpieza o mantención"
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
              href="/denuncia-aseo"
            >
              Reportar Problema de Aseo
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AseoOrnato; 