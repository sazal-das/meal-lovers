"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./main-header.module.css";

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  return (
    <Link
      className={pathname.startsWith(href) ? classes.active : ""}
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavLink;
