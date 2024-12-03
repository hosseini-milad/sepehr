import React from 'react';
import ReactDOM from 'react-dom/client';

import './css/App.css';
import './css/fontAwesome.css';
import './css/main.css';
import './css/overide.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import Dashboard from './pages/Dashboard'
import Layout from './components/Layout'
import Login from './pages/Login';
import Users from './pages/Users';
import Cookies from 'universal-cookie';
import errortrans from './translate/error';
import LayoutLogin from './components/LayoutLogin';
import env from './env';
import UserDetailHolder from './modules/Users/UserData/UserDetailHolder';

import Profile from './pages/Profile';
import Services from './pages/Services';
import ServiceDetailHolder from './modules/Service/ServiceData/ServiceDetailHolder';
import Sepidar from './modules/Config/Sepidar';
import Models from './pages/Models';
import UserProfile from './pages/Profile'
import Report from './pages/Report';
import Park from './pages/Park';

const cookies = new Cookies();
const style = document.getElementById('style-direction');
var lang = JSON.parse(localStorage.getItem(env.cookieLang));
/*if (lang.dir === 'rtl') {
  style.href = '/css/rtl.css';
} */
if(!lang){
  localStorage.setItem(env.cookieLang,JSON.stringify(
    { lang:errortrans.defaultLang,
      dir:errortrans.defaultDir,
      color:errortrans.defaultColor}));
  lang = JSON.parse(localStorage.getItem(env.cookieLang));
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
    {cookies.get(env.cookieName)?
      <Routes>
        <Route path="/" element={<Layout><Dashboard lang={lang}/></Layout>}/>
        <Route path="/login" element={<Layout><Profile lang={lang}/></Layout>}/>
        <Route path="/dashboard" element={<Layout><Dashboard lang={lang}/></Layout>}/>
        <Route path="/users" element={<Layout><Users lang={lang} user={1}/></Layout>}/>
        <Route path="/users/detail/:userId" element={<Layout><UserProfile lang={lang} user={1}/></Layout>}/>

        <Route path="/customers" element={<Layout><Users lang={lang} /></Layout>}/>
        <Route path="/customers/detail/:userId" element={<Layout><UserDetailHolder lang={lang}/></Layout>}/>

        <Route path="/models" element={<Layout><Models lang={lang}/></Layout>}/>

        <Route path="/report" element={<Layout><Report lang={lang}/></Layout>} />
        <Route path="/park" element={<Layout><Park lang={lang}/></Layout>} />

        <Route path="/UserProfile" element={<Layout><UserProfile lang={lang}/></Layout>}/>
        <Route path="/report/:mode" element={<Layout><Report lang={lang}/></Layout>} />

        <Route path="/services" element={<Layout><Services lang={lang}/></Layout>}/>
        <Route path="/services/detail/:orderId" element={<Layout><ServiceDetailHolder lang={lang}/></Layout>}/>
        
        <Route path="/config/sepidar" element={<Layout><Sepidar lang={lang}/></Layout>}/>

      </Routes>:
        <Routes>
          <Route path="/" element={<LayoutLogin><Login lang={lang}/></LayoutLogin>}/>
          <Route path="/:auth" element={<LayoutLogin><Login lang={lang}/></LayoutLogin>}/>
          <Route path="/:page/:auth" element={<LayoutLogin><Login lang={lang}/></LayoutLogin>}/>
          <Route path="/:page/:page/:auth" element={<LayoutLogin><Login lang={lang}/></LayoutLogin>}/>
        </Routes>}
     </Router>
);

serviceWorkerRegistration.unregister();

reportWebVitals();
