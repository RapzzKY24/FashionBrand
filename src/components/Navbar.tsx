import { cookies } from "next/headers";
import NavbarClient from "./NavbarClient";

const Navbar = async () => {
  const cookieStore = await cookies();

  const token = cookieStore.get("token")?.value;
  const userRole = cookieStore.get("user_role")?.value;

  return <NavbarClient isLoggedIn={!!token} userRole={userRole} />;
};

export default Navbar;
