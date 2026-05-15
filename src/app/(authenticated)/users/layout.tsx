import UserSidebar from "@/src/components/Siderbar";

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen bg-white">
      <UserSidebar />

      <section className="ml-[280px] min-h-screen px-14 py-10">
        {children}
      </section>
    </main>
  );
};

export default UserLayout;
