import Spinner from "@/components/Spinner";
import classes from "./loading-meals.module.css";

const LoadingMeals = () => {
  return (
    <>
      <Spinner />
      <div className={classes.loading}>Fetching meals...</div>
    </>
  );
};

export default LoadingMeals;
