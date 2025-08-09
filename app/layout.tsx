import "./globals.css";
import MainHeader from "@/components/main-header/MainHeader";

export const metadata = {
  title: "Meal Lover's",
  description: "Delicious meals, shared by a food-loving community.",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
