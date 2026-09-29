import { Routes, Route } from 'react-router-dom'
import SiteLayout from './components/site/SiteLayout'
import Home from './pages/site/Home'
import Pending from './pages/Pending'

// Rotas conforme definição: site público, /login, /sistema/* e /cliente/*.
// Somente a Home está implementada (Etapa 3); as demais entram nas próximas etapas.
export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<Home />} />
        {['sobre','projetos','projetos/:slug','como-funciona','orcamento','contato'].map(p => <Route key={p} path={p} element={<Pending />} />)}
      </Route>
      <Route path="/login" element={<Pending />} />
      <Route path="/sistema/*" element={<Pending />} />
      <Route path="/cliente/*" element={<Pending />} />
    </Routes>
  )
}
