import { CheckCircleIcon } from "@/src/components/atoms/CheckCircleIcon";

export interface FeatureListItemProps {
  children: string;
}

/** Figma › check_circle (24) + 18px label, gap 8. Regular weight overrides Label L's Medium. */
export function FeatureListItem({ children }: FeatureListItemProps) {
  return (
    <li className="flex items-center gap-2">
      <CheckCircleIcon className="text-brand" />
      <span className="type-label-l font-normal! text-heading">{children}</span>
    </li>
  );
}