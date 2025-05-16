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
  Assignment,
  Event,
  Business,
  Construction,
  Phone,
  Email,
  Schedule,
  Info,
} from '@mui/icons-material';

const Permisos = () => {
  const permisos = [
    {
      titulo: 'Permiso de Eventos',
      descripcion: 'Autorización para realizar eventos públicos y actividades comunitarias.',
      icono: <Event />,
      categoria: 'Eventos',
      requisitos: [
        'Solicitud escrita',
        'Croquis del lugar',
        'Plan de seguridad',
        'Lista de asistentes estimada',
      ],
    },
    {
      titulo: 'Permiso de Construcción',
      descripcion: 'Autorización para realizar obras de construcción o modificación.',
      icono: <Construction />,
      categoria: 'Construcción',
      requisitos: [
        'Plano de la obra',
        'Especificaciones técnicas',
        'Certificado de dominio',
        'Cédula de identidad',
      ],
    },
    {
      titulo: 'Permiso Comercial',
      descripcion: 'Autorización para iniciar o modificar actividades comerciales.',
      icono: <Business />,
      categoria: 'Comercio',
      requisitos: [
        'Plan de negocio',
        'Croquis del local',
        'Cédula de identidad',
        'Certificado de residencia',
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
          background: `linear-gradient(90deg, rgba(27,75,143,0.7) 60%, rgba(255,193,7,0.5) 100%), url('/images/services/permisos.jpg') center/cover no-repeat`,
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <Box sx={{ p: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            Permisos Municipales
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.95 }}>
            Solicita y gestiona tus permisos municipales de manera ágil y transparente. Nuestro equipo te acompaña en cada paso.
          </Typography>
        </Box>
      </Paper>

      <Grid container spacing={4}>
        {/* Información General */}
        <Grid item xs={12}>
        </Grid>

        {/* Permisos Disponibles */}
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Permisos Disponibles
          </Typography>
          <Grid container spacing={3}>
            {permisos.map((permiso, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card>
                  <CardContent>
                    <Box display="flex" alignItems="center" mb={2}>
                      <Box mr={2} color="primary.main">
                        {permiso.icono}
                      </Box>
                      <Typography variant="h6">
                        {permiso.titulo}
                      </Typography>
                    </Box>
                    <Chip
                      label={permiso.categoria}
                      color="primary"
                      size="small"
                      sx={{ mb: 2 }}
                    />
                    <Typography paragraph>
                      {permiso.descripcion}
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                      Requisitos:
                    </Typography>
                    <List dense>
                      {permiso.requisitos.map((requisito, idx) => (
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
                      Solicitar Permiso
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
                    secondary="permisos@cholchol.cl"
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
                Oficina de Permisos Municipales
              </Typography>
              <Typography paragraph>
                Municipalidad de Cholchol<br />
                Jose Joaquin Perez 449, Cholchol, Araucanía
              </Typography>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                startIcon={<Assignment />}
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

export default Permisos; 