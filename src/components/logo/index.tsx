import Image from "next/image";
import logoWhite from "../../../public/assets/logo.png";
import logoDark from "../../../public/assets/logo-white2.png";

import { useTheme } from "next-themes";

interface logoProps {
  size?: number;
  font?: number;
}

export function Logo({ size = 100, font = 3 }: logoProps) {
  const { theme } = useTheme();

  const logoSrc = theme === "dark" ? logoDark : logoWhite;

  return (
    <div className="items-center flex justify-center">
      <div className="flex items-center justify-center flex-col">
        <Image src={logoSrc} alt="logo" width={size} height={size} />
        <h1 className={`font-bold text-${font}xl`}>
          AC<span className="text-yellow-400 font-bold">TI</span>OS
        </h1>
      </div>
    </div>
  );
}
