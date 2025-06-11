import { Header } from "@/components/header";
import { IngressoUsuario } from "@/components/IngressoUsuario";
import { Suspense } from "react";

export default function UsuarioIngressos() {
  return (
    <div className="space-y-6">
      <Header />
      <div className="flex items-center justify-center flex-col w-full">
        <h1 className="text-2xl font-bold">Meus Ingressos</h1>
      </div>
      <Suspense fallback={<div>Carregando ingresso...</div>}>
        <IngressoUsuario />
      </Suspense>
    </div>
  );
}
