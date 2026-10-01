import { LogoTextProps } from "@/src/types";


export function LogoText({ children }: LogoTextProps) {
  return (
    <span className="type-label-l text-shuttle-gray-400">
      {children}
    </span>
  );
}