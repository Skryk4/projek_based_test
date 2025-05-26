import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './VisiMisi.css';

const VisiMisi = () => {
  return (
    <section className="visi-misi-section">
      <Container className="visi-misi-container">
        {/* Sidebar */}
        <nav className="visi-misi-sidebar">
          <h5 className="sidebar-title">Visi dan Misi</h5>
          <ul className="sidebar-list">
            <li>
              <NavLink to="/about/visi-misi" className={({ isActive }) => isActive ? 'active-link' : ''}>
                Visi dan Misi
              </NavLink>
            </li>
            <li>
              <NavLink to="/about/struktur" className={({ isActive }) => isActive ? 'active-link' : ''}>
                Struktur Organisasi
              </NavLink>
            </li>
            <li>
              <NavLink to="/about/akreditasi" className={({ isActive }) => isActive ? 'active-link' : ''}>
                Akreditasi
              </NavLink>
            </li>
            <li>
              <NavLink to="/about/sejarah" className={({ isActive }) => isActive ? 'active-link' : ''}>
                Sejarah STIE
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Main content */}
        <div className="visi-misi-content">
          <h2 className="content-title">Visi STIE Yasmi Cirebon</h2>
          <p className="content-text">
            Menjadikan perguruan tinggi unggul dalam menghasilkan sumber daya manusia (SDM) yang kompetitif dan professional
          </p>

          <h2 className="content-title">Misi STIE Yasmi Cirebon</h2>
          <ol className="content-list">
            <li>Mengembangkan Keilmuan dan kelembagaan yang unggul dan berorientasi pada kebutuhan stakeholders.</li>
            <li>Menyelenggarakan pendidikan, pengajaran dan pelatihan di bidang Manajemen dan Akuntansi.</li>
            <li>Menyelenggarakan pengabdian kepada masyarakat dan kerjasama</li>
          </ol>
        </div>
      </Container>
    </section>
  );
};

export default VisiMisi;
