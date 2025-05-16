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
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Paper,
} from '@mui/material';
import {
  Report,
  Phone,
  Email,
  Schedule,
  LocationOn,
  Send,
} from '@mui/icons-material';

const Denuncias = () => {
  const categorias = [
    'Aseo y Ornato',
    'Seguridad Ciudadana',
    'Construcción',
    'Ruidos Molestos',
    'Animales',
    'Otros',
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
          background: `linear-gradient(90deg, rgba(27,75,143,0.7) 60%, rgba(255,193,7,0.5) 100%), url('/images/services/denuncias.jpg') center/cover no-repeat`,
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <Box sx={{ p: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            Denuncias
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.95 }}>
            Reporta situaciones que afectan a la comunidad de Cholchol. Tu participación es clave para mejorar nuestro entorno.
          </Typography>
        </Box>
      </Paper>

      <Grid container spacing={4}>
        {/* Información General */}
        <Grid item xs={12}>
        </Grid>

        {/* Formulario de Denuncia */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Formulario de Denuncia
              </Typography>
              <Box component="form" noValidate autoComplete="off" sx={{ mt: 2 }}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Nombre Completo"
                      variant="outlined"
                      required
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="RUT"
                      variant="outlined"
                      required
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Teléfono"
                      variant="outlined"
                      required
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      variant="outlined"
                      type="email"
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth required>
                      <InputLabel>Categoría de Denuncia</InputLabel>
                      <Select
                        label="Categoría de Denuncia"
                        defaultValue=""
                      >
                        {categorias.map((categoria) => (
                          <MenuItem key={categoria} value={categoria}>
                            {categoria}
                          </MenuItem>
                        ))}
                      </Select>
                      <FormHelperText>
                        Seleccione la categoría que mejor describa su denuncia
                      </FormHelperText>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Dirección del Hecho"
                      variant="outlined"
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Descripción de la Denuncia"
                      variant="outlined"
                      multiline
                      rows={4}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      startIcon={<Send />}
                      fullWidth
                    >
                      Enviar Denuncia
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Información de Contacto */}
        <Grid item xs={12} md={4}>
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
                    secondary="denuncias@cholchol.cl"
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

          <Card sx={{ mt: 2 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Ubicación
              </Typography>
              <Typography paragraph>
                Oficina de Atención Ciudadana
              </Typography>
              <Typography paragraph>
                Municipalidad de Cholchol<br />
                Jose Joaquin Perez 449, Cholchol, Araucanía
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                fullWidth
                startIcon={<LocationOn />}
              >
                Ver en Mapa
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Denuncias; 