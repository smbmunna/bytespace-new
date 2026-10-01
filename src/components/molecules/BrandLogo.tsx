import { LogoMark } from "@/src/components/atoms/LogoMark";
import { LogoText } from "@/src/components/atoms/LogoText";
import { BrandLogoProps } from "@/src/types";




export function BrandLogo({ logo }: BrandLogoProps) {
  return (
    <div
      className="
        flex
        shrink-0
        items-center
        gap-1.5
        text-shuttle-gray-400
      "
    >
      <LogoMark type={logo.type} />

      <LogoText>
        {logo.name}
      </LogoText>
    </div>
  );
}