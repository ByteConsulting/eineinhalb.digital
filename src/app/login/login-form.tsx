"use client";

import { unlockSite, type UnlockState } from "@/app/login/actions";
import { Button } from "@/components/ui/button";
import { useActionState } from "react";

export function LoginForm({ next }: { next: string }) {
  const [state, action, pending] = useActionState<UnlockState, FormData>(
    unlockSite,
    null,
  );

  return (
    <form action={action} className="mt-10 space-y-5">
      <input type="hidden" name="next" value={next} />
      <label className="block">
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-copper">
          Passwort
        </span>
        <input
          type="password"
          name="password"
          required
          autoFocus
          autoComplete="current-password"
          placeholder="Zugangscode eingeben"
          className="mt-3 w-full border border-line bg-cream px-4 py-3.5 text-base text-ink outline-none placeholder:text-charcoal/45 focus:border-copper focus:ring-2 focus:ring-copper/25"
        />
      </label>

      {state?.error ? (
        <p
          role="alert"
          className="border border-copper/40 bg-copper/10 px-3 py-2 text-sm text-forest"
        >
          {state.error}
        </p>
      ) : null}

      <Button type="submit" size="lg" className="w-full" disabled={pending}>
        {pending ? "Prüfen…" : "Site freischalten"}
      </Button>
    </form>
  );
}
