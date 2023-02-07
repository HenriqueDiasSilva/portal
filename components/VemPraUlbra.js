import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { CheckCircleFill } from "react-bootstrap-icons";

export default function VemPraUlbra() {
  return (
    <>
      <section className="secao" id="secao-vem-pra-ulbra">
        <Container fluid>
          <Row className="g-4">
            <Col xs={12} lg={6} xxl={7} className="ps-3">
              <div className="secao-cabecalho">
                <h1 className="secao-titulo">#vempraulbra</h1>
                <div className="secao-subtitulo">
                  Uma comunidade de aprendizagem eficaz e inovadora
                </div>
              </div>
              <Col lg={9} className="secao-corpo m-auto">
                <ul className="list-unstyled">
                  <li className="fs-5">
                    <CheckCircleFill className="text-success me-1"/>
                    Melhor instituição do estado, segundo avaliação MEC
                  </li>
                  <li className="fs-5">
                    <CheckCircleFill className="text-success me-1"/>
                    Cursos com as melhores notas na avaliação do MEC
                  </li>
                  <li className="fs-5">
                    <CheckCircleFill className="text-success me-1"/>
                    Laboratórios e Clínicas especializados
                  </li>
                  <li className="fs-5">
                    <CheckCircleFill className="text-success me-1"/>
                    Única instituição com Hospital Veterinário
                  </li>
                  <li className="fs-5">
                    <CheckCircleFill className="text-success me-1"/>
                    Núcleo de Atendimento à Comunidade
                  </li>
                  <li className="fs-5">
                    <CheckCircleFill className="text-success me-1"/>
                    Egressos com alto índice de empregabilidade
                  </li>
                  <li className="fs-5">
                    <CheckCircleFill className="text-success me-1"/>
                    Programa de Extensão Interdisciplinar
                  </li>
                </ul>
                <div className="text-center">
                  <Link href="https://ulbra.br/vestibular/palmas" title="Vestibular ULBRA 2023" target="_blank">
                    <img src="https://fswceulp.nyc3.cdn.digitaloceanspaces.com/portal/home/vem-pra-ulbra/vestibular.png" className="img-fluid"
                         alt="Vestibular ULBRA 2023"/>
                  </Link>
                  <small className="text-muted d-block mt-2">
                    * Consulte o regulamento
                  </small>
                </div>
              </Col>
            </Col>
            <Col xs={12} lg={6} xxl={5}>
              <Row className="row-cols-2 g-0">
                 <Col style={{ background:"url(https://fswceulp.nyc3.cdn.digitaloceanspaces.com/portal/home/vem-pra-ulbra/1-new.jpg) center center",
                               backgroundSize: "cover",
                               height: "325px" }}></Col>
                  <Col style={{ background:"url(https://fswceulp.nyc3.cdn.digitaloceanspaces.com/portal/home/vem-pra-ulbra/2.jpg) center center",
                                backgroundSize: "cover",
                                height: "325px" }}></Col>
                <Col style={{ background:"url(https://fswceulp.nyc3.cdn.digitaloceanspaces.com/portal/home/vem-pra-ulbra/3.jpg) center center",
                                backgroundSize: "cover",
                                height: "325px" }}></Col>
                <Col style={{ background:"url(https://fswceulp.nyc3.cdn.digitaloceanspaces.com/portal/home/vem-pra-ulbra/4.jpg) center center",
                                backgroundSize: "cover",
                                height: "325px" }}></Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
