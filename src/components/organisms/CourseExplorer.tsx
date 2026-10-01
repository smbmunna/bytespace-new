"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    <motion.section
      aria-labelledby="course-explorer-heading"
      className={cn("pt-[72px]", className)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container-content flex flex-col items-center">
        <SectionHeading
          id="course-explorer-heading"
          title={COPY.title}
          description={COPY.description}
        />

        <div className="mt-[42px] w-full flex justify-center">
          <CategoryTabs
            rows={tabRows}
            activeId={activeId}
            onSelect={setActiveId}
          />
        </div>

        <AnimatePresence mode="wait">
          {visible.length > 0 ? (
            <motion.ul
              key={activeId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="mt-[77px] grid w-full grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3"
            >
              {visible.map((course, index) => (
                <motion.li
                  key={course.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  layout
                >
                  <CourseCard course={course} />
                </motion.li>
              ))}
            </motion.ul>
          ) : (
            <motion.p
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              role="status"
              className="type-body-l mt-[77px] text-shuttle-gray-400"
            >
              No courses in this category yet.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
