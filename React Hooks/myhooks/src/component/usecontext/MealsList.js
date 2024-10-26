import { useMealsListContext } from "./MealsProvide";

export default function MealsList() {
  const { meals } = useMealsListContext();
  return (
    <>
      <div>
        <h1>Meals list using context API</h1>
        {meals.map((item, id) => (
          <h1 key={id}>{item}</h1>
        ))}
      </div>
    </>
  );
}
