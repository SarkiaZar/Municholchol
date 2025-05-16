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
  Divider,
  Box,
  Paper,
} from '@mui/material';
import {
  DirectionsCar,
  Schedule,
  LocationOn,
  Phone,
  Email,
  Description,
  CheckCircle,
  Warning,
} from '@mui/icons-material';

const RevisionTecnica = () => {
  const requisitos = [
    'Licencia de conducir vigente',
    'Certificado de inscripción en el Registro Nacional de Vehículos Motorizados',
    'Certificado de emisiones contaminantes (si aplica)',
    'Documentación del vehículo al día',
  ];

  const horarios = [
    { dia: 'Lunes a Viernes', horario: '08:30 - 17:30' },
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
          background: `linear-gradient(90deg, rgba(27,75,143,0.7) 60%, rgba(255,193,7,0.5) 100%), url('/images/services/revision-tecnica.jpg') center/cover no-repeat`,
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <Box sx={{ p: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            Revisión Técnica
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.95 }}>
            Agenda tu revisión técnica municipal de manera fácil y rápida. Garantiza la seguridad de tu vehículo y de la comunidad.
          </Typography>
        </Box>
      </Paper>

      <Grid container spacing={4}>
        {/* Información General */}
        {/* <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Bienvenidos a la Revisión Técnica
              </Typography>
              <Typography paragraph>
                Agenda tu revisión técnica municipal de manera fácil y rápida. Garantiza la seguridad de tu vehículo y de la comunidad.
              </Typography>
            </CardContent>
          </Card>
        </Grid> */}

        {/* Ubicación y Contacto */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Ubicación y Contacto
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <LocationOn color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Dirección"
                    secondary="Jose Joaquin Perez 449, Cholchol, Araucanía"
                  />
                </ListItem>
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
                    secondary="revisiontecnica@cholchol.cl"
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Requisitos */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Requisitos
              </Typography>
              <List>
                {requisitos.map((requisito, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <CheckCircle color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={requisito} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Horarios */}
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
            </CardContent>
          </Card>
        </Grid>

        {/* Proceso de Revisión */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Proceso de Revisión
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <Box textAlign="center" p={2}>
                    <DirectionsCar sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
                    <Typography variant="h6">1. Llegada</Typography>
                    <Typography>
                      Presente su vehículo en el centro de revisión técnica con la documentación requerida.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box textAlign="center" p={2}>
                    <Description sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
                    <Typography variant="h6">2. Inspección</Typography>
                    <Typography>
                      Su vehículo será inspeccionado por técnicos certificados.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box textAlign="center" p={2}>
                    <CheckCircle sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
                    <Typography variant="h6">3. Resultado</Typography>
                    <Typography>
                      Recibirá un certificado de aprobación o una lista de reparaciones necesarias.
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
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
              startIcon={<Schedule />}
              href="/agendar-revision"
            >
              Agendar Revisión Técnica
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RevisionTecnica; 