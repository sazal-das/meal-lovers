import classes from "./page.module.css";
import Image from "next/image";
import { Meal } from "@/app/definations";
import { getMealBySlug } from "@/lib/meals";
import { notFound } from "next/navigation";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const meal = getMealBySlug(slug) as Meal;
  if (!meal) {
    notFound();
  }
  return {
    title: meal.title,
    description: meal.summary,
    keywords: [
      "meals",
      "food",
      "community",
      "recipe",
      "recipes",
      "meal planner",
      "meal",
      "food lover",
      "food lover's",
      "food lover's community",
    ],
  };
};

const MealDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const meal = getMealBySlug(slug) as Meal;

  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, "<br />");

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image as string} fill alt={meal.title} />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
};

export default MealDetailPage;
