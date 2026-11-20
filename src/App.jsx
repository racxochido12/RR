import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import QuienesSomos from './pages/QuienesSomos.jsx'
import Clientes from './pages/Clientes.jsx'
import Tienda from './pages/Tienda.jsx'
import Herramientas from './pages/Herramientas.jsx'
import Servicios from './pages/Servicios.jsx'
import Contacto from './pages/Contacto.jsx'
import NotFound from './pages/NotFound.jsx'

// Las rutas conservan las URLs del sitio anterior en Google Sites.
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="página-principal" element={<Navigate to="/" replace />} />
          <Route path="quienes-somos" element={<QuienesSomos />} />
          <Route path="clientes" element={<Clientes />} />
          <Route path="tienda" element={<Tienda />} />
          <Route path="tienda/herramientas-de-reparacion-de-celulares" element={<Herramientas />} />
          <Route path="servicio-y-soportes" element={<Servicios />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
