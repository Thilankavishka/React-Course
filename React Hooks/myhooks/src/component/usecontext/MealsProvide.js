import React from "react";
const MealsContext = React.createContext();

const TodatMeals = ["Baked beans", "Baked sweet potatoes", "Baked potatoes"];

export default function MealsProvider({ children }) {
  const [meals, setMealsList] = React.useState(TodatMeals);
  return (
    <MealsContext.Provider value={{ meals }}>{children}</MealsContext.Provider>
  );
}

export const useMealsListContext = () => React.useContext(MealsContext);
