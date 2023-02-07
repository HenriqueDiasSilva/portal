import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { Save, Link45deg } from "react-bootstrap-icons";

export default function Calendario() {
  return (
    <>
      <section className="secao" id="secao-calendario">
        <Container className="d-flex flex-column align-items-center">
          <div className="secao-cabecalho">
            <h1 className="secao-titulo">Calendário acadêmico e de eventos</h1>
          </div>
          <div className="secao-corpo">
            <Row>
              <Col xs={12} md={4} className="mb-4 mb-lg-0">
                <div className="d-flex align-items-baseline">
                  <h2>Calendário</h2>
                </div>
                <div className="mb-3">
                  <Link href="https://ulbra-to.br/download/2022/11/29/Calendario-Academico-de-2023/download" className="text-dark">
                    <Save/> Calendário 
                    2023
                  </Link>
                </div>

                <ul className="list-unstyled lista-calendario-datas">
                  <li className="lista-calendario-item media">
                    <div className="data">
                      <span>16</span>
                      <span>DEZ</span>
                    </div>
                    <div className="media-body">Avaliação Final - AF</div>
                  </li>
                  <li className="lista-calendario-item media">
                    <div className="data">
                      <span>16</span>
                      <span>DEZ</span>
                    </div>
                    <div className="media-body">Avaliação Final - AF</div>
                  </li>
                  <li className="lista-calendario-item media">
                    <div className="data">
                      <span>16</span>
                      <span>DEZ</span>
                    </div>
                    <div className="media-body">Avaliação Final - AF</div>
                  </li>
                  <li className="lista-calendario-item media">
                    <div className="data">
                      <span>16</span>
                      <span>DEZ</span>
                    </div>
                    <div className="media-body">Avaliação Final - AF</div>
                  </li>
                  <li className="lista-calendario-item media">
                    <div className="data">
                      <span>16</span>
                      <span>DEZ</span>
                    </div>
                    <div className="media-body">Avaliação Final - AF</div>
                  </li>
                </ul>
              </Col>
              <Col xs={12} md={8} className="mb-4 mb-lg-0">
                <div className="mb-3">
                  <h2>Eventos</h2>
                  <Link href="https://ulbra-to.br:8051/sig/extensao/" className="text-dark">
                    <Link45deg/> Consulte a lista completa no SIG Extensão
                  </Link>
                </div>
                <div className="lista-eventos">
                  <Link className="lista-eventos-item media" 
                        href="https://ulbra-to.br:8051/sig/extensao/Linkcoes/{$eventSIG->id}/detalhes/">
                    <div className="data">
                      <span>01</span>
                      <span>DEZ</span>
                    </div>
                    <div className="media-body">
                        Estação.ti (2022/2)
                    </div>
                  </Link>
                </div>
                <div className="lista-eventos">
                  <Link className="lista-eventos-item media" 
                        href="https://ulbra-to.br:8051/sig/extensao/Linkcoes/{$eventSIG->id}/detalhes/">
                    <div className="data">
                      <span>01</span>
                      <span>DEZ</span>
                    </div>
                    <div className="media-body">
                        Estação.ti (2022/2)
                    </div>
                  </Link>
                </div>
                <div className="lista-eventos">
                  <Link className="lista-eventos-item media" 
                        href="https://ulbra-to.br:8051/sig/extensao/Linkcoes/{$eventSIG->id}/detalhes/">
                    <div className="data">
                      <span>01</span>
                      <span>DEZ</span>
                    </div>
                    <div className="media-body">
                        Estação.ti (2022/2)
                    </div>
                  </Link>
                </div>
                <div className="lista-eventos">
                  <Link className="lista-eventos-item media" 
                        href="https://ulbra-to.br:8051/sig/extensao/Linkcoes/{$eventSIG->id}/detalhes/">
                    <div className="data">
                      <span>01</span>
                      <span>DEZ</span>
                    </div>
                    <div className="media-body">
                        Estação.ti (2022/2)
                    </div>
                  </Link>
                </div>
                <div className="lista-eventos">
                  <Link className="lista-eventos-item media" 
                        href="https://ulbra-to.br:8051/sig/extensao/Linkcoes/{$eventSIG->id}/detalhes/">
                    <div className="data">
                      <span>01</span>
                      <span>DEZ</span>
                    </div>
                    <div className="media-body">
                        Estação.ti (2022/2)
                    </div>
                  </Link>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
}
