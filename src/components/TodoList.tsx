export const data = [
  {
    id: 1,
    name: "Blood Arowana",
  },
  {
    id: 2,
    name: "Royal Super Red Arowana",
  },
  {
    id: 3,
    name: "Super Red Arowana",
  },
];

export default function TodoList() {
  return (
    <>
      <ul className="grid grid-cols-3 justify-self-center">
        {data.map((item) => (
          <li className="self-center" key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
}
