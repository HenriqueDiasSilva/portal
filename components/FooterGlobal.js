import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons";

export default function FooterGlobal() {
  return (
    <>
      <div className="endereco p-3">
        <Container>
          <Row className="g-4">
            <Col xs={12} xl={8}>
              <Row className="g-4">
                <Col xs={12} md={6} lg={3} className="d-flex justify-content-center align-items-center">
                  <img src="https://fswceulp.nyc3.cdn.digitaloceanspaces.com/portal/logos/ulbra-palmas-dark.svg" alt="Logo Ulbra Palmas"
                       title="Logo Ulbra Palmas" style={{ height: "5rem" }}/>
                </Col>
                <Col xs={12} md={6} lg={5} className="d-flex justify-content-center align-items-center">
                  <Link href="https://emec.mec.gov.br/emec/consulta-cadastro/detalhamento/d96957f455f6405d14c6542552b0f6eb/NDUz"
                     className="decoration-none">
                    <img src="https://fswceulp.nyc3.cdn.digitaloceanspaces.com/selos/selo-emec.png" alt="Selo E-MEC"
                         title="Selo E-MEC"/>
                  </Link>
                </Col>
                <Col xs={12} md={6} lg={2} className="d-flex justify-content-center align-items-center">
                  <img id="footer-logo" src="http://ulbra-to.br/portal/Style/Icons/selo-resp-social.png"
                       alt="Selo de Responsabilidade Social" title="Selo de Responsabilidade Social"/>
                </Col>
                <Col xs={12} md={6} lg={2} className="d-flex justify-content-center align-items-center">
                  <img id="footer-logo" src="http://ulbra-to.br/portal/Style/cpa-selo.png" alt="Comissão Própria de Avaliação"
                       title="Comissão Própria de Avaliação"/>
                </Col>
              </Row>
            </Col>
            <Col xs={12} xl={4}>
              <Row className="g-2">
                <Col xs={12} md={8} xl={12}>
                  <strong>CENTRO UNIVERSITÁRIO LUTERANO DE PALMAS</strong>
                  <br /> Avenida Teotônio Segurado, 1501 Sul, Palmas - TO - CEP
                  77.019-900 Caixa Postal nº 85
                </Col>
                <Col xs={12} md={4} xl={12} className="d-flex justify-content-lg-start justify-content-center align-items-center justify-content-end fs-3 text-muted">
                  <Link href="https://pt-br.facebook.com/CEULPULBRA/" className="me-2">
                    <Facebook/>
                  </Link>
                  <Link href="https://twitter.com/ceulpulbra" className="me-2">
                    <Twitter/>
                  </Link>
                  <Link
                    href="https://www.instagram.com/ceulpulbra/"className="me-2">
                    <Instagram/>
                  </Link>
                  <Link href="https://www.youtube.com/channel/UCMfy8re7GWWRW2Jopd2zazw">
                    <Youtube/>
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
