"use server";

import {
  createGateToken,
  safeNextPath,
  SITE_GATE_COOKIE,
} from "@/lib/site-gate";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export type UnlockState = { error: string } | null;

export async function unlockSite(
  _prev: UnlockState,
  formData: FormData,
): Promise<UnlockState> {
  const expected = process.env.SITE_PASSWORD;
  if (!expected) {
    redirect("/");
  }

  const given = String(formData.get("password") ?? "");
  const next = safeNextPath(formData.get("next"));

  if (!given || given !== expected) {
    return { error: "Das Passwort stimmt nicht. Nochmal versuchen." };
  }

  const token = await createGateToken(expected);
  const jar = await cookies();
  jar.set(SITE_GATE_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });

  redirect(next);
}
