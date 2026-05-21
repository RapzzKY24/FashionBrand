"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AuthService } from "../services/auth";

export async function loginAction(formData: FormData) {
  const email = String(formData.get("email") || "");
  const password = String(formData.get("password") || "");

  const response = await AuthService.login({
    email,
    password,
  });

  const { token, user } = response.data;

  const cookieStore = await cookies();

  cookieStore.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  cookieStore.set("user_role", user.role, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  redirect(user.role === "admin" ? "/admin" : "/");
}

export async function registerAction(formData: FormData) {
  const name = String(formData.get("name") || "");
  const email = String(formData.get("email") || "");
  const password = String(formData.get("password") || "");

  const response = await AuthService.register({
    name,
    email,
    password,
  });

  if (response.status === "success") {
    redirect("/auth/login");
  }
  throw new Error(response.message || "Register failed");
}

export async function logoutAction(): Promise<void> {
  const cookieStore = await cookies();

  cookieStore.delete("token");
  cookieStore.delete("user_role");

  redirect("/");
}
