import { LogoMarkProps } from "@/src/types";



export function LogoMark({ type }: LogoMarkProps) {
  if (type === "wave") {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="16" cy="16" r="15" fill="currentColor" />

        <path
          d="M4 11C8 8.5 12 8.5 16 11C20 13.5 24 13.5 28 11"
          stroke="white"
          strokeWidth="2"
        />

        <path
          d="M4 16C8 13.5 12 13.5 16 16C20 18.5 24 18.5 28 16"
          stroke="white"
          strokeWidth="2"
        />

        <path
          d="M4 21C8 18.5 12 18.5 16 21C20 23.5 24 23.5 28 21"
          stroke="white"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (type === "sun") {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="16" cy="16" r="7" fill="currentColor" />

        {Array.from({ length: 12 }).map((_, index) => {
          const angle = index * 30;
          const radians = (angle * Math.PI) / 180;

          const x1 = 16 + Math.cos(radians) * 10;
          const y1 = 16 + Math.sin(radians) * 10;

          const x2 = 16 + Math.cos(radians) * 14;
          const y2 = 16 + Math.sin(radians) * 14;

          return (
            <line
              key={index}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          );
        })}
      </svg>
    );
  }

  if (type === "bolt") {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="16" cy="16" r="15" fill="currentColor" />

        <path
          d="M18.5 4.5L10 17H15.5L13.5 27.5L22 15H16.5L18.5 4.5Z"
          fill="white"
        />
      </svg>
    );
  }

  if (type === "dots") {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="16" cy="16" r="15" fill="currentColor" />

        <circle cx="11" cy="11" r="3" fill="white" />
        <circle cx="21" cy="11" r="3" fill="white" />
        <circle cx="11" cy="21" r="3" fill="white" />
        <circle cx="21" cy="21" r="3" fill="white" />
      </svg>
    );
  }

  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="16"
        cy="16"
        r="14"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <circle
        cx="16"
        cy="16"
        r="10"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <circle
        cx="16"
        cy="16"
        r="6"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <circle
        cx="16"
        cy="16"
        r="2"
        fill="currentColor"
      />
    </svg>
  );
}