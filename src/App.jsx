import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { Home } from './Home';
import Donate from './Donate';
import Giveblood from './Giveblood';
import Aboutus from './Aboutus';
import Gethelp from './Gethelp';
import './App.css';

const logoUrl = 'https://media.licdn.com/dms/image/D4D12AQGO_B2oYTXZ8Q/article-inline_image-shrink_1000_1488/0/1676198874548?e=1699488000&v=beta&t=R3rQSqapTjipKTKsLK3anKltqYD9kymva6URqTpP29E'; // Replace with your actual logo URL

function App() {
  return (
    <div className='card'>
      <center>
        <nav>
          <a href='/' className='nav-link'>
            <img src={logoUrl} alt='Logo' className='logo' />
            
          </a>
          <a href='/home' className='nav-link'>
            Home
          </a>
          <a href='/donate' className='nav-link'>
            Donate
          </a>
          <a href='/giveblood' className='nav-link'>
            Giveblood
          </a>
          <a href='/aboutus' className='nav-link'>
            Aboutus
          </a>
          <a href='/gethelp' className='nav-link'>
            Gethelp
          </a>
        </nav>
      </center>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/donate' element={<Donate />} />
        <Route path='/giveblood' element={<Giveblood />} />
        <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/gethelp' element={<Gethelp />} />
      </Routes>
    </div>
  );
}

export default App;
