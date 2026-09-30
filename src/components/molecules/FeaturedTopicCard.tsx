import { place } from "../atoms/Place";

const FEATURED_TOPIC = {
  title: "UI/UX Design",
  courses: "200 Courses",
  students: "1000+ Students",
} as const;


export function FeaturedTopicCard() {
  return (
    <div
      className="absolute flex w-[208px] flex-col rounded-2xl bg-white p-4 backdrop-blur-[10px]"
      style={place(404, 639)}
    >
      <p className="type-label-m text-label">{FEATURED_TOPIC.title}</p>
      <p className="flex items-center gap-2 text-[10px] leading-[19px] text-shuttle-gray-400">
        <span>{FEATURED_TOPIC.courses}</span>
        <span aria-hidden="true">•</span>
        <span>{FEATURED_TOPIC.students}</span>
      </p>
    </div>
  );
}
