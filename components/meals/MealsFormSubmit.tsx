"use client";

import { useFormStatus } from "react-dom";

const MealsForm = () => {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending}>
      {pending ? "Submitting..." : "Share Meal"}
    </button>
  );
};

export default MealsForm;
