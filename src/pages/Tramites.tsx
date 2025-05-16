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
  Description,
  Assignment,
  Receipt,
  Business,
  Phone,
  Email,
  Schedule,
  EventAvailable,
} from '@mui/icons-material';

const Tramites = () => {
  const tramites = [
    {
      titulo: 'Permisos Municipales',
      descripcion: 'Solicitud de permisos para eventos, construcciones y actividades comerciales.',
      icono: <Assignment />,
      path: '/permisos',
    },
    {
      titulo: 'Pago de Impuestos',
      descripcion: 'Pago de patentes comerciales, permisos de circulación y otros impuestos municipales.',
      icono: <Receipt />,
      path: '/impuestos',
    },
    {
      titulo: 'Solicitud de Certificados',
      descripcion: 'Certificados de residencia, deudor no deudor y otros documentos oficiales.',
      icono: <Description />,
      path: '/certificados',
    },
    {
      titulo: 'Denuncias',
      descripcion: 'Formulario para reportar problemas o irregularidades en la comuna.',
      icono: <Business />,
      path: '/denuncias',
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
          background: `linear-gradient(90deg, rgba(27,75,143,0.7) 60%, rgba(255,193,7,0.5) 100%), url('/images/services/tramites.jpg') center/cover no-repeat`,
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <Box sx={{ p: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            Trámites en Línea
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.95 }}>
            Realiza tus trámites municipales de forma rápida, segura y desde cualquier lugar. Estamos aquí para facilitar tu gestión.
          </Typography>
        </Box>
      </Paper>

      <Grid container spacing={4}>
        {/* Información General */}
        <Grid item xs={12}>
        </Grid>

        {/* Trámites Disponibles */}
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Trámites Disponibles
          </Typography>
          <Grid container spacing={3}>
            {tramites.map((tramite, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card>
                  <CardContent>
                    <Box display="flex" alignItems="center" mb={2}>
                      <Box mr={2} color="primary.main">
                        {tramite.icono}
                      </Box>
                      <Typography variant="h6">
                        {tramite.titulo}
                      </Typography>
                    </Box>
                    <Typography paragraph>
                      {tramite.descripcion}
                    </Typography>
                    <Button
                      variant="outlined"
                      color="primary"
                      href={tramite.path}
                    >
                      Realizar Trámite
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
                    secondary="tramites@cholchol.cl"
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
                    primary="Documentación Específica"
                    secondary="Según el tipo de trámite"
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
              href="/ayuda-tramites"
            >
              ¿Necesitas Ayuda con tus Trámites?
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Tramites; 