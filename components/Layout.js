import NavbarGlobal from "./NavbarGlobal";
import VemPraUlbra from "./VemPraUlbra";
import BarraServicos from "./BarraServicos";
import Rodape from "./Rodape";
import FooterGlobal from "./FooterGlobal";

export default function Layout({ children }) {
  return (
    <>
      <NavbarGlobal/>
      <div>{children}</div>
      <VemPraUlbra/>
      <BarraServicos/>
      <footer id="rodape">
        <Rodape/>
        <FooterGlobal/>
      </footer>
    </>
  );
}
