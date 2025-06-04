import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

import { User, Clock, Ticket, Heart } from "lucide-react";

interface Props {
  src: string;
  abreviacao: string;
  nomePerfil: string;
}

export function AvatarComponente({ nomePerfil, src, abreviacao }: Props) {
  return (
    <button className="cursor-pointer hover:shadow-2xl transition">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar>
            <AvatarImage src={src} />
            <AvatarFallback>{abreviacao}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="p-2 mr-4">
          <DropdownMenuLabel>{nomePerfil}</DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuItem className="flex cursor-pointer items-center gap-2">
            <User className="w-4 h-4" />
            Perfil
          </DropdownMenuItem>

          <DropdownMenuItem className="flex cursor-pointer items-center gap-2">
            <Clock className="w-4 h-4" />
            Histórico
          </DropdownMenuItem>

          <DropdownMenuItem className="flex cursor-pointer items-center gap-2">
            <Ticket className="w-4 h-4" />
            Ingressos
          </DropdownMenuItem>

          <DropdownMenuItem className="flex cursor-pointer items-center gap-2">
            <Heart className="w-4 h-4" />
            Favoritos
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </button>
  );
}
