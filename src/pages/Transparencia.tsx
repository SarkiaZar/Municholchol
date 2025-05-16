import React from 'react'
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Paper,
} from '@mui/material'
import {
  Description,
  AttachMoney,
  Assignment,
  People,
  Business,
  School,
  HealthAndSafety,
  Public,
} from '@mui/icons-material'

const Transparencia: React.FC = () => {
  const secciones = [
    {
      titulo: 'Información Municipal',
      icono: <Business />,
      items: [
        'Estructura Orgánica',
        'Personal Municipal',
        'Presupuesto Municipal',
        'Planes y Programas',
      ],
    },
    {
      titulo: 'Finanzas',
      icono: <AttachMoney />,
      items: [
        'Presupuesto Anual',
        'Balance de Ejecución Presupuestaria',
        'Estado de Situación Financiera',
        'Informes de Auditoría',
      ],
    },
    {
      titulo: 'Contrataciones',
      icono: <Assignment />,
      items: [
        'Licitaciones Públicas',
        'Convenios',
        'Contratos',
        'Adquisiciones',
      ],
    },
    {
      titulo: 'Recursos Humanos',
      icono: <People />,
      items: [
        'Dotación Municipal',
        'Remuneraciones',
        'Convenios Colectivos',
        'Capacitaciones',
      ],
    },
    {
      titulo: 'Educación',
      icono: <School />,
      items: [
        'Programas Educativos',
        'Becas y Beneficios',
        'Infraestructura Escolar',
        'Actividades Culturales',
      ],
    },
    {
      titulo: 'Salud',
      icono: <HealthAndSafety />,
      items: [
        'Programas de Salud',
        'Centros de Salud',
        'Estadísticas',
        'Campanas de Vacunación',
      ],
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
            Transparencia Activa
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.95 }}>
            Accede a la información pública y conoce cómo gestionamos los recursos de nuestra comuna. La transparencia es nuestro compromiso contigo.
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
          Portal de Transparencia
        </Typography>
        <Typography variant="body1">
          En cumplimiento con la Ley de Transparencia, ponemos a disposición de la
          ciudadanía toda la información relevante sobre la gestión municipal,
          finanzas, contrataciones y servicios públicos.
        </Typography>
      </Paper>

      <Grid container spacing={4}>
        {secciones.map((seccion) => (
          <Grid item xs={12} md={6} lg={4} key={seccion.titulo}>
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
              <CardActionArea>
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
                      {seccion.icono}
                    </Box>
                    <Typography variant="h6" component="h2">
                      {seccion.titulo}
                    </Typography>
                  </Box>
                  <Divider sx={{ mb: 2 }} />
                  <List dense>
                    {seccion.items.map((item) => (
                      <ListItem key={item}>
                        <ListItemIcon>
                          <Description color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={item} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Documentos Importantes
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Plan de Desarrollo Comunal (PLADECO)
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Documento que establece la visión de desarrollo de la comuna para
                  los próximos años.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Presupuesto Municipal 2024
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Detalle del presupuesto municipal para el año 2024, incluyendo
                  ingresos y gastos planificados.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default Transparencia 