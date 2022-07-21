import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import News from './pages/News';
import Champion from './pages/Champion';
import Shop from './pages/Shop';
import Support from './pages/Support';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <Router>
        <div class="headerBox">
          <div class="headerCenter">
            <div class="headerLeft">
              <span style={{
                color: 'white',
                textDecoration: 'underline'
              }}>{t('name')}</span>
              <Link to="/" class="navItem">{t('Home')}</Link>
              <Link to="/Champion" class="navItem">{t('Champion')}</Link>
              <Link to="/News" class="navItem">{t('News')}</Link>
              <Link to="/Shop" class="navItem">{t('Shop')}</Link>
              <Link to="/Support" class="navItem">{t('Support')}</Link>
              <Link to="/Download" class="navItem">{t('Download')}</Link>
            </div>
            <div class="headerRight">
              <Link to="/Login" class="navItem">
                {t('Login')}
              </Link>
              <a class="navItem">
                {t('PlayNow')}
              </a>
              <select onChange={(e) => {
                console.log(e.target.value)
                i18n.changeLanguage(e.target.value);
              }} style={{
                marginLeft: 10
              }}>
                <option value="en"> {t('English')}</option>
                <option value="fr">{t('Frensh')}</option>
              </select>
            </div>
          </div>
        </div>

        <div>

          <Routes>
            <Route path='/*' element={<Home />} />
            <Route path='/News' element={<News />} />
            <Route path='/Champion' element={<Champion />} />
            <Route path='/Shop' element={<Shop />} />
            <Route path='/Support' element={<Support />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/CreateAccount' element={<CreateAccount />} />
          </Routes>

        </div>
      </Router>
    </div>
  );
}

export default App;