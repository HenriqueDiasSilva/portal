import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";

export default function Rodape() {
  return (
    <>
      <Container>
        <Row className="align-items-center mt-3 mb-5">
          <Col lg={3} className="my-lg-0 my-3 d-flex justify-content-center justify-content-lg-start">
            <img src="https://fswceulp.nyc3.cdn.digitaloceanspaces.com/portal/logos/ulbra-palmas-dark.svg" alt="Logo Ulbra Palmas"
                 style={{ height: "4rem" }}/>
          </Col>
          <Col lg={3} className="my-lg-0 my-3 d-flex justify-content-center justify-content-lg-start">
            <img src="https://fswceulp.nyc3.cdn.digitaloceanspaces.com/portal/logos/50-anos-ulbra.svg" alt="Logo Ulbra 50 Anos"
                 style={{ height: "3.6rem" }}/>
          </Col>
          <Col lg={3} className="my-lg-0 my-3 d-flex justify-content-center justify-content-lg-start">
            <img src="https://fswceulp.nyc3.cdn.digitaloceanspaces.com/portal/logos/ulbra-palmas-30-anos-left-dark.svg" alt="Logo Ceulp 30 Anos"
                 style={{ height: "3.6rem" }}/>
          </Col>
          <Col lg={3} className="my-lg-0 my-3">
            <form class="form row" novalidate="" onsubmit="return formSearchSubmit(this)">
              <div class="col-12 input-group">
                <input aria-label="Search" class="form-control" name="search" placeholder="Pesquisar:" value="" type="search"/>
                <button class="btn btn-dark" type="submit">
                  <Search/>
                </button>
              </div>
            </form>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg={3}>
            <h3>Institucional</h3>
            <h4>ULBRA PALMAS</h4>
            <ul class="list-unstyled">
              <li>
                <Link href="http://ulbra.br" target="_blank">
                  ULBRA
                </Link>
              </li>
              <li>
                <Link href="{$Site->Url}/2011/02/06/Linkpresentacao">
                  Apresentação
                </Link>
              </li>
              <li>
                <Link href="{$Site->Url}/2011/02/05/Telefones-e-e-mails">
                  Setores e Telefones
                </Link>
              </li>
              <li>
                <Link href="{$Site->TemplateUrl}/plano-de-desenvolvimento-institucional.pdf" target="_blank">
                  Plano de Desenvolvimento Institucional (Resumido)
                </Link>
              </li>
            </ul>
            <h4>Atendimento à Comunidade</h4>
            <ul class="list-unstyled">
              <li>
                <Link href="{$Site->Url}/2011/03/04/Nucleo-de-Atendimento-a-Comunidade-NAC" target="_blank">
                  NAC - Núcleo de Atendimento à Comunidade
                </Link>
              </li>
              <li>
                <Link href="{$Site->Url}/cep/" target="_blank">
                  CEP - Comitê de Ética e Pesquisa
                </Link>
              </li>
              <li>
                <Link href="{$Site->Url}/cpa/" target="_blank">
                  CPA - Comissão Própria de Avaliação
                </Link>
              </li>
              <li>
                <Link href="http://ulbra-to.br/Linklteridade/" target="_blank">
                  Alteridade
                </Link>
              </li>
            </ul>
          </Col>

          <Col lg={3}>
            <h3>Ensino</h3>
            <h4>Graduação</h4>
            <Row>
              <ul class="list-unstyled">
                <li>
                  <Link href="https://ulbra-to.br/2022/12/07/Ensino">
                    Ensino na Ulbra Palmas
                  </Link>
                </li>
                <li>
                  <Link href="http://ulbra-to.br/cursos/Linkdministracao">
                    Administração
                  </Link>
                </li>
                <li>
                  <Link href="http://ulbra-to.br/cursos/Linkgronomia">
                    Agronomia
                  </Link>
                </li>
                <li>
                  <Link href="http://ulbra-to.br/Cursos/Linkrquitetura-e-Urbanismo/">
                    Arquitetura e Urbanismo
                  </Link>
                </li>
                <li>
                  <Link href="http://ulbra-to.br/Cursos/Biomedicina/">
                    Biomedicina
                  </Link>
                </li>
                <li>
                  <Link href="http://ulbra-to.br/Cursos/Ciencias-Contabeis/">
                    Ciências Contábeis
                  </Link>
                </li>
                <li>
                  <Link href="http://ulbra-to.br/Cursos/Ciencia-da-Computacao/">
                    Ciência da Computação
                  </Link>
                </li>
                <li>
                  <Link href="http://ulbra-to.br/Cursos/Direito/">Direito</Link>
                </li>
                <li>
                  <Link href="http://ulbra-to.br/Cursos/Educacao-Fisica-Bacharelado/">
                    Educação Física - Bacharelado
                  </Link>
                </li>
                <li>
                  <Link href="http://ulbra-to.br/Cursos/Educacao-Fisica-Licenciatura/">
                    Educação Física - Licenciatura
                  </Link>
                </li>
                <li>
                  <Link href="http://ulbra-to.br/Cursos/Enfermagem/">
                    Enfermagem
                  </Link>
                </li>
                <li>
                  <Link href="http://ulbra-to.br/Cursos/Engenharia-Civil/">
                    Engenharia Civil
                  </Link>
                </li>
                <li>
                  <Link href="http://ulbra-to.br/Cursos/Engenharia-de-Minas/">
                    Engenharia de Minas
                  </Link>
                </li>
                <li>
                  <Link href="http://ulbra-to.br/cursos/Engenharia-de-Software/">
                    Engenharia de Software
                  </Link>
                </li>
                <li>
                  <Link href="http://ulbra-to.br/Cursos/Curso-Superior-de-Tecnologia-em-Estetica-e-Cosmetica/">
                    Estética e Cosmética
                  </Link>
                </li>
                <li>
                  <Link href="http://ulbra-to.br/Cursos/Farmacia/">
                    Farmácia
                  </Link>
                </li>
                <li>
                  <Link href="http://ulbra-to.br/Cursos/Fisioterapia/">
                    Fisioterapia
                  </Link>
                </li>
                <li>
                  <Link href="http://ulbra-to.br/Cursos/Jogos-Digitais/">
                    Jogos Digitais
                  </Link>
                </li>
                <li>
                  <Link href="http://ulbra-to.br/Cursos/Medicina-Veterinaria">
                    Medicina Veterinária
                  </Link>
                </li>
                <li>
                  <Link href="http://ulbra-to.br/Cursos/Nutricao/">
                    Nutrição
                  </Link>
                </li>
                <li>
                  <Link href="http://ulbra-to.br/Cursos/Odontologia/">
                    Odontologia
                  </Link>
                </li>
                <li>
                  <Link href="http://ulbra-to.br/Cursos/Psicologia/">
                    Psicologia
                  </Link>
                </li>
                <li>
                  <Link href="http://ulbra-to.br/Cursos/Sistemas-de-Informacao/">
                    Sistemas de Informação
                  </Link>
                </li>
              </ul>
            </Row>
          </Col>

          <Col lg={3}>
            <h3>Pesquisa</h3>
            <ul class="list-unstyled">
              <li>
                <Link href="{$Site->Url}/2011/02/05/Pesquisa" target="_blank">
                  Coordenação de Pesquisa
                </Link>
              </li>
            </ul>
            <h3>Extensão</h3>
            <ul class="list-unstyled">
              <li>
                <Link href="{$Site->Url}/2022/12/07/Extensao" target="_blank">
                  EDUCON - Educação Continuada
                </Link>
              </li>
            </ul>
            <h3>Internacionalização</h3>
            <ul class="list-unstyled">
              <li>
                <Link href="{$Site->Url}/2022/12/07/Internacionalizacao" target="_blank">
                  Sobre
                </Link>
              </li>
            </ul>
          </Col>

          <Col lg={3}>
            <h4>Links Úteis</h4>
            <ul class="list-unstyled">
              <li>
                <Link href="http://www.periodicos.capes.gov.br/" target="_blank">
                  CAPES - Periódicos
                </Link>
              </li>
              <li>
                <Link href="https://www.ulbra.br/colegio-palmas/" target="_blank">
                  Colégio ULBRA/Palmas
                </Link>
              </li>
              <li>
                <Link href="https://mecsp.metasix.solutions/portal" target="_blank">
                  FNDE - Fale Conosco
                </Link>
              </li>
              <li>
                <Link href="http://www.inep.gov.br/" target="_blank">
                  MEC - INEP
                </Link>
              </li>
              <li>
                <Link href="http://www.mec.gov.br/" target="_blank">
                  MEC - Ministério da Educação
                </Link>
              </li>
              <li>
                <Link href="http://prouniportal.mec.gov.br/" target="_blank">
                  PROUNI
                </Link>
              </li>
              <li>
                <Link href="http://ulbra-to.br/singular" target="_blank">
                  Revista Singular
                </Link>
              </li>
              <li>
                <Link href="https://encenasaudemental.com/" target="_blank">
                  (En)Cena: a Saúde Mental em movimento
                </Link>
              </li>
              <li>
                <Link href="http://ulbra-to.br/morfologia" target="_blank">
                  Morfologia
                </Link>
              </li>
              <li>
                <Link href="http://www.ulbra-to.br/geda" target="_blank">
                  GEDA
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}
