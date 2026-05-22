import { API_BASE_URL } from "@/src/shared/api/config";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  const token = (await cookies()).get("token")?.value;
  const body = await req.json();

  const res = await fetch(`${API_BASE_URL}/checkout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();

  return Response.json(data, {
    status: res.status,
  });
}
