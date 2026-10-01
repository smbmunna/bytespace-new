import { ExploreCategoryCardProps } from "@/src/types";
import Image from "next/image";

export default function CategoryCard({ name, icon }: ExploreCategoryCardProps) {
  return (
    <div className="border border-[var(--color-border)] rounded-[var(--radius-card)] p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-md cursor-pointer group">
      <div className="w-16 h-16 rounded-full bg-[var(--color-accent)] flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
        <span className="text-2xl" role="img" aria-label={name}>
          {" "}
          <Image
            src={icon}
            height={60}
            width={60}
            alt={`Portrait of ${name}`}
          />
        </span>
      </div>
      <h3 className="type-label-l text-[var(--color-label)]">{name}</h3>
    </div>
  );
}
