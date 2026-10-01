import { footerLinkGroups } from "@/src/data/footer-links";
import { Logo } from "../atoms/Logo";
import { FooterLink } from "../atoms/FooterLink";
import { FooterLinkColumn } from "../molecules/FooterLinkColumn";
import { LegalBar } from "../molecules/LegalBar";
import { NewsletterForm } from "../molecules/NewsletterForm";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="container-content pt-12 pb-8 lg:pt-18">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-(--spacing-gutter)">
          <div className="flex max-w-[500px] flex-col">
            <Logo />
            <p className="type-body-m mt-4 text-label">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            <div className="mt-10">
              <NewsletterForm />
            </div>

            <p className="type-body-s mt-6 max-w-[420px] text-label">
              By subscribing, you agree to our{" "}
              <FooterLink href="/privacy" className="underline-offset-2 hover:underline">
                Privacy Policy
              </FooterLink>{" "}
              and consent to receive updates from our company.
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3">
            {footerLinkGroups.map((group) => (
              <FooterLinkColumn key={group.id} group={group} />
            ))}
          </nav>
        </div>

        <div className="mt-16 border-t border-border pt-8 lg:mt-24">
          <LegalBar />
        </div>
      </div>
    </footer>
  );
}