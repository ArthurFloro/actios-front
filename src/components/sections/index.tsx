import { ChevronRight } from "lucide-react";
import { Cards } from "../cards";
import Link from "next/link";

interface EventDataType {
  id: number;
  nomeEvento: string;
  data: string;
  hora: string;
  image: string;
  avatar: string;
}

interface Props {
  categoria: string;
  link: string;
  eventos: EventDataType[]; // 👈 nova prop com os dados dos cards
}

export function Sections({ categoria, link, eventos }: Props) {
  return (
    <div className="p-8 space-y-8 mt-0 mb-12">
      <div className="flex items-center justify-around w-full">
        <h1 className="font-bold text-xl">{categoria}</h1>
        <div>
        
        </div>
        <div className="flex font-bold gap-2 items-center justify-center">
          <Link className="text-yellow-500 font-bold" href={link}>Veja mais</Link>
          <div className="bg-white rounded-full p-2">
            <ChevronRight className="text-yellow-500 cursor-pointer" size={16} />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-6 flex-wrap">
        {eventos.map((item) => (
          <Cards
            key={item.id}
            nomeEvento={item.nomeEvento}
            data={item.data}
            hora={item.hora}
            image={item.image}
            avatar={item.avatar}
          />
        ))}
      </div>
    </div>
  );
}
