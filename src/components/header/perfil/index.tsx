"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface Props {
  title: string;
}

export function HeaderPerfil({ title }: Props) {
  const router = useRouter();

  return (
    <header className="flex items-center justify-between pt-8 px-8">
      <Button
        onClick={() => router.push("/screens/home")}
        className="rounded-full shadow cursor-pointer "
      >
        <ChevronLeft />
      </Button>

      <h1 className="text-2xl font-bold">{title}</h1>

      <div></div>
    </header>
  );
}
