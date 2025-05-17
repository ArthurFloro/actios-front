import { Calendar, Clock } from "lucide-react";
import { Button } from "../ui/button";
import { AvatarComponente } from "../avatar";
import Image from "next/image";

interface Props {
  nomeEvento: string;
  data: string;
  hora: string;
  image: string;
  avatar: string;
}

//transition-transform hover:scale-105

export function Cards({ nomeEvento, data, hora, image, avatar }: Props) {
  return (
    <div className="flex items-center cursor-pointer dark:hover:bg-black dark:shadow-2xl dark:hover:rounded-4xl hover:bg-white hover:shadow-2xl transition hover:rounded-4xl p-4 flex-col justify-center">
      <div className=" rounded-2xl">
        <Image
          src={image}
          width={360}
          height={200}
          alt="recn"
          className="max-w-60 rounded-4xl h-60"
        />
        <div className="flex flex-col gap-4">
          <Button className="border-0 bg-transparent cursor-pointer text-black dark:text-white hover:bg-transparent ">
            {nomeEvento}
          </Button>

          <div className="flex p-2 items-center gap-2">
            <Calendar />
            <span>{data}</span>
          </div>
          <div className="flex p-2 items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock />
              <span>{hora}</span>
            </div>
            <AvatarComponente src={avatar} abreviacao="AF" />
          </div>
        </div>
      </div>
    </div>
  );
}
