// components/TrophyBar.tsx
import { Trophy } from "lucide-react"; // ou use um ícone SVG se preferir

export default function TrophyBar() {
  return (
    <div className="flex items-center">
      <div className="relative w-12 h-10 bg-yellow-500 rounded-l-full flex items-center justify-center">
        <div className="absolute w-6 h-6 bg-yellow-300 rotate-45 flex items-center justify-center">
          <Trophy className="w-4 h-4 text-black -rotate-45" />
        </div>
      </div>

      <div className="bg-black h-10 w-96 text-white px-4 py-2 rounded-r-full font-semibold"></div>
    </div>
  );
}
