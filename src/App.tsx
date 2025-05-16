import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material'
import Layout from './components/Layout'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Noticias from './pages/Noticias'
import Transparencia from './pages/Transparencia'
import Tramites from './pages/Tramites'
import WebMail from './pages/WebMail'
import LeyLobby from './pages/LeyLobby'
import Unidades from './pages/Unidades'
import Autoridades from './pages/Autoridades'
import Historia from './pages/Historia'
import AsistenciaSocial from './pages/AsistenciaSocial'
import AseoOrnato from './pages/AseoOrnato'
import Salud from './pages/Salud'
import Educacion from './pages/Educacion'
import Seguridad from './pages/Seguridad'
import RevisionTecnica from './pages/RevisionTecnica'
import UnidadesMunicipales from './pages/UnidadesMunicipales'
import ProgramasSociales from './pages/ProgramasSociales'
import Permisos from './pages/Permisos'
import Impuestos from './pages/Impuestos'
import Certificados from './pages/Certificados'
import Denuncias from './pages/Denuncias'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1B4B8F',
      light: '#2C6BC0',
      dark: '#0D2B5C',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#E65100',
      light: '#FF8A65',
      dark: '#BF360C',
      contrastText: '#ffffff',
    },
    background: {
      default: '#F5F5F5',
      paper: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
      letterSpacing: '-0.01562em',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      letterSpacing: '-0.00833em',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
      letterSpacing: '0em',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      letterSpacing: '0.00735em',
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
      letterSpacing: '0em',
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
      letterSpacing: '0.0075em',
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 400,
      letterSpacing: '0.00938em',
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 500,
      letterSpacing: '0.00714em',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      letterSpacing: '0.00938em',
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      letterSpacing: '0.01071em',
    },
    button: {
      fontSize: '0.875rem',
      fontWeight: 500,
      letterSpacing: '0.02857em',
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '8px 16px',
          textTransform: 'none',
          fontWeight: 500,
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)',
          overflow: 'hidden',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
        },
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    'none',
    '0px 2px 4px rgba(0, 0, 0, 0.05)',
    '0px 4px 8px rgba(0, 0, 0, 0.05)',
    '0px 6px 12px rgba(0, 0, 0, 0.05)',
    '0px 8px 16px rgba(0, 0, 0, 0.05)',
    '0px 10px 20px rgba(0, 0, 0, 0.05)',
    '0px 12px 24px rgba(0, 0, 0, 0.05)',
    '0px 14px 28px rgba(0, 0, 0, 0.05)',
    '0px 16px 32px rgba(0, 0, 0, 0.05)',
    '0px 18px 36px rgba(0, 0, 0, 0.05)',
    '0px 20px 40px rgba(0, 0, 0, 0.05)',
    '0px 22px 44px rgba(0, 0, 0, 0.05)',
    '0px 24px 48px rgba(0, 0, 0, 0.05)',
    '0px 26px 52px rgba(0, 0, 0, 0.05)',
    '0px 28px 56px rgba(0, 0, 0, 0.05)',
    '0px 30px 60px rgba(0, 0, 0, 0.05)',
    '0px 32px 64px rgba(0, 0, 0, 0.05)',
    '0px 34px 68px rgba(0, 0, 0, 0.05)',
    '0px 36px 72px rgba(0, 0, 0, 0.05)',
    '0px 38px 76px rgba(0, 0, 0, 0.05)',
    '0px 40px 80px rgba(0, 0, 0, 0.05)',
    '0px 42px 84px rgba(0, 0, 0, 0.05)',
    '0px 44px 88px rgba(0, 0, 0, 0.05)',
    '0px 46px 92px rgba(0, 0, 0, 0.05)',
    '0px 48px 96px rgba(0, 0, 0, 0.05)',
  ],
})

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/transparencia" element={<Transparencia />} />
            <Route path="/tramites" element={<Tramites />} />
            <Route path="/webmail" element={<WebMail />} />
            <Route path="/ley-lobby" element={<LeyLobby />} />
            <Route path="/unidades" element={<Unidades />} />
            <Route path="/autoridades" element={<Autoridades />} />
            <Route path="/historia" element={<Historia />} />
            <Route path="/asistencia-social" element={<AsistenciaSocial />} />
            <Route path="/aseo-ornato" element={<AseoOrnato />} />
            <Route path="/salud" element={<Salud />} />
            <Route path="/educacion" element={<Educacion />} />
            <Route path="/seguridad" element={<Seguridad />} />
            <Route path="/revision-tecnica" element={<RevisionTecnica />} />
            <Route path="/unidades-municipales" element={<UnidadesMunicipales />} />
            <Route path="/programas-sociales" element={<ProgramasSociales />} />
            <Route path="/permisos" element={<Permisos />} />
            <Route path="/impuestos" element={<Impuestos />} />
            <Route path="/certificados" element={<Certificados />} />
            <Route path="/denuncias" element={<Denuncias />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

export default App 