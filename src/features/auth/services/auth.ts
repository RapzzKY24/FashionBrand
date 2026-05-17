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
    const res = await fetch("http://localhost:8080/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
      cache: "no-store",
    });

    const resJson = (await res.json()) as ApiResponse<AuthResponse>;

    if (!res.ok) {
      throw new Error(resJson.message || "Login failed");
    }

    return resJson;
  },
  register: async (form: RegisterFormDto) => {
    const res = await fetch("http://localhost:8080/api/v1/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
      cache: "no-store",
    });
    const resJson = (await res.json()) as ApiResponse<AuthResponse>;

    if (!res.ok) {
      throw new Error(resJson.message || "Login failed");
    }

    return resJson;
  },
};
