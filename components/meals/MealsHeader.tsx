import classes from "@/app/meals/page.module.css";
import Link from "next/link";

const MealsHeader = () => {
  return (
    <header className={classes.header}>
      <h1>
        Delicious Meals, created{" "}
        <span className={classes.highlight}>by you</span>
      </h1>
      <p>Explore our collection of delicious meals created by our community.</p>
      <p className={classes.cta}>
        <Link href="/meals/share">Share your favorite recipe</Link>
      </p>
    </header>
  );
};

export default MealsHeader;
