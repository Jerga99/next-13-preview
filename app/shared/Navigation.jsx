
import Link from "next/link";

export default function Navigation() {
  const links = [
    { name: "Home", path: "/" },
    { name: "Blogs", path: "/blogs" },
    { name: "Products", path: "/products" },
    { name: "Shop", path: "/shop" },
    { name: "Dashboard", path: "/dashboard" },
  ]
  return (
    <div>
      { links.map(link => 
        <Link 
          key={link.name} href={link.path}>{link.name}{` `}
        </Link>
      )}
    </div>
  )
}
