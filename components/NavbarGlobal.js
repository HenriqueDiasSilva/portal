import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Offcanvas from "react-bootstrap/Offcanvas";
import CloseButton from "react-bootstrap/CloseButton";
import Link from "next/link";
import { Facebook, Instagram, TelephoneFill, Search } from 'react-bootstrap-icons';

export default function NavbarGlobal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <nav className="navbarGlobaltopo">
        <Container>
          <Link
            href="/"
            title="Portal Acadêmico da Ulbra Palmas"
            className="navbar-brand d-lg-none"
          >
            <img
              src="https://fswceulp.nyc3.digitaloceanspaces.com/portal/logos/ulbra-palmas-30-anos-light.svg"
              height="36"
            />
          </Link>
          <button className="navbar-toggler" onClick={handleShow}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <Offcanvas show={show} className="bg-dark">
            <Offcanvas.Header>
              <Offcanvas.Title>
                <img
                  height="36"
                  src="https://fswceulp.nyc3.digitaloceanspaces.com/portal/logos/ulbra-palmas-30-anos-light.svg"
                />
              </Offcanvas.Title>
              <CloseButton variant="white" onClick={handleClose} />
            </Offcanvas.Header>
            <Offcanvas.Body>
              <ul className="navbar-nav-principal">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://conecta.ulbra-to.br/logon"
                  >
                    Conecta
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://servicos.ulbra.br/pls/ulbra24/AAMAIN.Login"
                  >
                    AutoAtendimento
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.ulbra.br/ead">
                    EAD
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="http://ulbra-to.br/espaco-academico/2011/02/07/Ouvidoria"
                  >
                    Ouvidoria
                  </a>
                </li>
                <li className="nav-item">
                  <hr className="navbar-nav-divider" />
                </li>
              </ul>
              <ul className="navbar-nav-secundaria">
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Institucional
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Ensino
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Pesquisa
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Extensão
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Inovação
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Sites
                  </a>
                </li>
                <li className="nav-item d-block d-lg-none">
                  <hr className="navbar-nav-divider" />
                </li>
              </ul>
              <a
                href="index.html"
                title="Portal Acadêmico da Ulbra Palmas"
                className="navbar-brand mx-auto col-lg-4 text-center d-none d-lg-block"
              >
                <img
                  height="24"
                  src="https://fswceulp.nyc3.digitaloceanspaces.com/portal/logos/rosa-lutero.svg"
                />
              </a>
              <ul className="navbar-nav-extra">
                <li className="nav-item">
                  <a
                    className="nav-link py-0"
                    href="https://www.facebook.com/CEULPULBRA/"
                  >
                    <Facebook />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link py-0"
                    href="https://www.instagram.com/ceulpulbra/"
                  >
                    <Instagram />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link py-0" href="tel:+556332198000">
                    <TelephoneFill />
                    3219-8000
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link py-0"
                    href="https://www.google.com/search?q=site%3Aulbra-to.br+"
                    target="_blank"
                  >
                    <Search />
                  </a>
                </li>
              </ul>
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </nav>
    </>
  );
}
