import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Props {
  src: string;
  abreviacao: string;
}

export function AvatarComponente({ src, abreviacao }: Props) {
  return (
    <Avatar className="cursor-pointer">
      <AvatarImage src={src} />
      <AvatarFallback>{abreviacao}</AvatarFallback>
    </Avatar>
  );
}
