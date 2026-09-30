import { Course, Stat } from "../types";


/** Course shown in the "Professional Growth" visual (Figma › Course_Card_1). */
export const FEATURED_COURSE: Course = {
  id: "learn-figma-from-basic",
  title: "Learn Figma from Basic",
  creatorName: "purepearl studio",
  categorySlug: "design",
  level: "Beginner",
  price: 25,
  priceSuffix: "/lifetime",
  rating: 4.5,
  lessonCount: 17,
  durationLabel: "2 hours 16 mins",
  commentCount: 59,
  studentCount: 26,
  imageUrl: "/images/showcase/course-figma-basics.webp",
  imageAlt: "Designers sketching app wireframes on paper with sticky notes",
};

export const GROWTH_STATS: Stat[] = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

export const CREATOR_FEATURES = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
] as const;

/** Student avatars (same 7 photos as the hero's Happy Students card). */
export const STUDENT_AVATARS = Array.from(
  { length: 7 },
  (_, i) => `/images/avatars/avatar-${i + 1}.webp`,
);