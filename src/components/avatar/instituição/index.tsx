import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Props {
  src: string;
  abreviacao: string;
  width?: string;
  heigt?: string;
}

export function AvatarComponenteInstituicao({
  src,
  abreviacao,
  width,
  heigt,
}: Props) {
  return (
    <Avatar className={`w-[${width}] h-[${heigt}]`}>
      <AvatarImage src={src} />
      <AvatarFallback>{abreviacao}</AvatarFallback>
    </Avatar>
  );
}
