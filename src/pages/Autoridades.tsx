import React from 'react'
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import {
  Person,
  Email,
  Phone,
  Business,
  Description,
} from '@mui/icons-material'

const Autoridades: React.FC = () => {
  const autoridades = [
    {
      nombre: 'Alvaro Labraña',
      cargo: 'Alcalde',
      imagen: '/images/autoridades/alcalde.jpg',
      biografia: 'Alcalde de la Municipalidad de Cholchol desde 2024. Con amplia experiencia en gestión municipal y desarrollo comunitario.',
      contacto: {
        email: 'alcalde@municholchol.cl',
        telefono: '(45) 2 734200',
        oficina: 'Oficina de Alcaldía',
      },
    },
    {
      nombre: 'Bernardita Viscarra Astudillo',
      cargo: 'Concejal',
      imagen: '/images/autoridades/concejal1.jpg',
      biografia: 'Concejal de la Municipalidad de Cholchol desde 2024. Con amplia experiencia en gestión municipal y desarrollo comunitario.',
      contacto: {
        email: 'concejal@municholchol.cl',
        telefono: '(45) 2 734201',
        oficina: 'Oficina de Concejalía',
      },
    },
    {
      nombre: 'Diego Millao Collío',
      cargo: 'Concejal',
      imagen: '/images/autoridades/concejal2.jpg',
      biografia: 'Concejal de la Municipalidad de Cholchol desde 2024. Con amplia experiencia en gestión municipal y desarrollo comunitario.',
      contacto: {
        email: 'concejal@municholchol.cl',
        telefono: '(45) 2 734202',
        oficina: 'Oficina de Concejalía',
      },
    },
  ]

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
            Autoridades Municipales
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.95 }}>
            Conoce a quienes lideran la gestión y el desarrollo de Cholchol. Nuestro equipo está comprometido con el bienestar de la comunidad.
          </Typography>
        </Box>
      </Paper>

      <Paper
        elevation={0}
        sx={{
          p: 3,
          mb: 4,
          bgcolor: 'primary.main',
          color: 'white',
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Gobierno Local
        </Typography>
        <Typography variant="body1">
          Conozca a las autoridades que lideran la gestión municipal y trabajan
          por el desarrollo de nuestra comuna.
        </Typography>
      </Paper>

      <Grid container spacing={4}>
        {autoridades.map((autoridad) => (
          <Grid item xs={12} md={4} key={autoridad.nombre}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                },
              }}
            >
              <Box sx={{ width: '100%', height: 320, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#f5f5f5' }}>
                <CardMedia
                  component="img"
                  image={autoridad.imagen}
                  alt={autoridad.nombre}
                  sx={{ width: '100%', height: '100%', objectFit: 'cover', maxHeight: 320, maxWidth: 320 }}
                />
              </Box>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  {autoridad.nombre}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="primary"
                  gutterBottom
                >
                  {autoridad.cargo}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {autoridad.biografia}
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemIcon>
                      <Email color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary="Email"
                      secondary={autoridad.contacto.email}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <Phone color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary="Teléfono"
                      secondary="452 734200"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <Business color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary="Dirección"
                      secondary="José Joaquín Pérez, 449, Cholchol"
                    />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Autoridades 