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
  AttachMoney,
  Receipt,
  DirectionsCar,
  Business,
  Phone,
  Email,
  Schedule,
  Info,
} from '@mui/icons-material';
import { useEffect, useState } from 'react';

const Impuestos = () => {
  const impuestos = [
    {
      titulo: 'Permiso de Circulación',
      descripcion: 'Pago anual del permiso de circulación para vehículos.',
      icono: <DirectionsCar />,
      categoria: 'Vehículos',
      requisitos: [
        'Cédula de identidad',
        'Certificado de dominio del vehículo',
        'Certificado de revisión técnica',
      ],
    },
    {
      titulo: 'Patente Comercial',
      descripcion: 'Pago anual de patente para actividades comerciales.',
      icono: <Business />,
      categoria: 'Comercio',
      requisitos: [
        'Cédula de identidad',
        'Permiso de funcionamiento',
        'Declaración de ingresos',
      ],
    },
    {
      titulo: 'Contribuciones',
      descripcion: 'Pago de contribuciones de bienes raíces.',
      icono: <Receipt />,
      categoria: 'Propiedades',
      requisitos: [
        'Cédula de identidad',
        'Certificado de avalúo fiscal',
        'Boleta de contribuciones',
      ],
    },
  ];

  const [destacarCirculacion, setDestacarCirculacion] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('destacarPermisoCirculacion')) {
      setDestacarCirculacion(true);
      localStorage.removeItem('destacarPermisoCirculacion');
      setTimeout(() => setDestacarCirculacion(false), 1000);
    }
  }, []);

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
          background: `linear-gradient(90deg, rgba(27,75,143,0.7) 60%, rgba(255,193,7,0.5) 100%), url('/images/services/impuestos.jpg') center/cover no-repeat`,
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <Box sx={{ p: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            Pago de Impuestos
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.95 }}>
            Realiza el pago de tus impuestos municipales de forma segura y contribuye al desarrollo de Cholchol.
          </Typography>
        </Box>
      </Paper>

      <Grid container spacing={4}>
        {/* Información General */}
        <Grid item xs={12}>
        </Grid>

        {/* Impuestos Disponibles */}
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Impuestos Disponibles
          </Typography>
          <Grid container spacing={3}>
            {impuestos.map((impuesto, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card
                  sx={
                    impuesto.titulo === 'Permiso de Circulación' && destacarCirculacion
                      ? {
                          border: '4px solid',
                          borderImage: 'linear-gradient(90deg, #1b4b8f, #ffc107, #1bcfcf) 1',
                          boxShadow: '0 0 16px 2px #1b4b8f55',
                          transition: 'border 0.5s, box-shadow 0.5s',
                        }
                      : { transition: 'border 0.5s, box-shadow 0.5s' }
                  }
                >
                  <CardContent>
                    <Box display="flex" alignItems="center" mb={2}>
                      <Box mr={2} color="primary.main">
                        {impuesto.icono}
                      </Box>
                      <Typography variant="h6">
                        {impuesto.titulo}
                      </Typography>
                    </Box>
                    <Chip
                      label={impuesto.categoria}
                      color="primary"
                      size="small"
                      sx={{ mb: 2 }}
                    />
                    <Typography paragraph>
                      {impuesto.descripcion}
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                      Requisitos:
                    </Typography>
                    <List dense>
                      {impuesto.requisitos.map((requisito, idx) => (
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
                      Realizar Pago
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
                    secondary="tesoreria@cholchol.cl"
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
                Municipalidad de Cholchol<br />
                Jose Joaquin Perez 449, Cholchol, Araucanía
              </Typography>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                startIcon={<AttachMoney />}
              >
                Consultar Deuda
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Impuestos; 