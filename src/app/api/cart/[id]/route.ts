import { cookies } from "next/headers";

type Params = {
  params: Promise<{
    id: string;
  }>;
};

export async function PUT(req: Request, { params }: Params) {
  const { id } = await params;
  const token = (await cookies()).get("token")?.value;
  const body = await req.json();
  const res = await fetch(`http://localhost:8080/api/v1/cart/${id}`, {
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

export async function DELETE(_req: Request, { params }: Params) {
  const { id } = await params;
  const token = (await cookies()).get("token")?.value;
  const res = await fetch(`http://localhost:8080/api/v1/cart/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return Response.json(data, { status: res.status });
}
