import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

export default function Noticias() {
  return (
    <>
      <section className="secao" id="secao-noticias">
        <Container>
          <Row className="g-4 mb-5">
            <Col xs={12} md={8} lg={6}>
              <div className="card card-noticia-destaque">
                <div className="card-img" style={{backgroundImage: "url(https://ulbra-to.br/uploads/ceulp1_1.jpg)"}}></div>
                <div className="card-img-overlay h-100 d-flex align-items-end">
                  <div>
                    <span className="badge bg-dark text-light mb-2">Institucional</span>
                    <div className="card-title">
                      <Link href="" className="h1 stretched-link">8° Semana da Enfermagem do CEULP/ULBRA foi um sucesso</Link>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4} lg={3}>
              <Row className="row-cols-1 g-4 noticias-instituicao">
                <Col>
                  <div className="noticias-instituicao__noticia">
                    <span className="badge text-light mb-2">Arquitetura e Urbanismo</span>
                    <Link href="">Viagem de estudos à Natividade permite troca de experiências e vivências</Link>
                  </div>
                </Col>
                <Col>
                  <div className="noticias-instituicao__noticia">
                    <span className="badge text-light mb-2">Arquitetura e Urbanismo</span>
                    <Link href="">Viagem de estudos à Natividade permite troca de experiências e vivências</Link>
                  </div>
                </Col>
                <Col>
                  <div className="noticias-instituicao__noticia">
                    <span className="badge text-light mb-2">Arquitetura e Urbanismo</span>
                    <Link href="">Viagem de estudos à Natividade permite troca de experiências e vivências</Link>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xs={12} lg={3}>
              <div className="noticias-cursos">
                <div className="noticias-cursos__noticia">
                  <small className="text-muted fw-bold">Arquitetura e Urbanismo</small>
                  <div className="card-title">
                    <Link href="">Viagem de estudos à Natividade</Link>
                  </div>
                </div>
                <div className="noticias-cursos__noticia">
                  <small className="text-muted fw-bold">Arquitetura e Urbanismo</small>
                  <div className="card-title">
                    <Link href="">Viagem de estudos à Natividade</Link>
                  </div>
                </div>
                <div className="noticias-cursos__noticia">
                  <small className="text-muted fw-bold">Arquitetura e Urbanismo</small>
                  <div className="card-title">
                    <Link href="">Viagem de estudos à Natividade</Link>
                  </div>
                </div>
                <div className="noticias-cursos__noticia">
                  <small className="text-muted fw-bold">Arquitetura e Urbanismo</small>
                  <div className="card-title">
                    <Link href="">Viagem de estudos à Natividade</Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <div className="mt-5 text-center">
            <Link href="" className="btn btn-outline-dark">VER TODAS AS NOTÍCIAS</Link>
          </div>
        </Container>
      </section>
    </>
  );
}
