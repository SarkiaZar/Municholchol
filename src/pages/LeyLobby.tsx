import React from 'react'
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Divider,
} from '@mui/material'
import {
  Description,
  Assignment,
  Business,
  People,
  Event,
  Download,
} from '@mui/icons-material'

const LeyLobby: React.FC = () => {
  const registros = [
    {
      id: 1,
      fecha: '15 de Marzo, 2024',
      gestionado: 'Empresa Constructora XYZ',
      materia: 'Proyecto de Infraestructura Municipal',
      estado: 'En trámite',
    },
    {
      id: 2,
      fecha: '10 de Marzo, 2024',
      gestionado: 'Asociación Comercial Local',
      materia: 'Permisos de Comercio',
      estado: 'Aprobado',
    },
    {
      id: 3,
      fecha: '5 de Marzo, 2024',
      gestionado: 'ONG Desarrollo Comunitario',
      materia: 'Programa Social',
      estado: 'En revisión',
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
            Plataforma Ley Lobby
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.95 }}>
            Consulta los registros de gestión de intereses y conoce cómo se resguarda la probidad y transparencia en la Municipalidad de Cholchol.
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
          Información General
        </Typography>
        <Typography variant="body1">
          En cumplimiento con la Ley N° 20.730 sobre Lobby y Gestión de Intereses,
          la Municipalidad de Cholchol pone a disposición de la ciudadanía la
          información sobre las gestiones de intereses realizadas ante la
          municipalidad.
        </Typography>
      </Paper>

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Registro de Gestión de Intereses
              </Typography>
              <List>
                {registros.map((registro) => (
                  <React.Fragment key={registro.id}>
                    <ListItem>
                      <ListItemIcon>
                        <Business color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        primary={registro.materia}
                        secondary={
                          <>
                            <Typography
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              {registro.gestionado}
                            </Typography>
                            {` — ${registro.fecha} — Estado: ${registro.estado}`}
                          </>
                        }
                      />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                  </React.Fragment>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Documentos Relacionados
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <Description color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Ley N° 20.730"
                    secondary="Sobre Lobby y Gestión de Intereses"
                  />
                  <Button
                    startIcon={<Download />}
                    variant="outlined"
                    size="small"
                  >
                    Descargar
                  </Button>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Assignment color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Reglamento Interno"
                    secondary="Gestión de Intereses"
                  />
                  <Button
                    startIcon={<Download />}
                    variant="outlined"
                    size="small"
                  >
                    Descargar
                  </Button>
                </ListItem>
              </List>
            </CardContent>
          </Card>

          <Card sx={{ mt: 2 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Contacto
              </Typography>
              <Typography variant="body2" paragraph>
                Para más información sobre la gestión de intereses, contactar a:
              </Typography>
              <Box sx={{ pl: 2 }}>
                <Typography variant="body2">
                  <strong>Oficina de Transparencia</strong>
                </Typography>
                <Typography variant="body2">
                  Email: transparencia@municholchol.cl
                </Typography>
                <Typography variant="body2">
                  Teléfono: (45) 2 734200
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default LeyLobby 