import { Button } from "../atoms/Button";
import { SearchIcon } from "../atoms/SearchIcon";
import { COPY } from "../organisms/Hero";

export function HeroSearch({ action }: { action: string }) {
  return (
    <form
      role="search"
      action={action}
      method="get"
      className="flex w-full max-w-search items-center gap-4"
    >
      <div className="flex min-w-0 flex-1 items-center gap-2 rounded-card bg-white px-6 py-3 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-accent">
        <SearchIcon className="text-placeholder" />
        <input
          type="search"
          name="q"
          aria-label={COPY.searchLabel}
          placeholder={COPY.searchPlaceholder}
          autoComplete="off"
          className="type-body-l w-full min-w-0 bg-transparent text-body outline-none placeholder:text-placeholder"
        />
      </div>
      {/* Figma uses Mindaro/400 (#C1E338) for this button instead of the lime secondary fill */}
      <Button
        type="submit"
        variant="secondary"
        size="lg"
        className="bg-accent-button!"
      >
        {COPY.searchButton}
      </Button>
    </form>
  );
}