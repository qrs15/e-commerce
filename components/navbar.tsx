import Link from "next/link";

const navbarLinks = [
  { name: "Home", link: "/" },
  { name: "Products", link: "/products" },
  { name: "Checkout", link: "/checkout" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="hover:text-blue-600 font-semibold text-lg">
          Thunder
        </Link>

        {/* Menu links */}
        <div className="hidden md:flex space-x-6">
          {navbarLinks.map((item, index) => (
            <Link href={item.link} key={index} className="hover:text-blue-600">
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right section (icons / cart / login later) */}
        <div className="flex items-center space-x-4">
          {/* placeholder for future icons */}
        </div>
      </div>
    </nav>
  );
}
