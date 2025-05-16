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
  Description,
  Home,
  AttachMoney,
  Business,
  Phone,
  Email,
  Schedule,
  Info,
} from '@mui/icons-material';

const Certificados = () => {
  const certificados = [
    {
      titulo: 'Certificado de Residencia',
      descripcion: 'Documento que acredita su domicilio en la comuna.',
      icono: <Home />,
      categoria: 'Residencia',
      requisitos: [
        'Cédula de identidad',
        'Comprobante de domicilio',
        'Últimas 3 boletas de servicios',
      ],
    },
    {
      titulo: 'Certificado de Deudor No Deudor',
      descripcion: 'Documento que acredita que no posee deudas con la municipalidad.',
      icono: <AttachMoney />,
      categoria: 'Finanzas',
      requisitos: [
        'Cédula de identidad',
        'Certificado de residencia',
        'Últimas 3 boletas de contribuciones',
      ],
    },
    {
      titulo: 'Certificado de Antecedentes Comerciales',
      descripcion: 'Documento que acredita el historial comercial en la comuna.',
      icono: <Business />,
      categoria: 'Comercio',
      requisitos: [
        'Cédula de identidad',
        'Permiso de funcionamiento',
        'Últimas 3 patentes comerciales',
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
          background: `linear-gradient(90deg, rgba(27,75,143,0.7) 60%, rgba(255,193,7,0.5) 100%), url('/images/services/certificados.jpg') center/cover no-repeat`,
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <Box sx={{ p: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            Solicitud de Certificados
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.95 }}>
            Solicita tus certificados municipales de manera fácil y rápida. Estamos para ayudarte en cada gestión.
          </Typography>
        </Box>
      </Paper>

      <Grid container spacing={4}>
        {/* Certificados Disponibles */}
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Certificados Disponibles
          </Typography>
          <Grid container spacing={3}>
            {certificados.map((certificado, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card>
                  <CardContent>
                    <Box display="flex" alignItems="center" mb={2}>
                      <Box mr={2} color="primary.main">
                        {certificado.icono}
                      </Box>
                      <Typography variant="h6">
                        {certificado.titulo}
                      </Typography>
                    </Box>
                    <Chip
                      label={certificado.categoria}
                      color="primary"
                      size="small"
                      sx={{ mb: 2 }}
                    />
                    <Typography paragraph>
                      {certificado.descripcion}
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                      Requisitos:
                    </Typography>
                    <List dense>
                      {certificado.requisitos.map((requisito, idx) => (
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
                      Solicitar Certificado
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
                    secondary="certificados@cholchol.cl"
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
                Oficina de Certificados
              </Typography>
              <Typography paragraph>
                Municipalidad de Cholchol<br />
                Jose Joaquin Perez 449, Cholchol, Araucanía
              </Typography>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                startIcon={<Description />}
              >
                Consultar Estado
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Certificados; 