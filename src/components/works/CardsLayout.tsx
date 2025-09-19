import type React from "react";

interface CardsLayoutProps {
  children: React.ReactNode;
}

export default function CardsLayout({ children }: CardsLayoutProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch gap-x-7 gap-y-9 my-8">
      {children}
    </div>
  );
}
