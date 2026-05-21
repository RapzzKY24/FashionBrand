import { apiFetch } from "@/src/shared/api";
import { Profile } from "../types/account.types";

export const AccountService = {
  getProfile: async (): Promise<Profile | null> => {
    try {
      const json = await apiFetch<{ data: Profile }>("/me", {
        cache: "no-store",
      });
      return json.data ?? null;
    } catch {
      return null;
    }
  },
};
