import { API_BASE_URL } from "@/src/shared/api/config";
import { cookies } from "next/headers";

type Params = {
  params: Promise<{
    id: string;
  }>;
};

export async function PUT(req: Request, { params }: Params) {
  const { id } = await params;
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    return Response.json(
      {
        status: "error",
        message: "Unauthorized",
        data: {
          items: [],
          total_items: 0,
          total_price: 0,
        },
      },
      { status: 401 },
    );
  }

  const body = await req.json();
  const res = await fetch(`${API_BASE_URL}/cart/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });

  let data;
  try {
    data = await res.json();
  } catch {
    return Response.json(
      { status: "error", message: "Invalid response from backend" },
      { status: 502 },
    );
  }

  return Response.json(data, { status: res.status });
}

export async function DELETE(_req: Request, { params }: Params) {
  const { id } = await params;
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    return Response.json(
      {
        status: "error",
        message: "Unauthorized",
      },
      { status: 401 },
    );
  }

  const res = await fetch(`${API_BASE_URL}/cart/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  let data;
  try {
    data = await res.json();
  } catch {
    return Response.json(
      { status: "error", message: "Invalid response from backend" },
      { status: 502 },
    );
  }

  return Response.json(data, { status: res.status });
}
