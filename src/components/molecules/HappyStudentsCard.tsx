import Image from "next/image";
import { place } from "../atoms/Place";
import { StarIcon } from "../atoms/StarIcon";

const HAPPY_STUDENTS = {
  label: "Happy Students",
  rating: "4.5 (240)",
  overflow: "2K+",
  avatars: Array.from(
    { length: 7 },
    (_, i) => `/images/avatars/avatar-${i + 1}.webp`,
  ),
} as const;

export function HappyStudentsCard() {
  return (
    <div
      className="absolute flex w-[258px] flex-col gap-2 rounded-2xl bg-white p-4 "
      style={place(328, 837)}
    >
      <div>
        <p className="type-label-m text-black">{HAPPY_STUDENTS.label}</p>
        <p className="flex items-center text-[10px] leading-[19px] text-gray-700">
          {HAPPY_STUDENTS.rating}
          <StarIcon className="text-electric-lime-500" />
        </p>
      </div>
      <div className="flex w-max -space-x-4">
        {HAPPY_STUDENTS.avatars.map((src) => (
          <Image
            key={src}
            src={src}
            alt=""
            width={43}
            height={43}
            className="size-[43px] rounded-full object-cover"
          />
        ))}
        <span className="grid size-[43px] place-items-center rounded-full bg-electric-lime-500 text-body-xs font-bold text-gray-950">
          {HAPPY_STUDENTS.overflow}
        </span>
      </div>
    </div>
  );
}