import { useDispatch, useSelector } from "react-redux";

export default function GameList() {
  const done = useSelector(state => state.data.done);
  const list = useSelector(state => state.data.items);

  return (
    <div>
      {done ? (
        list.map((item) => {
          return <div key={item.id}> {item.title}</div>;
        })
      ) : (
          <div>Loading...</div>
      )}
    </div>
  );
}
