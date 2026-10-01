import { logos } from "@/src/data/logos";
import { BrandLogo } from "@/src/components/molecules/BrandLogo";

export function LogoCloud() {
  return (
    <section
      aria-label="Trusted companies"
      className="
        bg-surface
        py-10
        sm:py-12
        lg:py-14
      "
    >
      <div
        className="
          container-content
          flex
          flex-wrap
          items-center
          justify-center
          gap-x-8
          gap-y-7

          sm:gap-x-10
          sm:gap-y-8

          lg:flex-nowrap
          lg:justify-between
          lg:gap-0
        "
      >
        {logos.map((logo, index) => (
          <BrandLogo
            key={`${logo.name}-${index}`}
            logo={logo}
          />
        ))}
      </div>
    </section>
  );
}