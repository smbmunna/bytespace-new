import type { CategoryTab, Course } from "@/src/types";

export const FEATURED_TAB_ID = "featured";

/** Tab labels exactly as in Figma › Tab_Categories / Frame 6 / Frame 7 (3 staggered rows). */
export const CATEGORY_TAB_ROWS: CategoryTab[][] = [
  [
    { id: FEATURED_TAB_ID, label: "Featured" },
    { id: "music", label: "Music" },
    { id: "drawing-painting", label: "Drawing & Painting" },
    { id: "marketing", label: "Marketing" },
    { id: "animation", label: "Animation" },
    { id: "social-media", label: "Social Media" },
    { id: "ui-ux-design", label: "UI/UX Design" },
    { id: "creative-marketing", label: "Creative Marketing" },
  ],
  [
    { id: "digital-illustration", label: "Digital Illustration" },
    { id: "film-video", label: "Film & Video" },
    { id: "crafts", label: "Crafts" },
    { id: "freelance-entrepreneurship", label: "Freelance & Entrepreneurship" },
    { id: "graphic-design", label: "Graphic Design" },
    { id: "photography", label: "Photography" },
  ],
  [
    { id: "productivity", label: "Productivity" },
    { id: "web-development", label: "Web Development" },
    { id: "data-science", label: "Data Science" },
    { id: "cooking", label: "Cooking" },
  ],
];

/** Shared values: every card in Figma carries the same stats, price and creator. */
const BASE = {
  creatorName: "purepearl studio",
  level: "Beginner",
  price: 25,
  priceSuffix: "/lifetime",
  rating: 4.5,
  lessonCount: 17,
  durationLabel: "2 hours 16 mins",
  commentCount: 59,
  studentCount: 26,
} as const satisfies Partial<Course>;

/**
 * The six Featured courses (Figma › Frame 8). Titles are verbatim, including the
 * lowercase "the" in card 3. `categorySlug` values are my assumption (Figma has no mapping).
 */
export const COURSES: Course[] = [
  {
    ...BASE,
    id: "learn-figma-from-basic",
    title: "Learn Figma from Basic",
    categorySlug: "ui-ux-design",
    imageUrl: "/images/showcase/course-figma-basics.webp",
    imageAlt: "Designers sketching app wireframes on paper with sticky notes",
  },
  {
    ...BASE,
    id: "build-digital-asset",
    title: "Build Digital Asset",
    categorySlug: "graphic-design",
    imageUrl: "/images/courses/build-digital-asset.webp",
    imageAlt: "Grid of black line icons on a pale grey background",
  },
  {
    ...BASE,
    id: "the-power-of-big-data",
    title: "the Power of Big Data",
    categorySlug: "data-science",
    imageUrl: "/images/courses/power-of-big-data.webp",
    imageAlt: "Laptop screen showing a dark analytics dashboard with charts",
  },
  {
    ...BASE,
    id: "balancing-productivity-and-self-care",
    title: "Balancing Productivity and Self-Care",
    categorySlug: "productivity",
    imageUrl: "/images/courses/balancing-productivity.webp",
    imageAlt: "Tidy wooden desk with a monitor reading 'Do More'",
  },
  {
    ...BASE,
    id: "mastering-money-management",
    title: "Mastering Money Management",
    categorySlug: "freelance-entrepreneurship",
    imageUrl: "/images/courses/mastering-money.webp",
    imageAlt: "Green line chart of rising prices on a laptop screen",
  },
  {
    ...BASE,
    id: "from-idea-to-startup-success",
    title: "From Idea to Startup Success",
    categorySlug: "freelance-entrepreneurship",
    imageUrl: "/images/courses/idea-to-startup.webp",
    imageAlt: "Startup team in a bright office with a sticky-note wall",
  },
];