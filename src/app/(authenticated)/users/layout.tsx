import { AccountService } from "@/src/features/account-details/services/account";
import UserSidebar from "@/src/components/Siderbar";

const UserLayout = async ({ children }: { children: React.ReactNode }) => {
  const profile = await AccountService.getProfile();

  return (
    <main className="min-h-screen bg-white">
      <UserSidebar
        name={profile?.name ?? "Jason Dev."}
        email={profile?.email ?? "jasondev@example.com"}
        avatar={profile?.avatar ?? null}
      />

      <section className="ml-[280px] min-h-screen px-14 py-10">
        {children}
      </section>
    </main>
  );
};

export default UserLayout;
