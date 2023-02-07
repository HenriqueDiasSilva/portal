"use client"

import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { ChatDotsFill, Book, Calendar, EnvelopeFill } from "react-bootstrap-icons";

export default function BarraServicos() {
  return (
    <>
      <section className="secao p-5" id="secao-servicos">
        <Container>
          <Row className="lista-servicos row-cols-8 justify-content-center align-items-center">
            <Col>
              <Link href="https://conecta.ulbra-to.br/logon">
                <img src="http://nyc3.digitaloceanspaces.com/fswceulp/cursos/sites/5/2020/02/13194842/conecta-icon.png" width="64" 
                     height="64"/>
                <div>Conecta</div>
              </Link>
            </Col>
            <Col>
              <Link href="https://servicos.ulbra.br/pls/ulbra24/LinkAMAIN.Login">
                <img src="https://fswceulp.nyc3.cdn.digitaloceanspaces.com/portal/logos/icone-autoatendimento.svg" width="64"
                     height="64"/>
                <div>Autoatendimento</div>
              </Link>
            </Col>
            <Col>
              <Link href="https://ulbra-to.br/espaco-academico/index.html" aria-current="page">
                <img src="https://fswceulp.nyc3.cdn.digitaloceanspaces.com/portal/logos/servico-espaco-academico.svg" width="60"
                     height="60"/>
                <div>Espaço Acadêmico</div>
              </Link>
            </Col>
            <Col>
              <Link href="/espaco-academico/servico-no-campus/ouvidoria.html">
                <ChatDotsFill className="fs-1 fw-bold my-2"/>
                <div>Ouvidoria</div>
              </Link>
            </Col>
            <Col>
              <Link href="http://ulbra-to.br/2013/02/04/Bibliotecas">
              <Book className="fs-1 fw-bold my-2"/>
                <div>Biblioteca</div>
              </Link>
            </Col>
            <Col>
              <Link href="http://ulbra-to.br/Linklteridade/">
                <img src="https://fswceulp.nyc3.cdn.digitaloceanspaces.com/portal/logos/logo-alteridade.svg" width="60"
                     height="60"/>
                <div>Alteridade</div>
              </Link>
            </Col>
            <Col>
              <Link href="https://ulbra-to.br/download/2022/05/10/Calendario-Academico-de-2022/download" aria-current="page">
                <Calendar className="fs-1 fw-bold my-2"/>
                <div>Calendário</div>
              </Link>
            </Col>
            <Col>
              <Link href="https://www.ulbra.br/webmail" aria-current="page">
              <EnvelopeFill className="fs-1 fw-bold my-2"/>
                <div>Webmail</div>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
