import Carrossel from "@/components/carousel";
import { Header } from "@/components/header";
import nasa from "../../../../public/assets/nasa.png";
import recn from "../../../../public/assets/recnplay.png";
import party from "../../../../public/assets/party.png";
import { TechEvents, EducationalEvents, CorporativeEvents } from "@/utils/data";
import { Sections } from "@/components/sections";
import { Footer } from "@/components/footer";
import background from "../../../../public/assets/background.png"
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div>
      
      <Header />
      <Carrossel images={[nasa, recn, party]} />

      <div className="bg-[#E7E3DB]">
      
   
          <Sections eventos={TechEvents} categoria="Tecnologia" link="#" />
     <Separator className="my-8 bg-gray-300 h-[1px]" />
       
        <Sections
          eventos={EducationalEvents}
          categoria="Cursos e workshops"
          link="#"
        />

            <Separator className="my-8 bg-gray-300 h-[1px]" />
     
        <Sections
          eventos={CorporativeEvents}
          categoria="Eventos corporativos"
          link="#"
        />
      </div>
      <Footer/>
    </div>
  );
}
