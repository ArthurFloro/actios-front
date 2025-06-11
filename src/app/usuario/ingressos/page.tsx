import { Header } from "@/components/header";
import { IngressoUsuario } from "@/components/IngressoUsuario";

export default function UsuarioIngressos() {
  return (
    <div className="space-y-6">
      <Header />
      <div className="flex items-center justify-center flex-col w-full">
        <h1 className="text-2xl font-bold">Meus Ingressos</h1>
      </div>
      <IngressoUsuario />
    </div>
  );
}
