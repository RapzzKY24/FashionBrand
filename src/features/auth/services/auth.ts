import { apiFetch } from "@/src/shared/api";

type ApiResponse<T> = {
  status: string;
  message: string;
  data: T;
};

export type LoginFormDto = {
  email: string;
  password: string;
};

export type RegisterFormDto = {
  name: string;
  email: string;
  password: string;
};

export type AuthResponse = {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
  };
};

export const AuthService = {
  login: async (form: LoginFormDto) => {
    return await apiFetch<ApiResponse<AuthResponse>>("/auth/login", {
      method: "POST",
      body: form,
    });
  },

  register: async (form: RegisterFormDto) => {
    return await apiFetch<ApiResponse<AuthResponse>>("/auth/register", {
      method: "POST",
      body: form,
    });
  },
};
