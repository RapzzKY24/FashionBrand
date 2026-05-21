import { PageTransition } from "@/src/features/auth/components/PageTransition";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen bg-white">
      <PageTransition>{children}</PageTransition>
    </main>
  );
};

export default AuthLayout;
