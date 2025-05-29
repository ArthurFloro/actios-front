import {
  TechEvents,
  CorporativeEvents,
  EducationalEvents,
} from "../../../../utils/data";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { HeaderDetalhes } from "@/components/header/detalhes";
import { CalendarRange, ChevronRight, MapPin } from "lucide-react";
import { IngressoCard } from "@/components/cards/ingressoCard";

export default function DetalhesEvento({ params }: { params: { id: string } }) {
  const id = Number(params.id);

  const allEvents = [...TechEvents, ...CorporativeEvents, ...EducationalEvents];
  const evento = allEvents.find((event) => event.id === id);

  if (!evento) return notFound();

  return (
    <div>
      <HeaderDetalhes produtor="Produtor teste" produtorContato="#" />

      {/* Bloco com fundo escuro e imagem borrada ao fundo */}
      <div className="relative p-12 w-full bg-black flex items-center justify-center min-h-[400px] overflow-hidden">
        {/* Imagem de fundo com blur e opacidade */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40 blur-sm z-0"
          style={{ backgroundImage: `url(${evento.image})` }}
        />

        {/* Conteúdo acima da imagem de fundo */}
        <div className="flex flex-1 relative justify-around items-center z-10">
          <div>
            <h1 className="text-3xl font-bold mb-4 text-white">
              {evento.nomeEvento}
            </h1>
            <p className="flex items-center gap-2 text-white">
              <CalendarRange size={18} />
              {evento.data}
              <ChevronRight size={15} />
              {evento.hora}
            </p>
            <p className="text-white"></p>
            <p className="flex items-center gap-2 text-white">
              <MapPin size={18} />
              {evento.localizacao}
            </p>
          </div>

          <Image
            src={evento.image}
            alt="Evento"
            width={600}
            height={300}
            className="rounded-lg mb-4"
          />
        </div>
      </div>
      <div className="p-8 grid grid-cols-2">
        <div>
          <h1 className="text-3xl font-bold">Descrição do evento</h1>
          <p>{evento.descricao}</p>
        </div>
        <div className="mr-0">
          <IngressoCard />
        </div>
      </div>

      <Footer />
    </div>
  );
}
