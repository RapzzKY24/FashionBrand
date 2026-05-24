"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AuthService } from "../services/auth";

export async function loginAction(_prevState: unknown, formData: FormData) {
  const email = String(formData.get("email") || "");
  const password = String(formData.get("password") || "");

  try {
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
  } catch {
    return { error: "Invalid email or password." };
  }

  redirect("/");
}

export async function registerAction(_prevState: unknown, formData: FormData) {
  const name = String(formData.get("name") || "");
  const email = String(formData.get("email") || "");
  const password = String(formData.get("password") || "");

  try {
    const response = await AuthService.register({
      name,
      email,
      password,
    });

    if (response.status !== "success") {
      return { error: response.message || "Register failed" };
    }
  } catch {
    return { error: "Something went wrong. Please try again." };
  }

  redirect("/auth/login");
}

export async function logoutAction(): Promise<void> {
  const cookieStore = await cookies();

  cookieStore.delete("token");
  cookieStore.delete("user_role");

  redirect("/");
}
