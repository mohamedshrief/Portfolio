import { Button } from "../ui/button";
import { Wand } from "lucide-react";

interface IProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function SideMenuButton({ isOpen, setIsOpen }: IProps) {
  return (
    <div>
      <Button
        className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-violet-600 to-indigo-700 hover:from-purple-500 hover:via-violet-500 hover:to-indigo-600 border-2 border-purple-400"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* أيقونة العصا مع التوهج والدوران */}
        <div>
          <Wand className="relative z-10 text-white w-5 h-5" />
        </div>
      </Button>
    </div>
  );
}
