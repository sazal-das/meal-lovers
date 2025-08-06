import classes from "./meals-grid.module.css";
import MealItem from "./MealItem";

const MealsGrid = ({
  meals,
}: {
  meals: {
    id: string;
    title: string;
    slug: string;
    image: string;
    summary: string;
    creator: string;
  }[];
}) => {
  return (
    <>
      <ul className={classes.meals}>
        {meals.map((meal) => (
          <li key={meal.id}>
            <MealItem meal={meal} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default MealsGrid;
