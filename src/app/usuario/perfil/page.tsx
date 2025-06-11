import TrophyBar from "@/components/barraTrofeu";
import { HeaderPerfil } from "@/components/header/perfil";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, Mail, User } from "lucide-react";

export default function UsuarioPerfil() {
  return (
    <div>
      <HeaderPerfil title="Perfil" />
      <div className="flex items-center flex-col justify-center min-h-screen">
        <div className="flex items-center flex-col gap-8">
          <div className="flex items-center gap-4 ">
            <Avatar className="w-48 h-48">
              <AvatarImage src="https://github.com/ArthurFloro.png" />
              <AvatarFallback>AF</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <h1 className="text-xl">Arthur Floro</h1>
              <a href="#" className="underline">
                arthur.floro2006@gmail.com
              </a>
              <span className="text-gray-400 text-sm">
                Análise e desenvolvimento de sistemas
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2.5">
            <TrophyBar />
            <span className="text-sm text-gray-400">
              2 horas/ 100 horas complementares
            </span>
          </div>
          <Button
            variant="outline"
            className="cursor-pointer font-bold rounded-2xl border-black border-2"
          >
            Editar perfil
          </Button>
        </div>
        <div className="mt-10 flex items-center gap-2 flex-col">
          <div className="flex flex-col gap-2">
            <h1 className="text-xl">Minha Conta</h1>
            <div className="relative w-full">
              <User
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <Input
                placeholder="Alterar nome"
                className="pl-10 border-0 border-b border-gray-400 rounded-none !focus:border-none !focus:outline-none !focus:ring-0 shadow-none"
              />
            </div>

            <div className="relative w-full">
              <Mail
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <Input
                placeholder="Alterar e-mail"
                className="pl-10 border-0 border-b border-gray-400 rounded-none !focus:border-none !focus:outline-none !focus:ring-0 shadow-none"
              />
            </div>

            <div className="relative w-full">
              <Lock
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <Input
                placeholder="Alterar senha"
                className="pl-10 border-0 border-b border-gray-400 rounded-none !focus:border-none !focus:outline-none !focus:ring-0 shadow-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
