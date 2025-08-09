import { Suspense } from "react";
import LoadingMeals from "./LoadingMeals";
import classes from "./page.module.css";
import MealsHeader from "@/components/meals/MealsHeader";
import MealsGrid from "@/components/meals/MealsGrid";
import { getMeals } from "@/lib/meals";

export const metadata = {
  title: "Meals",
  description: "Meals page",
  keywords: [
    "meals",
    "food",
    "community",
    "recipe",
    "recipes",
    "meal planner",
    "food lover",
  ],
};

const Meals = async () => {
  const meals = await getMeals();
  return <MealsGrid meals={meals as []} />;
};

const MealsPage = () => {
  return (
    <>
      <MealsHeader />
      <main className={classes.main}>
        <Suspense fallback={<LoadingMeals />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;
