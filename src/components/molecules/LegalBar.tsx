import { legalLinks } from "@/src/data/footer-links";
import { FooterLink } from "../atoms/FooterLink";

export function LegalBar() {
  return (
    <div className="type-body-s flex flex-col gap-4 text-label sm:flex-row sm:items-center sm:justify-between">
      <p>@ 2023 ByteSpace. All rights reserved.</p>
      <ul className="flex flex-wrap gap-x-6 gap-y-2">
        {legalLinks.map((l) => (
          <li key={l.href}>
            <FooterLink href={l.href}>{l.label}</FooterLink>
          </li>
        ))}
      </ul>
    </div>
  );
}