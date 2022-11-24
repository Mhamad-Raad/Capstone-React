import { useSelector } from "react-redux";

import GameList from '../Componenets/GameList';

export default function Home({games, Done}) {
  const favorites = useSelector((state) => state.data.favorites);

  console.log(Done)

  return (
    <>
      <GameList Games={games} favorites={favorites} Done={Done} />
    </>
  )
}
