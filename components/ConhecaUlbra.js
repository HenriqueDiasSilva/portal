import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

export default function ConhecaUlbra() {
  return (
    <>
      <section className="secao" id="secao-conheca-o-ceulp">
        <Container>
          <div className="secao-cabecalho">
            <h1 className="secao-titulo">Conheça a ULBRA PALMAS</h1>
            <div className="secao-subtitulo">
              Uma comunidade de aprendizagem eficaz e inovadora
            </div>
          </div>
          <div className="secao-corpo">
            <Row className="row-cols-1 row-cols-md-2 row-cols-xl-4 g-4">
              <Col>
                <div className="card">
                  <div className="card-img-top" style={{backgroundImage: "url(https://fswceulp.nyc3.cdn.digitaloceanspaces.com/portal/home/conheca-ceulp/ensino.png)"}}></div>
                  <div className="card-img-overlay">
                    <div className="card-title">Ensino</div>
                  </div>
                  <ul className="list-group list-group-flush text-center mb-md-5">
                    <li className="list-group-item">Referência no Estado</li>
                    <li className="list-group-item">Práticas inovadoras</li>
                    <li className="list-group-item">Aprendizagem Eficaz</li>
                  </ul>
                  <div className="card-footer text-center bg-white m-2 mt-md-5">
                    <Link href="https://ulbra-to.br/2022/12/07/Ensino" className="btn btn-outline-dark stretched-link">SAIBA MAIS</Link>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="card">
                  <div className="card-img-top" style={{backgroundImage: "url(https://fswceulp.nyc3.cdn.digitaloceanspaces.com/portal/home/conheca-ceulp/pesquisa.png)"}}></div>
                  <div className="card-img-overlay">
                    <div className="card-title">Pesquisa</div>
                  </div>
                  <ul className="list-group list-group-flush text-center mb-lg-5 mb-xl-0">
                    <li className="list-group-item">
                      Revista Científica Singular - publicações eletrônicas
                    </li>
                    <li className="list-group-item">
                      Jornada de Iniciação Científica consolidada
                    </li>
                    <li className="list-group-item">
                      Programa de Iniciação Científica e Tecnológica
                    </li>
                  </ul>
                  <div className="card-footer text-center bg-white m-2 mt-4 mt-lg-5 mt-xl-4">
                    <Link href="https://ulbra-to.br/2011/02/05/Pesquisa" className="btn btn-outline-dark stretched-link">SAIBA MAIS</Link>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="card">
                  <div className="card-img-top" style={{backgroundImage: "url(https://fswceulp.nyc3.cdn.digitaloceanspaces.com/portal/home/conheca-ceulp/extensao.png)"}}></div>
                  <div className="card-img-overlay">
                    <div className="card-title">Extensão</div>
                  </div>
                  <ul className="list-group list-group-flush text-center mb-lg-5 mb-xl-0">
                    <li className="list-group-item">
                      Processo interdisciplinar, educativo, cultural, científico
                      e político
                    </li>
                    <li className="list-group-item">
                      Eventos, cursos, programas, projetos e ligas acadêmicas
                    </li>
                    <li className="list-group-item">
                      Curricularização da extensão universitária
                    </li>
                  </ul>
                  <div className="card-footer text-center bg-white m-2 mt-4 mt-lg-0">
                    <Link href="https://ulbra-to.br/2022/12/07/Extensao" className="btn btn-outline-dark stretched-link">SAIBA MAIS</Link>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="card">
                  <div className="card-img-top" style={{backgroundImage: "url(https://fswceulp.nyc3.cdn.digitaloceanspaces.com/portal/home/conheca-ceulp/internacionalizacao.png)"}}></div>
                  <div className="card-img-overlay">
                    <div className="card-title">Internacionalização</div>
                  </div>
                  <ul className="list-group list-group-flush text-center mb-lg-4 mb-xl-0">
                    <li className="list-group-item">
                      Intercâmbios internos e internacionais
                    </li>
                    <li className="list-group-item">Convênios com 18 países</li>
                    <li className="list-group-item">
                      Internacionalização da pesquisa e da extensão
                      universitária
                    </li>
                  </ul>
                  <div className="card-footer text-center bg-white m-2 mt-5">
                    <Link href="https://ulbra-to.br/2022/12/07/Internacionalizacao" className="btn btn-outline-dark stretched-link">SAIBA MAIS</Link>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
}
