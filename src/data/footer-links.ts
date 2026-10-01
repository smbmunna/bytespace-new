import { FooterLinkGroup2, FooterLinkItem } from "../types";

export const footerLinkGroups: FooterLinkGroup2[] = [
  {
    id: "explore",
    title: "Explore",
    links: [
      { label: "Featured Courses", href: "/#featured-courses" },
      { label: "Featured Categories", href: "/#featured-categories" },
      { label: "Business", href: "/categories/business" },
      { label: "IT", href: "/categories/it" },
      { label: "Design", href: "/categories/design" },
    ],
  },
  {
    id: "categories",
    title: "Categories",
    links: [
      { label: "Development", href: "/categories/development" },
      { label: "Marketing", href: "/categories/marketing" },
      { label: "Photography", href: "/categories/photography" },
      { label: "Finance", href: "/categories/finance" },
      { label: "Sport", href: "/categories/sport" },
    ],
  },
  {
    id: "company",
    title: "Company",
    links: [
      { label: "Become a Creator", href: "/creators" },
      { label: "Affiliate Program", href: "/affiliate" },
      { label: "Contact", href: "/contact" },
      { label: "Help", href: "/help" },
      { label: "About", href: "/about" },
    ],
  },
];

export const legalLinks: FooterLinkItem[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookies Settings", href: "/cookies" },
];