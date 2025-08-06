import classes from "./page.module.css";
import MealsHeader from "@/components/meals/MealsHeader";
import MealsGrid from "@/components/meals/MealsGrid";

const MealsPage = () => {
  return (
    <>
      <MealsHeader />
      <main className={classes.main}>
        <MealsGrid meals={[]} />
      </main>
    </>
  );
};

export default MealsPage;
