import { API_BASE_URL } from "@/src/shared/api/config";
import { cookies } from "next/headers";

export async function GET() {
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

  const res = await fetch(`${API_BASE_URL}/cart`, {
    headers: {
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

export async function POST(req: Request) {
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
  const res = await fetch(`${API_BASE_URL}/cart`, {
    method: "POST",
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

export async function DELETE() {
  const token = (await cookies()).get("token")?.value;
  const res = await fetch(`${API_BASE_URL}/cart`, {
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
