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
  Divider,
  Paper,
} from '@mui/material';
import {
  Business,
  People,
  School,
  HealthAndSafety,
  Work,
  Home,
  Phone,
  Email,
  Schedule,
  LocationOn,
} from '@mui/icons-material';

const UnidadesMunicipales = () => {
  const unidades = [
    {
      titulo: 'Dirección de Desarrollo Comunitario',
      descripcion: 'Encargada de coordinar y ejecutar programas sociales y comunitarios.',
      icono: <People />,
      jefe: 'Juan Pérez',
      telefono: '+56 9 1234 5678',
      email: 'dideco@cholchol.cl',
      ubicacion: 'Edificio Municipal, 1er piso',
    },
    {
      titulo: 'Dirección de Educación',
      descripcion: 'Gestiona los establecimientos educacionales municipales y programas educativos.',
      icono: <School />,
      jefe: 'María González',
      telefono: '+56 9 2345 6789',
      email: 'educacion@cholchol.cl',
      ubicacion: 'Edificio Municipal, 2do piso',
    },
    {
      titulo: 'Dirección de Salud',
      descripcion: 'Coordina los servicios de salud municipal y programas de prevención.',
      icono: <HealthAndSafety />,
      jefe: 'Dr. Carlos Rodríguez',
      telefono: '+56 9 3456 7890',
      email: 'salud@cholchol.cl',
      ubicacion: 'Centro de Salud Municipal',
    },
    {
      titulo: 'Dirección de Obras Municipales',
      descripcion: 'Gestiona proyectos de infraestructura y mantenimiento municipal.',
      icono: <Work />,
      jefe: 'Ing. Ana Martínez',
      telefono: '+56 9 4567 8901',
      email: 'obras@cholchol.cl',
      ubicacion: 'Edificio Municipal, 1er piso',
    },
    {
      titulo: 'Dirección de Vivienda',
      descripcion: 'Coordina programas de vivienda y desarrollo urbano.',
      icono: <Home />,
      jefe: 'Pedro Sánchez',
      telefono: '+56 9 5678 9012',
      email: 'vivienda@cholchol.cl',
      ubicacion: 'Edificio Municipal, 2do piso',
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
          background: 'linear-gradient(90deg, rgba(27,75,143,0.85) 60%, rgba(255,193,7,0.7) 100%)',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <Box sx={{ p: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            Unidades Municipales
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.95 }}>
            Descubre las áreas y equipos que trabajan día a día para el desarrollo y bienestar de la comuna de Cholchol.
          </Typography>
        </Box>
      </Paper>

      <Grid container spacing={4}>
        {/* Información General */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Bienvenidos a las Unidades Municipales
              </Typography>
              <Typography paragraph>
                El Municipio de Cholchol está organizado en diferentes unidades que trabajan
                para brindar los mejores servicios a la comunidad. Cada unidad tiene funciones
                específicas y está dirigida por profesionales especializados.
              </Typography>
              <Typography paragraph>
                Conozca más sobre cada unidad y cómo pueden ayudarle.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Unidades Disponibles */}
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Unidades Disponibles
          </Typography>
          <Grid container spacing={3}>
            {unidades.map((unidad, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card>
                  <CardContent>
                    <Box display="flex" alignItems="center" mb={2}>
                      <Box mr={2} color="primary.main">
                        {unidad.icono}
                      </Box>
                      <Typography variant="h6">
                        {unidad.titulo}
                      </Typography>
                    </Box>
                    <Typography paragraph>
                      {unidad.descripcion}
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    <List dense>
                      <ListItem>
                        <ListItemIcon>
                          <People color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText 
                          primary="Jefe de Unidad"
                          secondary={unidad.jefe}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <Phone color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText 
                          primary="Teléfono"
                          secondary={unidad.telefono}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <Email color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText 
                          primary="Email"
                          secondary={unidad.email}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <LocationOn color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText 
                          primary="Ubicación"
                          secondary={unidad.ubicacion}
                        />
                      </ListItem>
                    </List>
                    <Button
                      variant="outlined"
                      color="primary"
                      fullWidth
                      sx={{ mt: 2 }}
                    >
                      Contactar Unidad
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Información de Contacto General */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Información de Contacto General
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <Phone color="primary" />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Teléfono Central"
                        secondary="+56 9 1234 5678"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <Email color="primary" />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Email General"
                        secondary="contacto@cholchol.cl"
                      />
                    </ListItem>
                  </List>
                </Grid>
                <Grid item xs={12} md={6}>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <Schedule color="primary" />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Horario de Atención"
                        secondary="Lunes a Viernes: 08:30 - 17:30"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <LocationOn color="primary" />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Dirección"
                        secondary="Jose Joaquin Perez 449, Cholchol, Araucanía"
                      />
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UnidadesMunicipales; 