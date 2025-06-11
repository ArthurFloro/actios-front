import { CardFavoritos } from "@/components/cards/favoritos";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { TechEvents, CorporativeEvents, EducationalEvents } from "@/utils/data";

export default function UsuarioEventos() {
  const allEvents = [...TechEvents, ...CorporativeEvents, ...EducationalEvents];

  return (
    <div>
      <Header />

      <div className="flex items-center justify-center pt-12">
        <h1 className="text-2xl font-bold">Eventos Favoritos</h1>
      </div>

      <div className="flex items-center justify-center pt-20 pb-48">
        <div className="grid grid-cols-3 gap-12">
          {allEvents.map((evento) => (
            <CardFavoritos
              key={evento.id}
              img={evento.image}
              title={evento.nomeEvento}
              date={evento.data}
              locale={evento.localizacao}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
