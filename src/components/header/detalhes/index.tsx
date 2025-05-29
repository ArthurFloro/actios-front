"use client";

import { Logo } from "@/components/logo";
import Link from "next/link";

interface Props {
  produtor: string;
  produtorContato: string;
}

export function HeaderDetalhes({ produtor, produtorContato }: Props) {
  return (
    <header className="p-2 border-b ">
      <div className="grid px-20 grid-cols-3 items-center ">
        <p className="flex items-center gap-2">
          <span>Fale com o produtor</span>
          <Link href={produtorContato}>[{produtor}]</Link>
        </p>

        <Logo size={80} font={1} />
      </div>
    </header>
  );
}
