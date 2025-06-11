import { Heart, MapPin } from "lucide-react";
import Image from "next/image";

interface Props {
  img: string;
  title: string;
  date: string;
  locale: string;
}

export function CardFavoritos({ img, title, date, locale }: Props) {
  return (
    <div className=" hover:bg-gray-200 transition pt-8 px-4 pb-8 rounded-4xl shadow-2xl">
      <div className="flex items-center justify-between ">
        <Image
          className="shadow-xl rounded-2xl mr-4"
          src={img}
          alt="imagem do evento"
          width={155}
          height={88}
        />

        <div className="flex flex-col">
          <h1 className="truncate w-52">{title}</h1>
          <span className="text-gray-600 text-sm">{date}</span>
          <div className="flex items-center gap-1">
            <MapPin className="text-gray-400" size={13} />
            <span className="text-gray-400 text-sm">{locale}</span>
          </div>
        </div>

        <div className="bg-yellow-500 rounded-full p-4 cursor-pointer">
          <Heart className="text-white" />
        </div>
      </div>
    </div>
  );
}
