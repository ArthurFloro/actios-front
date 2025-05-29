"use client";

import { useEffect, useState } from "react";
import { CalendarCheck2, Search, Ticket } from "lucide-react";
import { Logo } from "../logo";
import { TrocarTema } from "../darkmode/button";
import { Button } from "../ui/button";
import { AvatarComponente } from "../avatar";
import { Input } from "../ui/input";
import { usePathname, useRouter } from "next/navigation";

export function Header() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 0); // se scroll > 0, ativa fixed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const router = useRouter();
  const pathname = usePathname();

  return (
    <header
      className={`flex items-center justify-between  p-4 w-full transition-all duration-300 z-50 ${
        isFixed
          ? "fixed top-0 bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-md"
          : "relative bg-transparent"
      }`}
    >
      <div className="flex items-center gap-8">
        <Logo font={2} />
        <div className="w-[30rem]">
          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
            <Input
              className="w-full p-6 pl-12 rounded-2xl shadow-xl"
              placeholder="Pesquisar eventos, palestras, cursos, faculdades"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 mr-4">
        <TrocarTema />

        {pathname !== "/usuario/eventos" && (
          <Button
            onClick={() => router.push("/usuario/eventos")}
            className="flex cursor-pointer shadow-none border-none text-black dark:text-white hover:text-gray-700 hover:bg-transparent bg-transparent items-center gap-2"
          >
            <CalendarCheck2 />
            <h1>Meus eventos</h1>
          </Button>
        )}

        {pathname !== "/usuario/ingressos" && (
          <Button
            onClick={() => router.push("/usuario/ingressos")}
            className="flex cursor-pointer shadow-none border-none text-black dark:text-white hover:text-gray-700 hover:bg-transparent bg-transparent items-center gap-2"
          >
            <Ticket />
            <h1>Meus ingressos</h1>
          </Button>
        )}

        <AvatarComponente src="https://github.com/shadcn.png" abreviacao="AF" />
      </div>
    </header>
  );
}
