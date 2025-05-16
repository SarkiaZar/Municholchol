import React from 'react'
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Paper,
  Button,
} from '@mui/material'
import {
  Business,
  People,
  School,
  HealthAndSafety,
  Security,
  Public,
  Engineering,
  LocalLibrary,
  SportsSoccer,
  Agriculture,
} from '@mui/icons-material'

const Unidades: React.FC = () => {
  const unidades = [
    {
      titulo: 'Dirección de Desarrollo Comunitario',
      icono: <People />,
      descripcion: 'Gestiona programas sociales y desarrollo comunitario.',
      contacto: {
        email: 'dideco@municholchol.cl',
        telefono: '(45) 2 734200',
        horario: 'Lunes a Viernes: 8:30 - 14:00 hrs.',
      },
    },
    {
      titulo: 'Dirección de Educación',
      icono: <School />,
      descripcion: 'Administra establecimientos educacionales municipales.',
      contacto: {
        email: 'educacion@municholchol.cl',
        telefono: '(45) 2 734201',
        horario: 'Lunes a Viernes: 8:30 - 14:00 hrs.',
      },
    },
    {
      titulo: 'Dirección de Salud',
      icono: <HealthAndSafety />,
      descripcion: 'Coordina servicios de salud municipal.',
      contacto: {
        email: 'salud@municholchol.cl',
        telefono: '(45) 2 734202',
        horario: 'Lunes a Viernes: 8:30 - 14:00 hrs.',
      },
    },
    {
      titulo: 'Dirección de Seguridad Ciudadana',
      icono: <Security />,
      descripcion: 'Gestiona la seguridad y orden público.',
      contacto: {
        email: 'seguridad@municholchol.cl',
        telefono: '(45) 2 734203',
        horario: 'Lunes a Viernes: 8:30 - 14:00 hrs.',
      },
    },
    {
      titulo: 'Dirección de Obras Municipales',
      icono: <Engineering />,
      descripcion: 'Supervisa proyectos de infraestructura y obras públicas.',
      contacto: {
        email: 'obras@municholchol.cl',
        telefono: '(45) 2 734204',
        horario: 'Lunes a Viernes: 8:30 - 14:00 hrs.',
      },
    },
    {
      titulo: 'Dirección de Cultura y Turismo',
      icono: <LocalLibrary />,
      descripcion: 'Promueve actividades culturales y turísticas.',
      contacto: {
        email: 'cultura@municholchol.cl',
        telefono: '(45) 2 734205',
        horario: 'Lunes a Viernes: 8:30 - 14:00 hrs.',
      },
    },
    {
      titulo: 'Dirección de Deportes',
      icono: <SportsSoccer />,
      descripcion: 'Coordina actividades deportivas y recreativas.',
      contacto: {
        email: 'deportes@municholchol.cl',
        telefono: '(45) 2 734206',
        horario: 'Lunes a Viernes: 8:30 - 14:00 hrs.',
      },
    },
    {
      titulo: 'Dirección de Desarrollo Rural',
      icono: <Agriculture />,
      descripcion: 'Gestiona programas de desarrollo rural y agrícola.',
      contacto: {
        email: 'rural@municholchol.cl',
        telefono: '(45) 2 734207',
        horario: 'Lunes a Viernes: 8:30 - 14:00 hrs.',
      },
    },
  ]

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Unidades Municipales
      </Typography>

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
          Estructura Municipal
        </Typography>
        <Typography variant="body1">
          La Municipalidad de Cholchol cuenta con diversas unidades encargadas de
          gestionar y coordinar los servicios municipales para la comunidad.
        </Typography>
      </Paper>

      <Grid container spacing={4}>
        {unidades.map((unidad) => (
          <Grid item xs={12} md={6} key={unidad.titulo}>
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
              <CardContent>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 2,
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: 'primary.main',
                      color: 'white',
                      p: 1,
                      borderRadius: 1,
                      mr: 2,
                    }}
                  >
                    {unidad.icono}
                  </Box>
                  <Typography variant="h6" component="h2">
                    {unidad.titulo}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {unidad.descripcion}
                </Typography>
                <Divider sx={{ my: 2 }} />
                <List dense>
                  <ListItem>
                    <ListItemText
                      primary="Email"
                      secondary={unidad.contacto.email}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Teléfono"
                      secondary={unidad.contacto.telefono}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Horario de Atención"
                      secondary={unidad.contacto.horario}
                    />
                  </ListItem>
                </List>
                <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
                  <Button variant="outlined" size="small">
                    Ver más información
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Unidades 