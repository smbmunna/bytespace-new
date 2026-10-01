"use client";

import { useMemo, useState } from "react";

import { CourseCard } from "@/src/components/molecules/CourseCard";
import { CategoryTabs } from "@/src/components/molecules/CategoryTabs";
import { SectionHeading } from "@/src/components/molecules/SectionHeading";
import { CATEGORY_TAB_ROWS, COURSES, FEATURED_TAB_ID } from "@/src/data/courses";
import { cn } from "@/src/lib/cn";
import type { CategoryTab, Course } from "@/src/types";

const COPY = {
  title: "Discover Your Passion, Build Your Skills",
  description:
    "At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.",
} as const;

export interface CourseExplorerProps {
  courses?: Course[];
  tabRows?: CategoryTab[][];
  className?: string;
}

/**
 * Course discovery — Figma › Home › Frame 3 + category pills + Frame 8.
 * Intro (917px) → 42px → pill rows → 77px → 3-column grid (373px cards, 40px gaps).
 * Client component: the pills filter the grid ("Featured" shows everything).
 */
export function CourseExplorer({
  courses = COURSES,
  tabRows = CATEGORY_TAB_ROWS,
  className,
}: CourseExplorerProps) {
  const [activeId, setActiveId] = useState(FEATURED_TAB_ID);

  const visible = useMemo(
    () =>
      activeId === FEATURED_TAB_ID
        ? courses
        : courses.filter((course) => course.categorySlug === activeId),
    [courses, activeId],
  );

  return (
    <section
      aria-labelledby="course-explorer-heading"
      className={cn("pt-[72px]", className)}
    >
      <div className="container-content flex flex-col items-center">
        <SectionHeading
          id="course-explorer-heading"
          title={COPY.title}
          description={COPY.description}
        />

        <CategoryTabs
          className="mt-[42px]"
          rows={tabRows}
          activeId={activeId}
          onSelect={setActiveId}
        />

        {visible.length > 0 ? (
          <ul className="mt-[77px] grid w-full grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
            {visible.map((course) => (
              <li key={course.id}>
                <CourseCard course={course} />
              </li>
            ))}
          </ul>
        ) : (
          <p role="status" className="type-body-l mt-[77px] text-shuttle-gray-400">
            No courses in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}