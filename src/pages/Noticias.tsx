import React from 'react'
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Box,
  Chip,
  Pagination,
  TextField,
  InputAdornment,
} from '@mui/material'
import { Search as SearchIcon } from '@mui/icons-material'

const Noticias: React.FC = () => {
  const [page, setPage] = React.useState(1)
  const [searchQuery, setSearchQuery] = React.useState('')

  // Datos de ejemplo para las noticias
  const noticias = [
    {
      id: 1,
      titulo: 'Inauguración del Nuevo Centro Comunitario',
      fecha: '15 de Marzo, 2024',
      categoria: 'Infraestructura',
      imagen: '/images/news/noticia-1.jpg',
      resumen: 'La Municipalidad de Cholchol inauguró el nuevo centro comunitario que beneficiará a más de 500 familias del sector.',
    },
    {
      id: 2,
      titulo: 'Programa de Reciclaje Municipal',
      fecha: '10 de Marzo, 2024',
      categoria: 'Medio Ambiente',
      imagen: '/images/news/noticia-2.jpg',
      resumen: 'Se implementa nuevo programa de reciclaje en la comuna con puntos de acopio en diferentes sectores.',
    },
    {
      id: 3,
      titulo: 'Mejoras infraestructuras',
      fecha: '5 de Marzo, 2024',
      categoria: 'Cultura',
      imagen: '/images/news/noticia-3.jpg',
      resumen: 'Inicio de obras de mejoramiento en las principales calles de la comuna.',
    },
    // Agregar más noticias según sea necesario
  ]

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Noticias
      </Typography>

      <Box sx={{ mb: 4 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Buscar noticias..."
          value={searchQuery}
          onChange={handleSearchChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Grid container spacing={4}>
        {noticias.map((noticia) => (
          <Grid item xs={12} md={6} lg={4} key={noticia.id}>
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
                <CardMedia
                  component="img"
                  height="200"
                  image={noticia.imagen}
                  alt={noticia.titulo}
                />
                <CardContent>
                  <Box sx={{ mb: 2 }}>
                    <Chip
                      label={noticia.categoria}
                      size="small"
                      color="primary"
                      sx={{ mr: 1 }}
                    />
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      component="span"
                    >
                      {noticia.fecha}
                    </Typography>
                  </Box>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h2"
                    sx={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                    }}
                  >
                    {noticia.titulo}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                    }}
                  >
                    {noticia.resumen}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
        <Pagination
          count={5}
          page={page}
          onChange={handlePageChange}
          color="primary"
          size="large"
        />
      </Box>
    </Container>
  )
}

export default Noticias 