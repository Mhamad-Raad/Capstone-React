import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

import GameList from '../Componenets/GameList';
import AppBar from '../Layout/Navbar';

export default function Home() {

  const done = useSelector((state) => state.data.done);
  const list = useSelector((state) => state.data.items);
  const [filteredArr, setfilter] = useState([]);

  console.log(done);

  useEffect(() => {
    setfilter([...list]);
  }, [list]);

  const searchHandler = (e) => {
    const search = e.target.value;
    const copy = list.filter((item) => item.title.includes(search));
    setfilter(copy);
  };
  
  return (
    <>
      <AppBar inputSearchHandler={searchHandler} />
      <GameList Games={filteredArr} Done={done} />
    </>
  )
}
