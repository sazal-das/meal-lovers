import classes from "./meal-item.module.css";
import Link from "next/link";
import Image from "next/image";

const MealItem = ({
  meal,
}: {
  meal: {
    title: string;
    slug: string;
    image: string;
    summary: string;
    creator: string;
  };
}) => {
  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h2>{meal.title}</h2>
          <p>by {meal.creator}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{meal.summary}</p>
        <div className={classes.actions}>
          <Link href={`/meals/${meal.slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
};

export default MealItem;
