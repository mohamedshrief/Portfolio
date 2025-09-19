// استيراد مكونات القائمة المنسدلة من shadcn/ui
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// استيراد مكون الزر
import { Button } from "./button";
// استيراد أيقونة الرسائل
import { MessageCircle } from "lucide-react";

/**
 * واجهة الخصائص لمكون التواصل
 */
interface IProps {
  buttonText?: string; // نص الزر (اختياري)
  buttunStyle?: string; // تنسيق الزر (اختياري)
}

/**
 * مكون قائمة التواصل المنسدلة
 * يحتوي على:
 * - زر التواصل مع أيقونة
 * - قائمة منسدلة بخيارين: WhatsApp و Email
 * - روابط مباشرة للتواصل
 * - تصميم متجاوب مع تأثيرات hover
 */
export default function ContactMe({ buttonText, buttunStyle }: IProps) {
  return (
    <DropdownMenu>
      {/* زر فتح القائمة المنسدلة */}
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className={
            buttunStyle
              ? buttunStyle
              : "border-2 border-purple-400/50 hover:border-purple-400 text-purple-400 hover:text-purple-300 px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
          }
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          {buttonText ? buttonText : "Contact Me"}
        </Button>
      </DropdownMenuTrigger>

      {/* محتوى القائمة المنسدلة */}
      <DropdownMenuContent className="w-48 bg-black/90 border border-purple-400/30 backdrop-blur-md">
        <DropdownMenuGroup>
          {/* خيار WhatsApp */}
          <DropdownMenuItem
            onClick={() => window.open("https://wa.me/201122871426", "_blank")}
            className="text-white hover:text-cyan-400 hover:bg-purple-900/30 cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              WhatsApp
            </div>
          </DropdownMenuItem>

          {/* خيار Email */}
          <DropdownMenuItem
            onClick={() =>
              window.open("mailto:mohmedshrief97@gmail.com", "_blank")
            }
            className="text-white hover:text-cyan-400 hover:bg-purple-900/30 cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Email
            </div>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
