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
      <HeaderDetalhes produtor={evento.nomeEvento} produtorContato="#" />

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
      <div className="p-24 grid bg-[#E7E3DB] grid-cols-2">
        <div className="border shadow rounded-2xl bg-white flex items-center justify-center p-6">
          <div className="flex flex-col gap-4 max-w-[600px]">
            <h1 className="text-3xl font-bold text-yellow-500">
              Descrição do evento
            </h1>
            <p className="text-gray-700 text-base leading-relaxed">
              {evento.descricao}
            </p>
            <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
              <li>
                <strong>Data:</strong> {evento.data}
              </li>
              <li>
                <strong>Local:</strong> {evento.localizacao}
              </li>
              <li>
                <strong>Público-alvo:</strong> Estudantes de tecnologia
              </li>
            </ul>
          </div>
        </div>

        <IngressoCard
          nomeEvento={evento.nomeEvento}
          dataHora={evento.data}
          local={evento.localizacao}
          palestrante={evento.palestrante}
          especialidade={evento.especialidade}
          src={evento.perfilPalestranteImg}
          abreviacao="A"
        />
      </div>

      <Footer />
    </div>
  );
}
