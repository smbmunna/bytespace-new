import { useCallback, useState } from "react";

/**
 * Tracks the pending / error state of an async action (form submit, social sign-in…).
 * Errors thrown by the action are caught and exposed as a message.
 */
export function useAsyncAction() {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const run = useCallback(async (action: () => Promise<void>) => {
    setPending(true);
    setError(null);
    try {
      await action();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setPending(false);
    }
  }, []);

  return { pending, error, run };
}