import { useDispatch, useSelector } from "react-redux";

export default function GameList() {
  const done = useSelector(state => state.data.done);
  const list = useSelector(state => state.data.items);

  console.log(list);

  return (
    <div>
      {done ? (
        list.map((item) => {
          return <div> {item.name}</div>;
        })
      ) : (
          <div>Loading...</div>
      )}
    </div>
  );
}
