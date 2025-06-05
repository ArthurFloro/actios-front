"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AvatarComponenteInstituicao } from "@/components/avatar/instituição";

interface Props {
  nomeEvento: string;
  dataHora: string;
  local: string;
  palestrante: string;
  especialidade: string;
  src: string;
  abreviacao: string;
}

export function IngressoCard({
  nomeEvento,
  dataHora,
  local,
  palestrante,
  especialidade,
  src,
  abreviacao,
}: Props) {
  const [open, setOpen] = useState(false);

  const router = useRouter();

  // dentro do componente

  // Dentro do componente IngressoCard

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  // ...

  const registrarNoEvento = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // simula requisição

      const dataEvento = new Date();
      const dia = dataEvento.getDate().toString().padStart(2, "0");
      const mes = (dataEvento.getMonth() + 1).toString().padStart(2, "0");
      const ano = dataEvento.getFullYear();
      const hora = dataEvento.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });

      const dataFormatada = `${dia}/${mes}/${ano}`;

      toast("Registrado com sucesso", {
        description: `${dataFormatada} às ${hora}`,
      });

      // envia para a página de ingresso com query params
      router.push(
        `/usuario/ingressos?nomeEvento=${encodeURIComponent(
          nomeEvento
        )}&participante=${encodeURIComponent(
          nome
        )}&emailParticipante=${encodeURIComponent(
          email
        )}&categoria=Congresso&data=${dataFormatada}&hora=${hora}&local=${encodeURIComponent(
          local
        )}`
      );
    } catch (err) {
      console.error("Erro ao registrar:", err);
      toast("Erro ao registrar", {
        description: "Tente novamente mais tarde.",
      });
    }
  };

  return (
    <div className="flex items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>{nomeEvento}</CardTitle>
          <CardDescription>
            {dataHora} • {local}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex items-center gap-4">
            <p className="text-sm font-semibold ">{palestrante}</p>
            <AvatarComponenteInstituicao src={src} abreviacao={abreviacao} />
          </div>
          <p className="text-sm text-muted-foreground">
            Presidente do evento, {palestrante} é especialista em{" "}
            {especialidade}.
          </p>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Dialog open={open} onOpenChange={setOpen}>
            <form onSubmit={(e) => e.preventDefault()}>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="border-yellow-500 cursor-pointer border-2"
                >
                  Registrar
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle className="text-yellow-500">
                    Preencha suas informações
                  </DialogTitle>
                  <DialogDescription>
                    Registre-se no(a) {nomeEvento} para garantir sua vaga
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                  <div className="grid gap-3">
                    <Label htmlFor="name-1">Nome</Label>
                    <Input
                      id="name-1"
                      name="name"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="username-1"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button
                    variant="destructive"
                    className="cursor-pointer"
                    onClick={() => setOpen(false)}
                  >
                    Cancelar
                  </Button>
                  <Button
                    variant="outline"
                    className="cursor-pointer border-yellow-500 border-2"
                    onClick={registrarNoEvento}
                  >
                    Registrar
                  </Button>
                </DialogFooter>
              </DialogContent>
            </form>
          </Dialog>
        </CardFooter>
      </Card>
    </div>
  );
}
