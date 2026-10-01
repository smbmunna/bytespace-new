
import { FooterLinkGroup2 } from "@/src/types";
import { FooterLink } from "../atoms/FooterLink";

export function FooterLinkColumn({ group }: { group: FooterLinkGroup2 }) {
  return (
    <ul className="type-body-m flex flex-col gap-3 text-label" aria-label={group.title}>
      {group.links.map((link) => (
        <li key={link.href}>
          <FooterLink href={link.href}>{link.label}</FooterLink>
        </li>
      ))}
    </ul>
  );
}