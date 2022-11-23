import { useSelector } from "react-redux";
import { useState, useEffect } from 'react';

export default function GameList() {
  const done = useSelector((state) => state.data.done);
  const list = useSelector((state) => state.data.items);
  const [filteredArr, setfilter] = useState([]);

  useEffect(() => {
    setfilter([...list]);
  }, [list]);

  const searchHandler = (e) => {
    const search = e.target.value;
    const copy = list.filter(item => item.title.includes(search));
    setfilter(copy);
  };

  return (
    <div>
      <input type="text" onChange={searchHandler} />
      {done ? (
        filteredArr.map((item) => {
          return <div key={item.id}> {item.title}</div>;
        })
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
