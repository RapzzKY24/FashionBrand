import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa6";

const informationLinks = [
  { label: "My account", href: "/account" },
  { label: "Login", href: "/login" },
  { label: "My Order", href: "/orders" },
  { label: "My Cart", href: "/cart" },
  { label: "Check out", href: "/checkout" },
];

const serviceLinks = [
  { label: "About Us", href: "/about" },
  { label: "Delivery Policy", href: "/delivery-policy" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Refund Policy", href: "/refund-policy" },
  { label: "Terms & Condition", href: "/terms-condition" },
];

const socialLinks = [
  { icon: FaFacebookF, href: "#" },
  { icon: FaInstagram, href: "#" },
  { icon: FaLinkedinIn, href: "#" },
  { icon: FaXTwitter, href: "#" },
  { icon: FaYoutube, href: "#" },
  { icon: FaWhatsapp, href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-white px-16 pt-28 pb-10 mt-40">
      <div className="grid grid-cols-12 gap-12 items-start">
        <div className="col-span-6">
          <Link href="/">
            <h1 className="font-barlow font-extrabold text-[14rem] leading-none tracking-[0.08em] bg-linear-to-r from-white via-gray-500 to-[#121212] bg-clip-text text-transparent">
              REFLECT
            </h1>
          </Link>
        </div>

        <div className="col-span-2 space-y-8">
          <h2 className="font-roboto font-bold text-[22px]">Information</h2>

          <ul className="space-y-5 text-gray-300 font-roboto text-[16px]">
            {informationLinks.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="hover:text-white transition">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-2 space-y-8">
          <h2 className="font-roboto font-bold text-[22px]">Service</h2>

          <ul className="space-y-5 text-gray-300 font-roboto text-[16px]">
            {serviceLinks.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="hover:text-white transition">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-2 space-y-8">
          <h2 className="font-roboto font-bold text-[22px]">Social media</h2>

          <div className="flex items-center gap-3">
            {socialLinks.map((item, index) => {
              const Icon = item.icon;

              return (
                <Link
                  key={index}
                  href={item.href}
                  className="w-8 h-8 bg-white rounded-md flex items-center justify-center hover:bg-gray-300 transition"
                >
                  <Icon size={18} className="text-black" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 mt-24 pt-10 text-center">
        <p className="text-gray-300 font-roboto text-[16px]">
          2026 All Rights are Reserved by RapzzDEV
        </p>
      </div>
    </footer>
  );
};

export default Footer;
