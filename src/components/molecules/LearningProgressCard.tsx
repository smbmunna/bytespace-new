import { place } from "../atoms/Place";

const LEARNING_PROGRESS = { label: "Learning Progress", value: 55 } as const;


export function LearningProgressCard() {
  return (
    <div
      className="absolute flex w-[232px] flex-col gap-2 rounded-2xl bg-white p-4 backdrop-blur-[10px]"
      style={place(842, 651)}
    >
      <p className="type-label-s text-black">{LEARNING_PROGRESS.label}</p>
      <p className="type-metric w-fit bg-clip-text text-black">
        {LEARNING_PROGRESS.value}%
      </p>
      <div
        role="presentation"
        className="h-2 w-[200px] overflow-hidden rounded-card bg-chip"
      >
        <div
          className="h-full rounded-card bg-electric-lime-500"
          style={{ width: `${LEARNING_PROGRESS.value}%` }}
        />
      </div>
    </div>
  );
}
