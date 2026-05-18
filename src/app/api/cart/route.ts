import { cookies } from "next/headers";

export async function GET() {
  const token = (await cookies()).get("token")?.value;
  const res = await fetch("http://localhost:8080/api/v1/cart", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return Response.json(data, { status: res.status });
}

export async function POST(req: Request) {
  const token = (await cookies()).get("token")?.value;
  const body = await req.json();
  const res = await fetch("http://localhost:8080/api/v1/cart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return Response.json(data, { status: res.status });
}

export async function UPDATE(req: Request) {
  const token = (await cookies()).get("token")?.value;
  const body = await req.json();
  const res = await fetch(`http://localhost:8080/api/v1/cart/${body.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return Response.json(data, { status: res.status });
}

export async function DELETE() {
  const token = (await cookies()).get("token")?.value;
  const res = await fetch(`http://localhost:8080/api/v1/cart/`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return Response.json(data, { status: res.status });
}
