"use server";

import { Meal } from "@/app/definations";
import { saveMeal } from "./meals";
import { redirect } from "next/navigation";

const isInvalid = (text: string) => {
  return !text || text.trim() === "";
};

export const shareMeal = async (
  prevState: { message?: string } | null,
  formData: FormData
) => {
  const meal: Meal = {
    title: formData.get("title") as string,
    slug: formData.get("title") as string,
    image: formData.get("image") as string,
    summary: formData.get("summary") as string,
    instructions: formData.get("instructions") as string,
    creator: formData.get("name") as string,
    creator_email: formData.get("email") as string,
  };

  if (
    isInvalid(meal.title) ||
    isInvalid(meal.summary) ||
    isInvalid(meal.instructions) ||
    isInvalid(meal.creator) ||
    isInvalid(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    (meal.image instanceof File && meal.image.size === 0)
  ) {
    return { message: "Invalid input. Please check all fields." };
  }

  await saveMeal(meal);
  redirect("/meals");
};
