import logoWhite from "../../../public/assets/logo.png";
import logoDark from "../../../public/assets/logo-white2.png";
import { useRouter } from "next/navigation";

import { useTheme } from "next-themes";
import Image from "next/image";

interface logoProps {
  size?: number;
  font?: number;
}

export function Logo({ size = 100, font = 3 }: logoProps) {
  const { theme } = useTheme();

  const logoSrc = theme === "dark" ? logoDark : logoWhite;

  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/screens/home")}
      className="items-center cursor-pointer flex justify-center"
    >
      <div className="flex items-center justify-center flex-col">
        <Image src={logoSrc} alt="logo" width={size} height={size} />
        <h1 className={`font-bold text-${font}xl`}>
          AC<span className="text-yellow-400 font-bold">TI</span>OS
        </h1>
      </div>
    </div>
  );
}
