
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './default.css';
import HomePage from './pages/HomePage';
import Layout from './components/partials/Layout';
import NoutFoundPage from './pages/NoutFoundPage';
import AddArticle from './pages/AddArticle';
import AllArticles from './pages/AllArticles';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* Layout route header + footer  */}
        <Route path='/' element={<Layout />} >
          {/* Others routes  */}
          <Route index element={<HomePage />} />
          <Route path='/*' element={<NoutFoundPage />} />
          <Route path='/add_article/' element={<AddArticle />} />
          <Route path='/all_articles/' element={<AllArticles />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
