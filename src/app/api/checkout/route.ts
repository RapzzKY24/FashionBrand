import { cookies } from "next/headers";

export async function POST(req: Request) {
  const token = (await cookies()).get("token")?.value;
  const body = await req.json();

  const res = await fetch("http://localhost:8080/api/v1/checkout", {
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
