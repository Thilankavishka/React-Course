import { useMealsListContext } from "./MealsProvide";

export default function Counter() {
  const { meals } = useMealsListContext();
  return (
    <>
      <div>
        <h3>number Of Meals today: {meals.length}</h3>
      </div>
    </>
  );
}
