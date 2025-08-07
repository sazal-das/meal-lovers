import { Meal } from "@/app/definations";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";

const db = sql("meals.db");

export const getMeals = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM meals").all();
};

export const getMealBySlug = (slug: string) => {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
};

export const saveMeal = async (meal: Meal) => {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);
  meal.summary = xss(meal.summary);
  meal.title = xss(meal.title);
  meal.creator = xss(meal.creator);
  meal.creator_email = xss(meal.creator_email);

  const extension = meal.image.toString().split(".").pop();
  const fileName = `${meal.slug}.${extension}`;
  const stream = fs.createWriteStream(`public/images/${fileName}`);

  if (meal.image instanceof File) {
    const buffer = await meal.image.arrayBuffer();
    stream.write(Buffer.from(buffer), (error) => {
      if (error) {
        throw new Error("Error writing image to file:", error);
      }
    });
  }
  meal.image = `/images/${fileName}`;

  return db
    .prepare(
      "INSERT INTO meals (title, slug, image, summary, instructions, creator, creator_email) VALUES (@title, @slug, @image, @summary, @instructions, @creator, @creator_email)"
    )
    .run(meal);
};
