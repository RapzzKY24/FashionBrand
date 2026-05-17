import { AuthBrandPanel } from "../components/authBrandPanel";
import { LoginContent } from "../components/loginContent";

export const LoginPage = () => {
  return (
    <section className="grid min-h-screen grid-cols-12 bg-white">
      <AuthBrandPanel
        subtitle="Welcome Back"
        heading="Minimal Streetwear For Modern Expression."
        footer="© 2026 Reflect. All rights reserved."
      />

      <LoginContent />
    </section>
  );
};
