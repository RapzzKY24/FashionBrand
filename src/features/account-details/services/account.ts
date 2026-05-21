import { cookies } from "next/headers";
import { Profile } from "../types/account.types";

const BASE_URL = "http://localhost:8080/api/v1";

export const AccountService = {
  getProfile: async (): Promise<Profile | null> => {
    const token = (await cookies()).get("token")?.value;

    if (!token) return null;

    const res = await fetch(`${BASE_URL}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });

    const json = await res.json();
    return json.data ?? null;
  },
};
