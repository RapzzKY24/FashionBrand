import { ApiError } from "./errors";

const BASE_URL = "http://localhost:8080/api/v1";

export interface ApiOptions {
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  body?: unknown;
  query?: Record<string, string>;
  headers?: Record<string, string>;
  cache?: RequestCache;
}

export async function apiFetch<T = unknown>(
  endpoint: string,
  options?: ApiOptions,
): Promise<T> {
  const url = new URL(`${BASE_URL}${endpoint}`);

  if (options?.query) {
    for (const [key, value] of Object.entries(options.query)) {
      url.searchParams.append(key, value);
    }
  }

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...options?.headers,
  };

  try {
    const { cookies } = await import("next/headers");
    const token = (await cookies()).get("token")?.value;
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
  } catch {}

  const res = await fetch(url.toString(), {
    method: options?.method ?? "GET",
    headers,
    body: options?.body ? JSON.stringify(options.body) : undefined,
    cache: options?.cache,
  });

  const data: { message?: string } = await res.json();

  if (!res.ok) {
    throw new ApiError(
      data.message ?? "Something went wrong",
      res.status,
      data,
    );
  }

  return data as T;
}
