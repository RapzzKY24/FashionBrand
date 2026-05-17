import { AuthBrandPanel } from "../components/authBrandPanel";
import { RegisterContent } from "../components/registerContent";

export const RegisterPage = () => {
  return (
    <section className="grid min-h-screen grid-cols-12 bg-white">
      <RegisterContent />

      <AuthBrandPanel
        subtitle="New Collection"
        heading="Join The Modern Streetwear Movement."
        footer="Minimal silhouettes crafted for everyday expression."
      />
    </section>
  );
};
