import Carrossel from "@/components/carousel";
import { Header } from "@/components/header";
import nasa from "../../../../public/assets/nasa.png";
import recn from "../../../../public/assets/recnplay.png";
import party from "../../../../public/assets/party.png";
import { TechEvents, EducationalEvents, CorporativeEvents } from "@/utils/data";
import { Sections } from "@/components/sections";

export default function Home() {
  return (
    <div>
      <Header />
      <Carrossel images={[nasa, recn, party]} />

      <div>
        <Sections eventos={TechEvents} categoria="Tecnologia" link="#" />
        <Sections
          eventos={EducationalEvents}
          categoria="Cursos e workshops"
          link="#"
        />
        <Sections
          eventos={CorporativeEvents}
          categoria="Eventos corporativos"
          link="#"
        />
      </div>
    </div>
  );
}
