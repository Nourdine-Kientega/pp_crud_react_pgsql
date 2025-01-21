
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Layout from './components/partials/Layout';

import './default.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* Layout route header + footer  */}
        <Route path='/' element={<Layout />} >
          {/* Others routes  */}
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
