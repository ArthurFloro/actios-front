import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Props {
  src: string;
  abreviacao: string;
}

export function AvatarComponenteInstituicao({ src, abreviacao }: Props) {
  return (
    <Avatar>
      <AvatarImage src={src} />
      <AvatarFallback>{abreviacao}</AvatarFallback>
    </Avatar>
  );
}
