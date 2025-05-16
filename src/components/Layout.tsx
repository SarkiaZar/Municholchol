import React, { useState } from 'react'
import {
  Box,
  Container,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Menu,
  MenuItem,
  Collapse,
  ListItemIcon,
  Grid,
  Divider,
  Paper,
} from '@mui/material'
import {
  Menu as MenuIcon,
  ExpandLess,
  ExpandMore,
  Home,
  Newspaper,
  Business,
  ContactMail,
  Public,
  Description,
  Email,
  People,
  Search,
  Notifications,
  Language,
  Phone,
} from '@mui/icons-material'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import SocialMediaButtons from './SocialMediaButtons'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null)
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const location = useLocation()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>, menuText: string) => {
    setMenuAnchorEl(event.currentTarget)
    setOpenSubMenu(menuText)
  }

  const handleMenuClose = () => {
    setMenuAnchorEl(null)
    setOpenSubMenu(null)
  }

  const handleSubMenuClick = (menu: string) => {
    setOpenSubMenu(openSubMenu === menu ? null : menu)
  }

  const menuItems = [
    {
      text: 'Inicio',
      path: '/',
      icon: <Home />,
    },
    {
      text: 'Noticias',
      path: '/noticias',
      icon: <Newspaper />,
    },
    {
      text: 'Municipio',
      icon: <Business />,
      subItems: [
        { text: 'Transparencia Activa', path: '/transparencia' },
        { text: 'Plataforma Ley Lobby', path: '/ley-lobby' },
        { text: 'Unidades Municipales', path: '/unidades' },
        { text: 'Autoridades', path: '/autoridades' },
        { text: 'Historia', path: '/historia' },
      ],
    },
    {
      text: 'Servicios',
      icon: <Description />,
      subItems: [
        { text: 'Trámites en Línea', path: '/tramites' },
        { text: 'Permisos Municipales', path: '/permisos' },
        { text: 'Pago de Impuestos', path: '/impuestos' },
        { text: 'Solicitud de Certificados', path: '/certificados' },
        { text: 'Denuncias', path: '/denuncias' },
        { text: 'Programas Sociales', path: '/programas-sociales' },
        { text: 'Asistencia Social', path: '/asistencia-social' },
        { text: 'Aseo y Ornato', path: '/aseo-ornato' },
        { text: 'Salud', path: '/salud' },
        { text: 'Educación', path: '/educacion' },
        { text: 'Seguridad Ciudadana', path: '/seguridad' },
        { text: 'Revisión Técnica', path: '/revision-tecnica' },
      ],
    },
    {
      text: 'Webmail',
      path: '/webmail',
      icon: <Email />,
    },
    {
      text: 'Contacto',
      path: '/contacto',
      icon: <ContactMail />,
    },
  ]

  const renderMenuItem = (item: any, isMobile: boolean) => {
    if (item.subItems) {
      return (
        <React.Fragment key={item.text}>
          <ListItem
            button
            onClick={(e) => isMobile ? handleSubMenuClick(item.text) : handleMenuClick(e, item.text)}
            sx={{
              backgroundColor: location.pathname.startsWith(`/${item.text.toLowerCase()}`)
                ? 'rgba(255, 255, 255, 0.1)'
                : 'transparent',
            }}
          >
            <ListItemIcon sx={{ color: 'inherit' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
            {isMobile ? (
              openSubMenu === item.text ? <ExpandLess /> : <ExpandMore />
            ) : null}
          </ListItem>
          {isMobile && (
            <Collapse in={openSubMenu === item.text} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {item.subItems.map((subItem: any) => (
                  <ListItem
                    key={subItem.text}
                    button
                    component={RouterLink}
                    to={subItem.path}
                    sx={{ pl: 4 }}
                  >
                    <ListItemText primary={subItem.text} />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          )}
        </React.Fragment>
      )
    }

    return (
      <ListItem
        key={item.text}
        button
        component={RouterLink}
        to={item.path}
        onClick={handleDrawerToggle}
        sx={{
          backgroundColor: location.pathname === item.path
            ? 'rgba(255, 255, 255, 0.1)'
            : 'transparent',
        }}
      >
        <ListItemIcon sx={{ color: 'inherit' }}>{item.icon}</ListItemIcon>
        <ListItemText primary={item.text} />
      </ListItem>
    )
  }

  const drawer = (
    <Box sx={{ width: 280 }}>
      <Box sx={{ p: 2, bgcolor: 'primary.main', color: 'white' }}>
        <Typography variant="h6">Municipalidad de Cholchol</Typography>
      </Box>
      <List>{menuItems.map((item) => renderMenuItem(item, true))}</List>
    </Box>
  )

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        position: 'relative',
        ...(location.pathname !== '/' && {
          // Fondo solo en páginas que no sean la principal
          backgroundImage: `linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url('/images/background/cholchol.jpg')`,
          backgroundSize: '30%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }),
      }}
    >
      <AppBar 
        position="sticky" 
        color="primary"
        elevation={0}
        sx={{
          borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            )}
            <Typography
              variant="h6"
              component={RouterLink}
              to="/"
              sx={{
                flexGrow: 1,
                textDecoration: 'none',
                color: 'inherit',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Box sx={{ bgcolor: 'white', borderRadius: '50%', p: 1, boxShadow: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 90, width: 90 }}>
                <img
                  src="/images/header/logo.png"
                  alt="Logo Municipalidad de Cholchol"
                  style={{ height: 70, width: 70, objectFit: 'contain', display: 'block' }}
                />
              </Box>
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                  Municipalidad de Cholchol
                </Typography>
                <Typography variant="subtitle2" sx={{ opacity: 0.8 }}>
                  Comuna de Cholchol, Región de La Araucanía
                </Typography>
              </Box>
            </Typography>

            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 1 }}>
                {menuItems.map((item) => {
                  if (item.subItems) {
                    return (
                      <Button
                        key={item.text}
                        color="inherit"
                        onClick={(e) => handleMenuClick(e, item.text)}
                        startIcon={item.icon}
                        sx={{
                          '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          },
                        }}
                      >
                        {item.text}
                      </Button>
                    )
                  }
                  return (
                    <Button
                      key={item.text}
                      color="inherit"
                      component={RouterLink}
                      to={item.path}
                      startIcon={item.icon}
                      sx={{
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        },
                      }}
                    >
                      {item.text}
                    </Button>
                  )
                })}
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Menu
        anchorEl={menuAnchorEl}
        open={Boolean(menuAnchorEl)}
        onClose={handleMenuClose}
        PaperProps={{
          elevation: 3,
          sx: {
            mt: 1.5,
            minWidth: 250,
            borderRadius: 2,
          },
        }}
      >
        {menuItems
          .find((item) => item.text === openSubMenu)
          ?.subItems?.map((subItem) => (
            <MenuItem
              key={subItem.text}
              component={RouterLink}
              to={subItem.path}
              onClick={handleMenuClose}
              sx={{
                py: 1.5,
                '&:hover': {
                  backgroundColor: 'rgba(25, 118, 210, 0.08)',
                },
              }}
            >
              {subItem.text}
            </MenuItem>
          ))}
      </Menu>

      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 280,
          },
        }}
      >
        {drawer}
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>

      <Box
        component="footer"
        sx={{
          py: 5,
          px: 2,
          mt: 'auto',
          background: 'linear-gradient(90deg, #1B4B8F 60%, #E65100 100%)',
          color: 'white',
          position: 'relative',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="flex-start">
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Box sx={{ bgcolor: 'white', borderRadius: '50%', p: 1, mr: 2, boxShadow: 2 }}>
                  <img src="/images/header/logo.png" alt="Logo Municipalidad de Cholchol" style={{ height: 48, width: 48, objectFit: 'contain', display: 'block' }} />
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white' }}>
                    Municipalidad de Cholchol
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                    José Joaquín Pérez, 449, Cholchol
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Email sx={{ mr: 1, color: 'secondary.main' }} />
                <Typography variant="body2">oficinadepartes@municholchol.cl</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Phone sx={{ mr: 1, color: 'secondary.main' }} />
                <Typography variant="body2">(45) 2 734200</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Enlaces Rápidos
              </Typography>
              <List dense>
                <ListItem disablePadding>
                  <ListItemIcon sx={{ color: 'white', minWidth: 32 }}><Description /></ListItemIcon>
                  <ListItemText
                    primary={<RouterLink to="/transparencia" style={{ color: 'white', textDecoration: 'none' }}>Transparencia Activa</RouterLink>}
                  />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon sx={{ color: 'white', minWidth: 32 }}><Public /></ListItemIcon>
                  <ListItemText
                    primary={<RouterLink to="/ley-lobby" style={{ color: 'white', textDecoration: 'none' }}>Plataforma Ley Lobby</RouterLink>}
                  />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon sx={{ color: 'white', minWidth: 32 }}><People /></ListItemIcon>
                  <ListItemText
                    primary={<RouterLink to="/unidades" style={{ color: 'white', textDecoration: 'none' }}>Unidades Municipales</RouterLink>}
                  />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Horario de Atención
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                Lunes a Viernes: 8:30 - 14:00 hrs.<br />Sábados: 9:00 - 13:00 hrs.
              </Typography>
              <Box sx={{ mt: 2, display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' } }}>
                <img src="/images/header/logo2.png" alt="Logo Municipalidad de Cholchol 2" style={{ height: 100, width: 'auto', display: 'block', filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.2))' }} />
              </Box>
            </Grid>
          </Grid>
          <Divider sx={{ my: 3, borderColor: 'rgba(255,255,255,0.2)' }} />
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
              © {new Date().getFullYear()} Municipalidad de Cholchol. Todos los derechos reservados.
            </Typography>
          </Box>
        </Container>
      </Box>
      <SocialMediaButtons />
    </Box>
  )
}

export default Layout 