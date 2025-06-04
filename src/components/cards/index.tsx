"use client";
import { Calendar, Clock } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { Separator } from "../ui/separator";
import { useRouter } from "next/navigation";
import { AvatarComponenteInstituicao } from "../avatar/instituição";

interface Props {
  id: number;
  nomeEvento: string;
  data: string;
  hora: string;
  image: string;
  avatar: string;
}

export function Cards({ id, nomeEvento, data, hora, image, avatar }: Props) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/detalhes/eventos/${id}`)}
      className="flex rounded-2xl items-center bg-white  cursor-pointer dark:hover:bg-black dark:shadow-2xl dark:hover:rounded-2xl hover:bg-white hover:shadow-2xl transition hover:rounded-2xl  p-4 flex-col justify-center"
    >
      <div className=" rounded-2xl">
        <div>
          <Image
            src={image}
            width={282}
            height={158}
            alt="recn"
            className="rounded-2xl shadow-md"
          />
        </div>

        <div className="flex flex-col gap-4">
          <Button className="border-0 shadow-none bg-transparent cursor-pointer text-black dark:text-white hover:bg-transparent ">
            {nomeEvento}
          </Button>

          <div className="flex p-2 items-center gap-2">
            <Calendar />
            <span>{data}</span>
          </div>
          <Separator />
          <div className="flex p-2 items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="text-[#fdc616]" />
              <span>{hora}</span>
            </div>
            <div className="border-2 border-[#fdc616] p-2 rounded-full">
              <AvatarComponenteInstituicao src={avatar} abreviacao="AF" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
