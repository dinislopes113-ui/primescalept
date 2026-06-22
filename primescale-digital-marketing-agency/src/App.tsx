import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Bot from './pages/Bot';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import DashboardRedirect from './pages/DashboardRedirect';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="bot" element={<Bot />} />
          <Route path="servicos" element={<Services />} />
          <Route path="sobre-nos" element={<About />} />
          <Route path="contactos" element={<Contact />} />
          <Route path="acesso" element={<DashboardRedirect />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
