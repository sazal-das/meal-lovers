import Image from "next/image";
import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import MainHeaderBackground from "./MainHeaderBackground";
import NavLink from "./NavLink";

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />

      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image
            src={logoImg}
            alt="A plate of food"
            priority={true}
            width={100}
            height={100}
          />
          Meal Lover&apos;s
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
